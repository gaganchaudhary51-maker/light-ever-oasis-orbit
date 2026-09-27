import { useEffect, useState } from "react";
import { LISTINGS, type Listing, type ListingStatus, type ListingType } from "./listings";
import { loadJson, saveJson } from "./storage";
import { compressImage, isMediaKey, loadMediaUrl, mediaId, mediaKey, saveMedia } from "./media-db";

const KEY = "listings";
const EVT = "rw-listings";

function cloneOne(l: Listing): Listing {
  return {
    ...l,
    gallery: [...l.gallery],
    highlights: [...l.highlights],
    highlightsHi: [...l.highlightsHi],
  };
}

function cloneAll(rows: Listing[]) {
  return rows.map(cloneOne);
}

export function getListingsSync(): Listing[] {
  const stored = loadJson<Listing[] | null>(KEY, null);
  if (!stored?.length) return cloneAll(LISTINGS);
  const bySlug = new Map(stored.map((l) => [l.slug, l]));
  const seedSlugs = new Set(LISTINGS.map((l) => l.slug));
  const merged = LISTINGS.map((seed) => {
    const over = bySlug.get(seed.slug);
    if (!over) return cloneOne(seed);
    return {
      ...seed,
      ...over,
      gallery: over.gallery?.length ? [...over.gallery] : [...seed.gallery],
      highlights: over.highlights?.length ? [...over.highlights] : [...seed.highlights],
      highlightsHi: over.highlightsHi?.length ? [...over.highlightsHi] : [...seed.highlightsHi],
    };
  });
  const extras = stored.filter((l) => !seedSlugs.has(l.slug)).map(cloneOne);
  return [...merged, ...extras];
}

function persist(rows: Listing[]) {
  saveJson(KEY, rows);
  if (typeof window !== "undefined") window.dispatchEvent(new Event(EVT));
}

async function hydrateImages(rows: Listing[]): Promise<Listing[]> {
  const next = cloneAll(rows);
  const resolve = async (src: string) => {
    if (!isMediaKey(src)) return src;
    return (await loadMediaUrl(mediaId(src))) ?? src;
  };
  for (const row of next) {
    row.image = await resolve(row.image);
    row.panorama = await resolve(row.panorama);
    row.drone = await resolve(row.drone);
    row.gallery = await Promise.all(row.gallery.map(resolve));
  }
  return next;
}

export function useListings() {
  const [rows, setRows] = useState<Listing[]>(LISTINGS);
  useEffect(() => {
    let alive = true;
    const load = () => {
      void hydrateImages(getListingsSync()).then((r) => {
        if (alive) setRows(r);
      });
    };
    load();
    window.addEventListener(EVT, load);
    return () => {
      alive = false;
      window.removeEventListener(EVT, load);
    };
  }, []);
  return rows;
}

export function useListing(slug: string) {
  return useListings().find((l) => l.slug === slug);
}

export function saveListing(slug: string, patch: Partial<Listing>) {
  const rows = getListingsSync();
  const idx = rows.findIndex((l) => l.slug === slug);
  if (idx === -1) return;
  rows[idx] = { ...rows[idx], ...patch };
  persist(rows);
}

export function addListing(): Listing {
  const rows = getListingsSync();
  const id = `home-${Date.now()}`;
  const row: Listing = {
    slug: id,
    name: "New home",
    nameHi: "नया घर",
    type: "flat",
    locality: "Gurugram",
    localityHi: "गुरुग्राम",
    status: "available",
    priceBand: "On request",
    priceBandHi: "पूछें",
    size: "—",
    sizeHi: "—",
    beds: 3,
    baths: 3,
    image: "/interiors/living.jpg",
    gallery: ["/interiors/living.jpg", "/interiors/bedroom.jpg", "/interiors/kitchen.jpg"],
    panorama: "/interiors/panorama.jpg",
    drone: "/interiors/drone.jpg",
    blurb: "Add details and photos from the owner dashboard.",
    blurbHi: "मालिक डैशबोर्ड से विवरण और फ़ोटो जोड़ें।",
    highlights: ["Gurugram", "Ready"],
    highlightsHi: ["गुरुग्राम", "रेडी"],
    assignedAgentId: "agt-rohit",
  };
  persist([...rows, row]);
  return row;
}

export function removeListing(slug: string) {
  if (LISTINGS.some((l) => l.slug === slug)) return false;
  persist(getListingsSync().filter((l) => l.slug !== slug));
  return true;
}

export function isSeedListing(slug: string) {
  return LISTINGS.some((l) => l.slug === slug);
}

export function isPreviewImage(src: string) {
  return src.startsWith("/listings") || src.startsWith("/interiors") || src.startsWith("/media");
}

export async function setListingPhoto(
  slug: string,
  slot: "image" | "panorama" | "drone" | `gallery-${number}`,
  file: File,
) {
  const blob = await compressImage(file);
  const id = `${slug}:${slot}`;
  await saveMedia(id, blob);
  const key = mediaKey(id);
  const rows = getListingsSync();
  const row = rows.find((l) => l.slug === slug);
  if (!row) return;
  if (slot === "image") {
    row.image = key;
    if (row.gallery[0] && isPreviewImage(row.gallery[0])) row.gallery[0] = key;
  } else if (slot === "panorama") row.panorama = key;
  else if (slot === "drone") row.drone = key;
  else {
    const i = Number(slot.slice(8));
    const gallery = [...row.gallery];
    while (gallery.length <= i) gallery.push(row.image);
    gallery[i] = key;
    row.gallery = gallery;
  }
  persist(rows);
}

export async function addGalleryPhoto(slug: string, file: File) {
  const rows = getListingsSync();
  const row = rows.find((l) => l.slug === slug);
  if (!row) return;
  await setListingPhoto(slug, `gallery-${row.gallery.length}`, file);
}

export function removeGalleryPhoto(slug: string, index: number) {
  const rows = getListingsSync();
  const row = rows.find((l) => l.slug === slug);
  if (!row) return;
  if (row.gallery.length <= 1) return;
  row.gallery = row.gallery.filter((_, i) => i !== index);
  persist(rows);
}

export const TYPES: ListingType[] = ["flat", "penthouse"];
export const STATUSES: ListingStatus[] = ["available", "hold", "sold"];
