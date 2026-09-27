//#region node_modules/.nitro/vite/services/ssr/assets/listings-BDrnreIt.js
var BRAND = {
	name: "Regent Way",
	shortName: "RW",
	owner: "Regent Way",
	tagline: "Flats and penthouses in Gurugram.",
	taglineHi: "गुरुग्राम में फ़्लैट और पेंटहाउस।",
	city: "Gurugram",
	state: "Haryana",
	country: "India",
	pincode: "122002",
	street: "Golf Course Road",
	addressLine: "Golf Course Road, Gurugram, Haryana 122002",
	phoneDisplay: "+91 79836 67722",
	phoneE164: "917983667722",
	hoursEn: "Mon–Sat 10:00–19:00 · Sunday by appointment",
	hoursHi: "सोम–शनि 10:00–19:00 · रविवार अपॉइंटमेंट पर",
	mapsQuery: "Golf Course Road, Gurugram, Haryana 122002",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=Golf+Course+Road,+Gurugram,+Haryana+122002",
	category: "Real estate agency / Luxury residences",
	gbpCategoryPrimary: "Real estate agency",
	gbpCategorySecondary: "Apartment building",
	crmPin: "7722",
	logo: "/logo.png",
	logoSm: "/logo-sm.jpg",
	seoTitle: "Flats & penthouses in Gurugram | Regent Way",
	seoDescription: "Regent Way — a platform for private flats and penthouses in Gurugram. Golf Course Road, DLF Phase 5, Sector 54, Sohna Road. WhatsApp +91 79836 67722.",
	googleQuery: "Regent Way Gurugram flats penthouses",
	googleSearchUrl: "https://www.google.com/search?q=Regent+Way+Gurugram+flats+penthouses",
	googleReviewHint: "After Google Business is live, paste the Place ID here to open the star-review form directly.",
	googlePlaceId: ""
};
function waUrl(text) {
	return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;
}
function waPlain() {
	return `https://wa.me/${BRAND.phoneE164}`;
}
function googleReviewUrl() {
	if (BRAND.googlePlaceId) return `https://search.google.com/local/writereview?placeid=${BRAND.googlePlaceId}`;
	return BRAND.googleSearchUrl;
}
function faqJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Where can I find luxury flats and penthouses in Gurugram?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Regent Way lists private flats and penthouses across Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road. WhatsApp +91 79836 67722 for a viewing."
				}
			},
			{
				"@type": "Question",
				name: "How do I book a viewing with Regent Way?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "WhatsApp +91 79836 67722 from the Regent Way website. Named advisors, one number — no floating brokers."
				}
			},
			{
				"@type": "Question",
				name: "Does Regent Way take Google reviews?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. Scan the Regent Way review QR or search Google for Regent Way Gurugram and leave a star rating after your visit."
				}
			}
		]
	};
}
function localBusinessJsonLd(siteUrl = "https://tundra-frost-cactus.grok.me") {
	return {
		"@context": "https://schema.org",
		"@type": ["RealEstateAgent", "LocalBusiness"],
		name: BRAND.name,
		legalName: BRAND.name,
		image: BRAND.logo,
		telephone: `+${BRAND.phoneE164}`,
		address: {
			"@type": "PostalAddress",
			streetAddress: BRAND.street,
			addressLocality: BRAND.city,
			addressRegion: BRAND.state,
			postalCode: BRAND.pincode,
			addressCountry: "IN"
		},
		areaServed: {
			"@type": "City",
			name: "Gurugram"
		},
		url: siteUrl,
		priceRange: "₹₹₹₹",
		openingHoursSpecification: [{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			opens: "10:00",
			closes: "19:00"
		}],
		sameAs: [BRAND.googleSearchUrl],
		contactPoint: {
			"@type": "ContactPoint",
			telephone: `+${BRAND.phoneE164}`,
			contactType: "sales",
			areaServed: "IN",
			availableLanguage: ["hi", "en"]
		}
	};
}
var LISTINGS = [
	{
		slug: "golf-course-penthouse",
		name: "The Regent Penthouse",
		nameHi: "द रीजेंट पेंटहाउस",
		type: "penthouse",
		locality: "Golf Course Road, Gurugram",
		localityHi: "गोल्फ कोर्स रोड, गुरुग्राम",
		status: "available",
		priceBand: "₹9.40 – 10.80 Cr",
		priceBandHi: "₹9.40 – 10.80 करोड़",
		size: "4,200 sq ft · 4 BHK",
		sizeHi: "4,200 वर्ग फुट · 4 बीएचके",
		beds: 4,
		baths: 5,
		image: "/listings/khair-manor.jpg",
		gallery: [
			"/listings/khair-manor.jpg",
			"/interiors/living.jpg",
			"/interiors/bedroom.jpg",
			"/interiors/kitchen.jpg"
		],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A full-floor penthouse on Golf Course Road — private lift lobby, wraparound terrace and a sky living room that looks down the corridor. Built for a family that wants height, not a farmhouse commute.",
		blurbHi: "गोल्फ कोर्स रोड पर फुल-फ्लोर पेंटहाउस — निजी लिफ्ट लॉबी, चारों ओर टेरेस और स्काई लिविंग। ऊँचाई चाहिए, फ़ार्महाउस की दूरी नहीं।",
		highlights: [
			"Private lift lobby",
			"Wraparound terrace",
			"Staff room + 3 car parks",
			"Ready to move"
		],
		highlightsHi: [
			"निजी लिफ्ट लॉबी",
			"रैपराउंड टेरेस",
			"स्टाफ रूम + 3 कार पार्क",
			"रेडी टू मूव"
		],
		assignedAgentId: "agt-rohit"
	},
	{
		slug: "dlf-crest-flat",
		name: "DLF Crest Residence",
		nameHi: "डीएलएफ क्रेस्ट रेज़िडेंस",
		type: "flat",
		locality: "DLF Phase 5, Gurugram",
		localityHi: "डीएलएफ फेज़ 5, गुरुग्राम",
		status: "available",
		priceBand: "₹4.85 – 5.40 Cr",
		priceBandHi: "₹4.85 – 5.40 करोड़",
		size: "3,100 sq ft · 3.5 BHK",
		sizeHi: "3,100 वर्ग फुट · 3.5 बीएचके",
		beds: 4,
		baths: 4,
		image: "/listings/ramghat-duplex.jpg",
		gallery: [
			"/listings/ramghat-duplex.jpg",
			"/interiors/living.jpg",
			"/interiors/bedroom.jpg"
		],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A lock-and-leave flat in DLF Phase 5 — gold-railed balconies, two living rooms, club and pool on the podium. Quiet enough for weeknights, five minutes from Cyber Hub.",
		blurbHi: "डीएलएफ फेज़ 5 का लॉक-एंड-लीव फ़्लैट — गोल्ड रेलिंग वाली बालकनी, दो लिविंग, क्लब और पूल। साइबर हब से पाँच मिनट।",
		highlights: [
			"Club + pool",
			"Two living rooms",
			"High floor",
			"Gated tower"
		],
		highlightsHi: [
			"क्लब + पूल",
			"दो लिविंग रूम",
			"ऊपरी मंज़िल",
			"गेटेड टावर"
		],
		assignedAgentId: "agt-anjali"
	},
	{
		slug: "sector-54-penthouse",
		name: "Sector 54 Sky Villa",
		nameHi: "सेक्टर 54 स्काई विला",
		type: "penthouse",
		locality: "Sector 54, Gurugram",
		localityHi: "सेक्टर 54, गुरुग्राम",
		status: "available",
		priceBand: "₹7.20 – 8.10 Cr",
		priceBandHi: "₹7.20 – 8.10 करोड़",
		size: "3,800 sq ft · 4 BHK",
		sizeHi: "3,800 वर्ग फुट · 4 बीएचके",
		beds: 4,
		baths: 4,
		image: "/listings/medical-villa.jpg",
		gallery: [
			"/listings/medical-villa.jpg",
			"/interiors/living.jpg",
			"/interiors/kitchen.jpg"
		],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A quiet sky villa a short drive from Golf Course Road. Linear gold lighting, a study that can stay a study, and a terrace kitchen for winter evenings.",
		blurbHi: "गोल्फ कोर्स रोड के पास शांत स्काई विला। गोल्ड लाइटिंग, स्टडी, और सर्दियों की शाम के लिए टेरेस किचन।",
		highlights: [
			"Study / den",
			"Terrace kitchen",
			"North-east puja",
			"Wide frontage"
		],
		highlightsHi: [
			"स्टडी / डेन",
			"टेरेस किचन",
			"उत्तर-पूर्व पूजा",
			"चौड़ा फ्रंटेज"
		],
		assignedAgentId: "agt-imran"
	},
	{
		slug: "sohna-road-flat",
		name: "Sohna Road Residence",
		nameHi: "सोहना रोड रेज़िडेंस",
		type: "flat",
		locality: "Sohna Road, Gurugram",
		localityHi: "सोहना रोड, गुरुग्राम",
		status: "available",
		priceBand: "₹2.15 – 2.45 Cr",
		priceBandHi: "₹2.15 – 2.45 करोड़",
		size: "2,050 sq ft · 3 BHK",
		sizeHi: "2,050 वर्ग फुट · 3 बीएचके",
		beds: 3,
		baths: 3,
		image: "/listings/tappal-estate.jpg",
		gallery: ["/listings/tappal-estate.jpg", "/listings/tappal-garden.jpg"],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A gated 3 BHK on Sohna Road with a black-and-gold entrance already in. Clear papers. First home, or a quiet floor for parents who still want the city.",
		blurbHi: "सोहना रोड पर गेटेड 3 बीएचके — काला-सोना एंट्रेंस लगा हुआ। साफ़ कागज़। पहला घर, या माता-पिता के लिए।",
		highlights: [
			"Clear title",
			"Gated society",
			"3 BHK",
			"Ready"
		],
		highlightsHi: [
			"साफ़ टाइटल",
			"गेटेड सोसाइटी",
			"3 बीएचके",
			"रेडी"
		],
		assignedAgentId: "agt-priya"
	},
	{
		slug: "mg-road-flat",
		name: "MG Road Maisonette",
		nameHi: "एमजी रोड मेज़ोनेट",
		type: "flat",
		locality: "MG Road, Gurugram",
		localityHi: "एमजी रोड, गुरुग्राम",
		status: "hold",
		priceBand: "₹3.60 – 4.05 Cr",
		priceBandHi: "₹3.60 – 4.05 करोड़",
		size: "2,900 sq ft · 4 BHK",
		sizeHi: "2,900 वर्ग फुट · 4 बीएचके",
		beds: 4,
		baths: 3,
		image: "/listings/civil-duplex.jpg",
		gallery: [
			"/listings/civil-duplex.jpg",
			"/interiors/bedroom.jpg",
			"/interiors/living.jpg"
		],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A stacked maisonette on MG Road, currently on hold for a returning NRI family. Ask to be waitlisted — it may release.",
		blurbHi: "एमजी रोड का मेज़ोनेट, अभी होल्ड पर। वेटलिस्ट पर नाम लिखवाएँ।",
		highlights: [
			"MG Road address",
			"High ceilings",
			"On hold",
			"Waitlist open"
		],
		highlightsHi: [
			"एमजी रोड पता",
			"ऊँची छत",
			"होल्ड पर",
			"वेटलिस्ट खुली"
		],
		assignedAgentId: "agt-sandeep"
	},
	{
		slug: "sector-43-flat",
		name: "Sector 43 Courtyard Flat",
		nameHi: "सेक्टर 43 कोर्टयार्ड फ़्लैट",
		type: "flat",
		locality: "Sector 43, Gurugram",
		localityHi: "सेक्टर 43, गुरुग्राम",
		status: "available",
		priceBand: "₹2.85 – 3.25 Cr",
		priceBandHi: "₹2.85 – 3.25 करोड़",
		size: "2,400 sq ft · 3 BHK",
		sizeHi: "2,400 वर्ग फुट · 3 बीएचके",
		beds: 3,
		baths: 3,
		image: "/listings/khair-cottage.jpg",
		gallery: [
			"/listings/khair-cottage.jpg",
			"/interiors/kitchen.jpg",
			"/interiors/bedroom.jpg"
		],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A compact 3 BHK with a courtyard-facing living room. Easy first home near Golf Course Road — low upkeep, street-level garden, ready keys.",
		blurbHi: "कोर्टयार्ड की ओर लिविंग वाला छोटा 3 बीएचके। गोल्फ कोर्स रोड के पास पहला घर — कम रखरखाव, रेडी चाबी।",
		highlights: [
			"3 BHK",
			"Low upkeep",
			"Garden court",
			"Ready"
		],
		highlightsHi: [
			"3 बीएचके",
			"कम रखरखाव",
			"गार्डन कोर्ट",
			"रेडी"
		],
		assignedAgentId: "agt-rohit"
	},
	{
		slug: "gce-penthouse",
		name: "Golf Course Ext Penthouse",
		nameHi: "गोल्फ कोर्स एक्सट पेंटहाउस",
		type: "penthouse",
		locality: "Sector 65, Gurugram",
		localityHi: "सेक्टर 65, गुरुग्राम",
		status: "sold",
		priceBand: "₹6.40 – 6.90 Cr",
		priceBandHi: "₹6.40 – 6.90 करोड़",
		size: "3,600 sq ft · 4 BHK",
		sizeHi: "3,600 वर्ग फुट · 4 बीएचके",
		beds: 5,
		baths: 4,
		image: "/listings/ramghat-heritage.jpg",
		gallery: ["/listings/ramghat-heritage.jpg", "/interiors/living.jpg"],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "Terrace penthouse with a fountain court — sold to a doctor family in 2026. Kept on the site so you can see the finish Regent Way delivers.",
		blurbHi: "फव्वारे वाले कोर्ट वाला टेरेस पेंटहाउस — 2026 में एक डॉक्टर परिवार को बिका। फ़िनिश देखने के लिए साइट पर रखा गया है।",
		highlights: [
			"Sold",
			"Terrace fountain",
			"Shown as finish sample"
		],
		highlightsHi: [
			"बिक चुका",
			"टेरेस फव्वारा",
			"फ़िनिश सैंपल"
		],
		assignedAgentId: "agt-anjali"
	},
	{
		slug: "sector-52-terrace",
		name: "Ardee Terrace Flat",
		nameHi: "आर्डी टेरेस फ़्लैट",
		type: "flat",
		locality: "Sector 52, Gurugram",
		localityHi: "सेक्टर 52, गुरुग्राम",
		status: "available",
		priceBand: "₹1.95 – 2.25 Cr",
		priceBandHi: "₹1.95 – 2.25 करोड़",
		size: "1,780 sq ft · 3 BHK",
		sizeHi: "1,780 वर्ग फुट · 3 बीएचके",
		beds: 3,
		baths: 3,
		image: "/listings/tappal-garden.jpg",
		gallery: ["/listings/tappal-garden.jpg", "/listings/tappal-estate.jpg"],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "A 3 BHK with a private terrace already finished in stone. For a compact family, or a lock-and-leave floor near Golf Course Extension.",
		blurbHi: "पत्थर से तैयार निजी टेरेस वाला 3 बीएचके। छोटे परिवार, या गोल्फ कोर्स एक्सटेंशन के पास लॉक-एंड-लीव फ़्लोर।",
		highlights: [
			"Private terrace",
			"3 BHK",
			"Stone finish",
			"Ready"
		],
		highlightsHi: [
			"निजी टेरेस",
			"3 बीएचके",
			"स्टोन फ़िनिश",
			"रेडी"
		],
		assignedAgentId: "agt-priya"
	}
];
function listingBySlug(slug) {
	return LISTINGS.find((l) => l.slug === slug);
}
function residenceJsonLd(listing) {
	return {
		"@context": "https://schema.org",
		"@type": "Apartment",
		name: listing.name,
		description: listing.blurb,
		image: listing.image,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Gurugram",
			addressRegion: "Haryana",
			addressCountry: "IN",
			streetAddress: listing.locality
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 28.4595,
			longitude: 77.0266
		}
	};
}
//#endregion
export { listingBySlug as a, waPlain as c, googleReviewUrl as i, waUrl as l, LISTINGS as n, localBusinessJsonLd as o, faqJsonLd as r, residenceJsonLd as s, BRAND as t };
