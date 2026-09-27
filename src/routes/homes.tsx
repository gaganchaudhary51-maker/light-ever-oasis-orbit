import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/homes")({
  component: HomesLayout,
  head: () => ({
    meta: [
      { title: `Flats & penthouses in Gurugram | ${BRAND.name}` },
      {
        name: "description",
        content:
          "Private flats and penthouses in Gurugram — Golf Course Road, DLF Phase 5, Sector 54, Sohna Road. Regent Way.",
      },
    ],
  }),
});

function HomesLayout() {
  return <Outlet />;
}
