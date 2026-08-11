import type { Locale } from "../i18n/config";

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
  galleryTop?: GalleryImage[];
  galleryBottom?: GalleryImage[];
  featuredGrid?: GalleryImage[];
  applications: string[];
  note: string;
  specTable?: SpecTable;
  briquetteSheets?: BriquetteSheet[];
};

const VANILLA_GALLERY = {
  thumbnail: "/assets/images/products/vanilla/vanilla-crystalline-1.jpeg",
  galleryTop: [
    {
      src: "/assets/images/products/vanilla/vanilla-bean-plant-1.jpeg",
      width: 1600,
      height: 900,
    },
    {
      src: "/assets/images/products/vanilla/vanilla-flower-1.jpeg",
      width: 1000,
      height: 667,
    },
  ],
  galleryBottom: [
    {
      src: "/assets/images/products/vanilla/vanilla-beans-rows.jpeg",
      width: 800,
      height: 602,
    },
    {
      src: "/assets/images/products/vanilla/vanilla-caviar-1.jpeg",
      width: 1600,
      height: 900,
    },
    {
      src: "/assets/images/products/vanilla/vanilla-pod-closeup.jpeg",
      width: 720,
      height: 1280,
    },
  ],
  featuredGrid: [
    {
      src: "/assets/images/products/vanilla/vanilla-extract-1.jpeg",
      width: 1101,
      height: 800,
    },
    {
      src: "/assets/images/products/vanilla/vanilla-beans-vacuum-pack.jpeg",
      width: 900,
      height: 1600,
    },
    {
      src: "/assets/images/products/vanilla/vanilla-beans-in-hand.jpeg",
      width: 1066,
      height: 1600,
    },
  ],
};

const CHARCOAL_GALLERY = {
  thumbnail:
    "/assets/images/products/charcoal/charcoal-shisha-burner-ring.jpeg",
  galleryTop: [
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
  galleryBottom: [
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
  ],
};

const PRODUCTS_EN: ProductDetail[] = [
  {
    slug: "vanilla",
    tag: "Origin: Indonesia",
    title: "Vanilla Products",
    summary:
      "Beans, paste, extract, and powder, sourced from Indonesian growers. Multiple grades available on request.",
    intro:
      "Our vanilla is sourced directly from smallholder farmers in Indonesia, known for their traditional curing expertise and consistent quality. We work closely with growers to make sure every batch meets the aroma, moisture, and appearance standards European buyers expect.",
    ...VANILLA_GALLERY,
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
            "Pure premium-quality vanilla seeds extracted from ripe pods. Intensely aromatic, ideal for gourmet use.",
        },
        {
          no: 2,
          product: "Crystallized Vanilla",
          size: "1 KG",
          description:
            "Naturally crystallized vanilla pods with an aromatic vanillin coating. Rare and high quality.",
        },
        {
          no: 3,
          product: "Vanilla Powder (100%)",
          size: "1 KG",
          description:
            "Fine powder made from dried, premium-grade vanilla pods.",
        },
        {
          no: 4,
          product: "Vanilla Paste (Natural)",
          size: "1 KG",
          description:
            "Pure vanilla paste with real vanilla seeds from ripe pods. Strong, distinctive aroma, ideal for gourmet use such as gelato, pastry, and premium desserts.",
        },
        {
          no: 5,
          product: "Vanilla Extract Alcohol (Natural)",
          size: "1 KG",
          description:
            "Alcohol-based vanilla extract. Delivers a very strong vanilla aroma and flavor, formulated specifically for gourmet needs and industrial-scale production.",
        },
        {
          no: 6,
          product: "Vanilla Extract Non-Alcohol (Natural)",
          size: "1 KG",
          description:
            "Alcohol-free vanilla extract. Provides a strong, intense vanilla aroma, suitable for premium formulations, industrial use, and products that limit or avoid alcohol.",
        },
        {
          no: 7,
          product: "Vanilla Essence",
          size: "1 KG",
          description:
            "Concentrated vanilla flavoring made from a blend of natural and synthetic ingredients. Designed to deliver a consistent vanilla aroma and flavor in bakery, confectionery, and beverage products. Ideal for efficient, economical large-scale food production.",
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
    ...CHARCOAL_GALLERY,
    forms: ["BBQ Briquettes", "Shisha Charcoal"],
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

const PRODUCTS_DE: ProductDetail[] = [
  {
    slug: "vanilla",
    tag: "Herkunft: Indonesien",
    title: "Vanilleprodukte",
    summary:
      "Schoten, Paste, Extrakt und Pulver, bezogen von indonesischen Erzeugern. Mehrere Qualitätsstufen auf Anfrage erhältlich.",
    intro:
      "Unsere Vanille wird direkt von Kleinbauern in Indonesien bezogen, die für ihr traditionelles Fermentations- und Trocknungswissen sowie gleichbleibende Qualität bekannt sind. Wir arbeiten eng mit den Erzeugern zusammen, um sicherzustellen, dass jede Charge den Aroma-, Feuchtigkeits- und Erscheinungsstandards entspricht, die europäische Käufer erwarten.",
    ...VANILLA_GALLERY,
    categories: [
      {
        title: "Vanilleschoten",
        items: [
          {
            name: "Grade A Premium",
            image:
              "/assets/images/products/vanilla/vanilla-bean-grade-a-1.jpeg",
            description:
              "Gut fermentierte, aromatische ganze Schoten, in loser Schüttung für den Premium-Einzelhandel und Lebensmittelanwendungen aufbereitet.",
          },
          {
            name: "Grade B",
            image:
              "/assets/images/products/vanilla/vanilla-bean-grade-b-1.jpeg",
            description:
              "Vakuumverpackte Schoten, geeignet für die Extraktherstellung und den industriellen Einsatz.",
          },
          {
            name: "Individuelle Spezifikation",
            image:
              "/assets/images/products/vanilla/vanilla-bean-custom-spec-1.jpeg",
            description:
              "Längen- und Feuchtigkeitsspezifikation abgestimmt auf individuelle Käuferanforderungen.",
          },
        ],
      },
      {
        title: "Paste, Extrakt & Pulver",
        items: [
          {
            name: "Vanillepaste",
            image: "/assets/images/products/vanilla/vanilla-paste-1.jpeg",
            description:
              "Reichhaltige Paste mit echten Vanillesamen, direkt einsatzbereit für Rezepturen.",
          },
          {
            name: "Vanilleextrakt",
            image: "/assets/images/products/vanilla/vanilla-extract-1.jpeg",
            description: "Erhältlich in alkoholischer und alkoholfreier Rezeptur.",
          },
          {
            name: "Vanillepulver",
            image: "/assets/images/products/vanilla/vanilla-powder-1.jpeg",
            description:
              "Fein gemahlen, ideal für Backwaren und Trockenmischungen.",
          },
          {
            name: "Vanillekaviar",
            image: "/assets/images/products/vanilla/vanilla-caviar-1.jpeg",
            description:
              "Ausgekratzte Vanillesamen für die gehobene kulinarische Präsentation.",
          },
        ],
      },
      {
        title: "Verpackung & Präsentation",
        items: [
          {
            name: "Exportverpackung, lose",
            image:
              "/assets/images/products/vanilla/vanilla-packaging-bulk-1.jpeg",
            description:
              "Vakuumversiegelte Großgebinde, vorbereitet für den internationalen Versand.",
          },
          {
            name: "Einzelhandel & Private Label",
            image: "/assets/images/products/vanilla/vanilla-packing-1.jpeg",
            description:
              "Etikettierte Einzelhandelsverpackung und OEM-Präsentation auf Anfrage erhältlich.",
          },
        ],
      },
    ],
    applications: [
      "Bäckerei & Konditorei",
      "Getränke",
      "Kosmetik & Duftstoffe",
      "Lebensmittelherstellung",
    ],
    note: "Mehrere Qualitätsstufen je nach Fermentationsqualität und Feuchtigkeitsgehalt erhältlich, abgestimmt auf die Anforderungen Ihrer Produktrezeptur.",
    specTable: {
      title: "Vanilleschoten",
      sections: [
        {
          subtitle: "Vanilla Planifolia (Vanilla planifolia Andrews)",
          rows: [
            {
              no: 1,
              product: "Gourmet Premium",
              size: "16 - 18 cm",
              weight: "4-6 g",
              moisture: "30 - 35%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Ölig, vollmundig, ohne Risse, flexibel, glänzend",
              aroma: "Intensiv, balsamisch-süß",
            },
            {
              no: 2,
              product: "Grade A Premium",
              size: "16 - 18 cm",
              weight: "3-5 g",
              moisture: "25 - 30%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Ölig, leicht fest, ohne Risse, dunkelbraun",
              aroma: "Süß, ausgewogen, mild",
            },
            {
              no: 3,
              product: "Grade B Premium",
              size: "15 - 20 cm",
              weight: "-",
              moisture: "15 - 20%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Halbtrocken, leichte Risse zulässig",
              aroma: "Mild, ideal für die Extraktion",
            },
            {
              no: 4,
              product: "Grade C Premium",
              size: "Alle Größen",
              weight: "-",
              moisture: "Natürlich/Niedrig",
              packaging: "Lose/Kunststoff (ohne Vakuum)",
              condition: "Gebrochen, trocken, rissig, für die Massenextraktion",
              aroma: "Minimaler Vanilleduft",
            },
            {
              no: 1,
              product: "Gourmet Super Premium",
              size: "19 - 21 cm",
              weight: "5-8 g",
              moisture: "30 - 38%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Ölig, vollmundig, ohne Risse, flexibel, glänzend",
              aroma: "Intensiv, balsamisch-süß, warm",
            },
            {
              no: 2,
              product: "Grade A Super Premium",
              size: "19 - 21 cm",
              weight: "4-7 g",
              moisture: "30 - 38%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Ölig, leicht fest, ohne Risse, dunkelbraun",
              aroma: "Süß, ausgewogen, mild",
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
              weight: "3-6 g",
              moisture: "27 - 32%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition:
                "Ölige, glänzende Oberfläche ohne Risse, weich und geschmeidig",
              aroma: "Intensiv süß, exotisch-blumig mit kräftigen fruchtigen Noten",
            },
            {
              no: 2,
              product: "Grade A Premium",
              size: "14 - 16 cm",
              weight: "3-6 g",
              moisture: "25 - 30%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Ölig, halbfest, weich, leicht faltig",
              aroma: "Süß-blumig mit dezenter Fruchtigkeit",
            },
            {
              no: 3,
              product: "Grade B Premium",
              size: "13 - 16 cm",
              weight: "3-5 g",
              moisture: "15 - 20%",
              packaging: "Vakuumverpackt (Kunststoff)",
              condition: "Halbtrocken, flexibel, weniger ölig, vereinzelte Risse",
              aroma: "Leicht blumig, fruchtige Untertöne",
            },
            {
              no: 4,
              product: "Grade C Premium",
              size: "Alle Größen",
              weight: "3-5 g",
              moisture: "Natürlich/Niedrig",
              packaging: "Lose/Kunststoff (ohne Vakuum)",
              condition: "Trocken, spröde, Risse zulässig, raue Oberfläche",
              aroma: "Leicht blumig mit schwachem Vanillearoma",
            },
          ],
        },
      ],
      derivativeTitle: "Folgeprodukte",
      derivativeRows: [
        {
          no: 1,
          product: "Vanillekaviar",
          size: "1 KG",
          description:
            "Reine Vanillesamen in Premiumqualität, aus reifen Schoten gewonnen. Intensiv aromatisch, ideal für den Gourmet-Einsatz.",
        },
        {
          no: 2,
          product: "Kristallisierte Vanille",
          size: "1 KG",
          description:
            "Natürlich kristallisierte Vanilleschoten mit einer aromatischen Vanillin-Schicht. Selten und von hoher Qualität.",
        },
        {
          no: 3,
          product: "Vanillepulver (100%)",
          size: "1 KG",
          description:
            "Feines Pulver aus getrockneten Vanilleschoten in Premiumqualität.",
        },
        {
          no: 4,
          product: "Vanillepaste (natürlich)",
          size: "1 KG",
          description:
            "Reine Vanillepaste mit echten Vanillesamen aus reifen Schoten. Kräftiges, unverwechselbares Aroma, ideal für Gourmet-Anwendungen wie Gelato, Patisserie und Premium-Desserts.",
        },
        {
          no: 5,
          product: "Vanilleextrakt, alkoholisch (natürlich)",
          size: "1 KG",
          description:
            "Vanilleextrakt auf Alkoholbasis. Liefert ein sehr kräftiges Vanillearoma und -geschmack, speziell für den Gourmet-Bedarf und die industrielle Produktion formuliert.",
        },
        {
          no: 6,
          product: "Vanilleextrakt, alkoholfrei (natürlich)",
          size: "1 KG",
          description:
            "Alkoholfreier Vanilleextrakt. Liefert ein kräftiges, intensives Vanillearoma, geeignet für Premium-Rezepturen, industrielle Anwendungen sowie Produkte mit eingeschränktem oder ohne Alkoholgehalt.",
        },
        {
          no: 7,
          product: "Vanillearoma (Essenz)",
          size: "1 KG",
          description:
            "Konzentriertes Vanillearoma aus einer Mischung natürlicher und synthetischer Zutaten. Entwickelt, um ein gleichbleibendes Vanillearoma und -geschmack in Backwaren, Süßwaren und Getränken zu liefern. Ideal für eine effiziente, wirtschaftliche Lebensmittelproduktion im großen Maßstab.",
        },
      ],
    },
  },
  {
    slug: "charcoal",
    tag: "Herkunft: Indonesien",
    title: "Holzkohleprodukte",
    summary:
      "Grillbriketts und Shisha-Kohle für Restaurants, Einzelhändler und Private-Label-Marken in ganz Europa.",
    intro:
      "Unser Holzkohlesortiment wird aus nachhaltig bezogenem Hartholz hergestellt und erfüllt die Anforderungen an Brenndauer, Aschegehalt und Verpackung des europäischen Gastronomie- und Einzelhandelsmarktes.",
    ...CHARCOAL_GALLERY,
    forms: ["Grillbriketts", "Shisha-Kohle"],
    applications: [
      "Restaurants & Gastronomie",
      "Einzelhandel & Private Label",
      "Shisha-Lounges & Vertrieb",
    ],
    note: "Individuelle Verpackung und OEM-Beschaffungsvereinbarungen sind auf Anfrage erhältlich.",
    briquetteSheets: [
      {
        name: "Shisha-Briketts",
        moq: "15 Tonnen / 20-Fuß-Container",
        specs: [
          { label: "Aschegehalt", value: "1,8% – 2,5%" },
          { label: "Aschefarbe", value: "Hellgrau / Natürlich" },
          { label: "Brenndauer", value: "90 – 120 Minuten" },
          { label: "Zündzeit", value: "<4 Minuten" },
          { label: "Fixkohlenstoff", value: "Mindestens 80%" },
          { label: "Feuchtigkeit", value: "Max. 5%" },
          { label: "Flüchtige Bestandteile", value: "14%" },
          { label: "Heizwert", value: "7000 – 7500 kcal/kg" },
        ],
        sizes: [
          {
            shape: "Würfel",
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
          { shape: "Flach", dimensions: ["25 x 25 x 15 mm"] },
          {
            shape: "Sechseckig",
            dimensions: ["22 x 35 mm", "23 x 40 mm", "25 x 50 mm"],
          },
          {
            shape: "Fingerform",
            dimensions: ["22 x 35 mm", "23 x 40 mm", "25 x 50 mm"],
          },
        ],
        packaging: [
          "Innenverpackung Kunststoff (1 kg), Innenkarton (1 kg), Masterkarton (10 kg). Inklusive Silikagel.",
          "Innenverpackung Kunststoff und Masterkarton / 10 kg. Inklusive Silikagel.",
        ],
      },
      {
        name: "Grillbriketts",
        features: [
          "Rauchfrei",
          "Geruchlos",
          "Funkenfrei",
          "Chemiefrei",
          "Lebensmittelecht",
        ],
        specs: [
          { label: "Aschegehalt", value: "7% – 20%" },
          { label: "Aschefarbe", value: "Hellgrau / Natürlich" },
          { label: "Brenndauer", value: "5 – 9 Stunden" },
          { label: "Zündzeit", value: "<5 Minuten" },
          { label: "Fixkohlenstoff", value: "65% – 70%" },
          { label: "Feuchtigkeit", value: "Max. 5%" },
          { label: "Flüchtige Bestandteile", value: "14%" },
          { label: "Heizwert", value: "6400 – 7200 kcal/kg" },
        ],
        sizes: [
          {
            shape: "Sechseckig",
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
          { shape: "Rechteck", dimensions: ["40 x 200 mm", "50 x 200 mm"] },
          { shape: "Rechteckiges Prisma", dimensions: ["40 x 40 x 80 mm"] },
        ],
        packaging: [
          "Innenverpackung Kunststoff und Masterkarton / 10 kg. Inklusive Silikagel.",
        ],
      },
    ],
  },
];

export function getProducts(locale: Locale): ProductDetail[] {
  return locale === "de" ? PRODUCTS_DE : PRODUCTS_EN;
}

export function getProduct(locale: Locale, slug: string) {
  return getProducts(locale).find((p) => p.slug === slug);
}
