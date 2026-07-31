export type ProductItem = {
  name: string;
  image: string;
  description: string;
};

export type ProductCategory = {
  title: string;
  items: ProductItem[];
};

export type SpecRow = {
  no: number | string;
  product: string;
  size: string;
  weight: string;
  moisture: string;
  packaging: string;
  condition: string;
  aroma: string;
};

export type SpecSection = {
  subtitle: string;
  rows: SpecRow[];
};

export type DerivativeRow = {
  no: number | string;
  product: string;
  size: string;
  description: string;
};

export type SpecTable = {
  title: string;
  sections: SpecSection[];
  derivativeTitle: string;
  derivativeRows: DerivativeRow[];
};

export type BriquetteSizeGroup = {
  shape: string;
  dimensions: string[];
};

export type BriquetteSpecItem = {
  label: string;
  value: string;
};

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

export type BriquetteSheet = {
  name: string;
  moq?: string;
  features?: string[];
  specs: BriquetteSpecItem[];
  sizes: BriquetteSizeGroup[];
  packaging: string[];
};

export type ProductDetail = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  intro: string;
  thumbnail: string;
  categories?: ProductCategory[];
  forms?: string[];
  galleryImages?: GalleryImage[];
  applications: string[];
  note: string;
  specTable?: SpecTable;
  briquetteSheets?: BriquetteSheet[];
};

export const PRODUCTS: ProductDetail[] = [
  {
    slug: "vanilla",
    tag: "Origin: Indonesia",
    title: "Vanilla Products",
    summary:
      "Beans, paste, extract, and powder, sourced from Indonesian growers. Multiple grades available on request.",
    intro:
      "Our vanilla is sourced directly from smallholder farmers in Indonesia, known for their traditional curing expertise and consistent quality. We work closely with growers to make sure every batch meets the aroma, moisture, and appearance standards European buyers expect.",
    thumbnail: "/assets/images/products/vanilla/vanilla-crystalline-1.jpeg",
    galleryImages: [
      {
        src: "/assets/images/products/vanilla/vanilla-beans-vacuum-pack.jpeg",
        width: 900,
        height: 1600,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-flower-1.jpeg",
        width: 1000,
        height: 667,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-pod-closeup.jpeg",
        width: 720,
        height: 1280,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-beans-rows.jpeg",
        width: 800,
        height: 602,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-crystalline-1.jpeg",
        width: 1080,
        height: 1440,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-caviar-1.jpeg",
        width: 1600,
        height: 900,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-beans-in-hand.jpeg",
        width: 1066,
        height: 1600,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-bean-plant-1.jpeg",
        width: 1600,
        height: 900,
      },
      {
        src: "/assets/images/products/vanilla/vanilla-extract-1.jpeg",
        width: 1101,
        height: 800,
      },
    ],
    categories: [
      {
        title: "Vanilla Beans",
        items: [
          {
            name: "Grade A Premium",
            image:
              "/assets/images/products/vanilla/vanilla-bean-grade-a-1.jpeg",
            description:
              "Well-cured, aromatic whole beans prepared in bulk for premium retail and food applications.",
          },
          {
            name: "Grade B",
            image:
              "/assets/images/products/vanilla/vanilla-bean-grade-b-1.jpeg",
            description:
              "Vacuum-packed beans suited for extract production and industrial use.",
          },
          {
            name: "Custom Specification",
            image:
              "/assets/images/products/vanilla/vanilla-bean-custom-spec-1.jpeg",
            description:
              "Length and moisture specification matched to individual buyer requirements.",
          },
        ],
      },
      {
        title: "Paste, Extract & Powder",
        items: [
          {
            name: "Vanilla Paste",
            image: "/assets/images/products/vanilla/vanilla-paste-1.jpeg",
            description:
              "Rich paste flecked with real vanilla seeds, ready for direct use in recipes.",
          },
          {
            name: "Vanilla Extract",
            image: "/assets/images/products/vanilla/vanilla-extract-1.jpeg",
            description: "Available in alcohol and non-alcohol formulations.",
          },
          {
            name: "Vanilla Powder",
            image: "/assets/images/products/vanilla/vanilla-powder-1.jpeg",
            description:
              "Finely ground, ideal for baking and dry mix applications.",
          },
          {
            name: "Vanilla Caviar",
            image: "/assets/images/products/vanilla/vanilla-caviar-1.jpeg",
            description:
              "Scraped vanilla seeds for premium culinary presentation.",
          },
        ],
      },
      {
        title: "Packaging & Presentation",
        items: [
          {
            name: "Bulk Export Packaging",
            image:
              "/assets/images/products/vanilla/vanilla-packaging-bulk-1.jpeg",
            description:
              "Vacuum-sealed bulk packs prepared for international shipping.",
          },
          {
            name: "Retail & Private Label",
            image: "/assets/images/products/vanilla/vanilla-packing-1.jpeg",
            description:
              "Labeled retail packaging and OEM presentation available on request.",
          },
        ],
      },
    ],
    applications: [
      "Bakery & Confectionery",
      "Beverages",
      "Cosmetics & Fragrance",
      "Food Manufacturing",
    ],
    note: "Multiple grades available depending on curing quality and moisture content, matched to your product formulation needs.",
    specTable: {
      title: "Vanilla Beans",
      sections: [
        {
          subtitle: "Vanilla Planifolia (Vanilla planifolia Andrews)",
          rows: [
            {
              no: 1,
              product: "Gourmet Premium",
              size: "16 - 18 cm",
              weight: "4-6 gr",
              moisture: "30 - 35%",
              packaging: "Vacuum Plastic",
              condition: "Oily, full-bodied, non-split, flexible, glossy",
              aroma: "Intense, balsamic-sweet",
            },
            {
              no: 2,
              product: "Grade A Premium",
              size: "16 - 18 cm",
              weight: "3-5 gr",
              moisture: "25 - 30%",
              packaging: "Vacuum Plastic",
              condition: "Oily, slightly firm, non-split, dark brown",
              aroma: "Sweet, balanced, smooth",
            },
            {
              no: 3,
              product: "Grade B Premium",
              size: "15 - 20 cm",
              weight: "-",
              moisture: "15 - 20%",
              packaging: "Vacuum Plastic",
              condition: "Semi-dry, minor splits allowed",
              aroma: "Mild, ideal for extraction",
            },
            {
              no: 4,
              product: "Grade C Premium",
              size: "Allsize",
              weight: "-",
              moisture: "Natural/Low",
              packaging: "Bulk/Plastic (Non Vacuum)",
              condition: "Broken, dry, split, for mass extraction",
              aroma: "Minimal vanilla scent",
            },
            {
              no: 1,
              product: "Gourmet Super Premium",
              size: "19 - 21 cm",
              weight: "5-8 gr",
              moisture: "30 - 38%",
              packaging: "Vacuum Plastic",
              condition: "Oily, full-bodied, non-split, flexible, glossy",
              aroma: "Intense, balsamic-sweet, warm",
            },
            {
              no: 2,
              product: "Grade A Super Premium",
              size: "19 - 21 cm",
              weight: "4-7 gr",
              moisture: "30 - 38%",
              packaging: "Vacuum Plastic",
              condition: "Oily, slightly firm, non-split, dark brown",
              aroma: "Sweet, balanced, smooth",
            },
          ],
        },
        {
          subtitle: "Vanilla Tahitensis (Vanilla tahitensis J.W. Moore)",
          rows: [
            {
              no: 1,
              product: "Gourmet Premium",
              size: "13 - 16 cm",
              weight: "3-6 gr",
              moisture: "27 - 32%",
              packaging: "Vacuum Plastic",
              condition: "Oily, glossy surface with no splits, soft and smooth",
              aroma: "Intensely sweet, exotic floral with rich fruity notes",
            },
            {
              no: 2,
              product: "Grade A Premium",
              size: "14 - 16 cm",
              weight: "3-6 gr",
              moisture: "25 - 30%",
              packaging: "Vacuum Plastic",
              condition: "Oily, semi-firm, soft, light wrinkling",
              aroma: "Sweet floral with subtle fruitiness",
            },
            {
              no: 3,
              product: "Grade B Premium",
              size: "13 - 16 cm",
              weight: "3-5 gr",
              moisture: "15 - 20%",
              packaging: "Vacuum Plastic",
              condition: "Semi-dry, flexible but less oily, some splits",
              aroma: "Light floral, fruity undertones",
            },
            {
              no: 4,
              product: "Grade C Premium",
              size: "Allsize",
              weight: "3-5 gr",
              moisture: "Natural/Low",
              packaging: "Bulk/Plastic (Non Vacuum)",
              condition: "Dry, brittle, split allowed, rough surface",
              aroma: "Light floral with weak vanilla aroma",
            },
          ],
        },
      ],
      derivativeTitle: "Derivative Product",
      derivativeRows: [
        {
          no: 1,
          product: "Vanilla Caviar",
          size: "1 KG",
          description:
            "Biji vanila murni kualitas premium yang diekstrak dari polong matang. Memiliki aroma kuat untuk penggunaan gourmet.",
        },
        {
          no: 2,
          product: "Crystallized Vanilla",
          size: "1 KG",
          description:
            "Polong vanila yang mengkristal secara alami dengan lapisan vanilin aromatik. Langka dan berkualitas tinggi.",
        },
        {
          no: 3,
          product: "Vanilla Powder (100%)",
          size: "1 KG",
          description:
            "Bubuk halus yang terbuat dari polong vanila premium yang telah dikeringkan.",
        },
        {
          no: 4,
          product: "Vanilla Paste (Natural)",
          size: "1 KG",
          description:
            "Pasta vanila murni dengan biji vanila asli dari polong matang. Memiliki aroma yang kuat dan khas, ideal untuk penggunaan gourmet seperti gelato, pastry, dan dessert premium.",
        },
        {
          no: 5,
          product: "Vanilla Extract Alcohol (Natural)",
          size: "1 KG",
          description:
            "Ekstrak vanila dengan kandungan alkohol. Menghadirkan aroma dan rasa vanila yang sangat kuat, diformulasikan khusus untuk kebutuhan gourmet dan produksi skala industri.",
        },
        {
          no: 6,
          product: "Vanilla Extract Non-Alcohol (Natural)",
          size: "1 KG",
          description:
            "Ekstrak vanila tanpa alkohol. Memberikan aroma vanila yang kuat dan intens, cocok untuk formulasi premium, penggunaan industri, serta produk yang membatasi atau tidak menggunakan alkohol.",
        },
        {
          no: 7,
          product: "Vanilla Essence",
          size: "1 KG",
          description:
            "Perisa vanila konsentrat yang terbuat dari campuran bahan alami dan sintetis. Dirancang untuk menghasilkan aroma dan rasa vanila yang konsisten pada produk bakery, confectionery, dan minuman. Ideal untuk produksi makanan skala besar yang efisien dan ekonomis.",
        },
      ],
    },
  },
  {
    slug: "charcoal",
    tag: "Origin: Indonesia",
    title: "Charcoal Products",
    summary:
      "BBQ briquettes and shisha charcoal for restaurants, retailers, and private label brands across Europe.",
    intro:
      "Our charcoal range is produced from sustainably sourced hardwood, prepared to meet the burn time, ash content, and packaging standards required for the European food service and retail market.",
    thumbnail: "/assets/images/products/charcoal/charcoal-bbq-party-grill.jpeg",
    forms: ["BBQ Briquettes", "Shisha Charcoal"],
    galleryImages: [
      {
        src: "/assets/images/products/charcoal/charcoal-bbq-party-grill.jpeg",
        width: 1600,
        height: 1067,
      },
      {
        src: "/assets/images/products/charcoal/charcoal-shisha-hookah-smoke.jpeg",
        width: 1066,
        height: 1600,
      },
      {
        src: "/assets/images/products/charcoal/charcoal-shisha-tongs-glow.jpeg",
        width: 1066,
        height: 1600,
      },
      {
        src: "/assets/images/products/charcoal/charcoal-shisha-cubes-lit.jpeg",
        width: 342,
        height: 269,
      },
      {
        src: "/assets/images/products/charcoal/charcoal-shisha-burner-ring.jpeg",
        width: 1600,
        height: 1067,
      },
    ],
    applications: [
      "Restaurants & Food Service",
      "Retail & Private Label",
      "Shisha Lounges & Distributors",
    ],
    note: "Custom packaging and OEM sourcing arrangements are available on request.",
    briquetteSheets: [
      {
        name: "Shisha Briquettes",
        moq: "15 tons / 20ft",
        specs: [
          { label: "Ash content", value: "1.8% – 2.5%" },
          { label: "Ash color", value: "Light Grey / Natural" },
          { label: "Burning time", value: "90 – 120 minutes" },
          { label: "Ignition time", value: "<4 minutes" },
          { label: "Fix carbon", value: "Minimal 80%" },
          { label: "Moisture", value: "Max 5%" },
          { label: "Volatile matter", value: "14%" },
          { label: "Calorific value", value: "7000 – 7500 Kcal/kg" },
        ],
        sizes: [
          {
            shape: "Cube",
            dimensions: [
              "20 x 20 x 20 mm",
              "22 x 22 x 22 mm",
              "25 x 25 x 25 mm",
              "26 x 26 x 26 mm",
              "27 x 27 x 27 mm",
              "28 x 28 x 28 mm",
              "29 x 29 x 29 mm",
              "30 x 30 x 30 mm",
            ],
          },
          { shape: "Flat", dimensions: ["25 x 25 x 15 mm"] },
          {
            shape: "Hexagonal",
            dimensions: ["22 x 35 mm", "23 x 40 mm", "25 x 50 mm"],
          },
          {
            shape: "Finger",
            dimensions: ["22 x 35 mm", "23 x 40 mm", "25 x 50 mm"],
          },
        ],
        packaging: [
          "Inner plastic (1 kg), inner box (1 kg), master box (10 kg). Silica gel included.",
          "Inner plastic and master box /10kg. Silica gel included.",
        ],
      },
      {
        name: "Barbecue / Grilled Briquettes",
        features: [
          "Smokeless",
          "Odorless",
          "No spark",
          "No chemical",
          "Food grade",
        ],
        specs: [
          { label: "Ash content", value: "7% – 20%" },
          { label: "Ash color", value: "Light Grey / Natural" },
          { label: "Burning time", value: "5 – 9 hours" },
          { label: "Ignition time", value: "<5 minutes" },
          { label: "Fix carbon", value: "65% – 70%" },
          { label: "Moisture", value: "Max 5%" },
          { label: "Volatile matter", value: "14%" },
          { label: "Calorific value", value: "6400 – 7200 Kcal/kg" },
        ],
        sizes: [
          {
            shape: "Hexagonal",
            dimensions: [
              "50 x 200 mm",
              "50 x 150 mm",
              "50 x 100 mm",
              "50 x 50 mm",
              "40 x 200 mm",
              "40 x 150 mm",
              "40 x 100 mm",
              "40 x 50 mm",
            ],
          },
          { shape: "Rectangle", dimensions: ["40 x 200 mm", "50 x 200 mm"] },
          { shape: "Rectangular Prism", dimensions: ["40 x 40 x 80 mm"] },
        ],
        packaging: ["Inner plastic and master box /10kg. Silica gel included."],
      },
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
