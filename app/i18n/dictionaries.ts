import type { Locale } from "./config";

export type Dictionary = typeof dictionaries.en;

export const dictionaries = {
  en: {
    header: {
      nav: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
      },
      becomePartner: "Become a Partner",
    },
    hero: {
      eyebrow: "Germany-Based Import & Trade",
      titleLine1: "Reliable Supply",
      titleLine2: "for Europe.",
      description:
        "Alserd connects European buyers with quality-sourced vanilla and charcoal from Southeast Asia, built on direct sourcing, clear communication, and a partnership-first approach.",
      viewProducts: "View Products",
      becomePartner: "Become a Partner",
    },
    about: {
      eyebrow: "About Alserd",
      description:
        "Alserd is an independent, Germany-based trade business specializing in import and export, product sourcing, and partnership-building between Europe and Southeast Asia, with the goal of creating lasting value for customers, suppliers, and the communities we work with.",
      visionLabel: "Our Vision",
      visionQuote:
        "“To become a trusted bridge between producers in Southeast Asia and European markets, through responsible trade and fair partnerships.”",
      servicesLabel: "Our Services",
      services: [
        "Import & Export",
        "Product Sourcing",
        "Marketing Support",
        "Strategic Partnerships",
      ],
      missionLabel: "Our Mission",
      mission: [
        "Deliver reliable products and honest communication to European customers.",
        "Build transparent, long-term partnerships, not one-off transactions.",
        "Support supplier growth and access to European markets.",
        "Grow sustainably, at a pace that protects quality and trust.",
      ],
    },
    products: {
      eyebrow: "What We Offer",
      titleStart: "Our",
      titleEm: "Products",
      description:
        "Quality-focused sourcing from Indonesia, prepared to meet import requirements for Germany and the European Union.",
      viewDetails: "View Details →",
    },
    approach: {
      eyebrow: "How We Work",
      titleStart: "Our",
      titleEm: "Approach",
      description:
        "The principles that guide how we source, trade, and build partnerships across Europe and Southeast Asia.",
      principles: [
        {
          num: "01",
          title: "Quality First",
          description:
            "Consistent product quality and reliable communication with every supplier, treated as a baseline, not an afterthought.",
        },
        {
          num: "02",
          title: "Flexible Sourcing",
          description:
            "Certified and non-certified sourcing options, matched to what each buyer actually needs.",
        },
        {
          num: "03",
          title: "European Market Focus",
          description:
            "A dedicated focus on understanding German and EU import requirements as we grow.",
        },
        {
          num: "04",
          title: "Partnership Approach",
          description:
            "Long-term cooperation over transactional selling, relationships that grow alongside our partners.",
        },
      ],
    },
    whyAlserd: {
      eyebrow: "Why Work With Us",
      titleStart: "Why",
      titleEm: "Alserd",
      description:
        "Built for European buyers who value direct communication, clear sourcing, and a partner who grows with them.",
      checklist1: [
        "Germany-based business",
        "Direct sourcing from origin",
        "Transparent communication",
      ],
      checklist2: [
        "Custom specifications available",
        "Sustainable sourcing approach",
        "Long-term business mindset",
      ],
      forWhomLabel: "For Whom?",
      whom: [
        {
          title: "Importers & Wholesalers",
          description: "Reliable supply at competitive terms.",
        },
        {
          title: "Food Industry & Retailers",
          description: "Vanilla and charcoal with clear origin and traceability.",
        },
        {
          title: "Private Label & Shisha Brands",
          description:
            "Custom packaging and OEM sourcing arrangements, on request.",
        },
      ],
    },
    transparency: {
      eyebrow: "Transparency",
      titleStart: "We believe",
      titleEm: "trust comes from transparency.",
      description:
        "We welcome questions about product origins, sourcing, and our supplier relationships, openly and honestly, at every stage of growth.",
    },
    ctaBand: {
      title: "Let’s build something reliable, together.",
      subtitle: "Importers · Wholesalers · Retailers · Manufacturers · Private Label",
      cta: "Contact Us Now",
    },
    footer: {
      tagline: "Reliable Products. Fair Partnerships.",
      kontakt: "Kontakt",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      copyright: "© 2026 - Alserd",
    },
    productDetail: {
      backToProducts: "← Back to Products",
      availableForms: "Available Forms",
      applications: "Applications",
      requestQuote: "Request a Quote",
    },
    specTable: {
      no: "No",
      product: "Product",
      size: "Size",
      weight: "Weight",
      moistureContent: "Moisture Content",
      packaging: "Packaging",
      condition: "Condition",
      aroma: "Aroma",
      description: "Description",
    },
    briquetteSheet: {
      moq: "MoQ",
      productSpecifications: "Product Specifications",
      availableSize: "Available Size",
      packaging: "Packaging",
    },
    languageSwitch: {
      label: "Language",
    },
  },
  de: {
    header: {
      nav: {
        home: "Startseite",
        about: "Über uns",
        products: "Produkte",
        contact: "Kontakt",
      },
      becomePartner: "Partner werden",
    },
    hero: {
      eyebrow: "Import & Handel aus Deutschland",
      titleLine1: "Zuverlässige Versorgung",
      titleLine2: "für Europa.",
      description:
        "Alserd verbindet europäische Einkäufer mit hochwertig beschaffter Vanille und Holzkohle aus Südostasien – basierend auf direkter Beschaffung, klarer Kommunikation und einem partnerschaftlichen Ansatz.",
      viewProducts: "Produkte ansehen",
      becomePartner: "Partner werden",
    },
    about: {
      eyebrow: "Über Alserd",
      description:
        "Alserd ist ein unabhängiges Handelsunternehmen mit Sitz in Deutschland, spezialisiert auf Import und Export, Produktbeschaffung und den Aufbau von Partnerschaften zwischen Europa und Südostasien – mit dem Ziel, nachhaltigen Wert für Kunden, Lieferanten und die Gemeinschaften zu schaffen, mit denen wir zusammenarbeiten.",
      visionLabel: "Unsere Vision",
      visionQuote:
        "„Eine vertrauenswürdige Brücke zwischen Erzeugern in Südostasien und europäischen Märkten zu sein – durch verantwortungsvollen Handel und faire Partnerschaften.“",
      servicesLabel: "Unsere Leistungen",
      services: [
        "Import & Export",
        "Produktbeschaffung",
        "Marketingunterstützung",
        "Strategische Partnerschaften",
      ],
      missionLabel: "Unsere Mission",
      mission: [
        "Zuverlässige Produkte und ehrliche Kommunikation für europäische Kunden liefern.",
        "Transparente, langfristige Partnerschaften aufbauen – keine einmaligen Transaktionen.",
        "Lieferanten beim Wachstum und beim Zugang zu europäischen Märkten unterstützen.",
        "Nachhaltig wachsen, in einem Tempo, das Qualität und Vertrauen schützt.",
      ],
    },
    products: {
      eyebrow: "Unser Angebot",
      titleStart: "Unsere",
      titleEm: "Produkte",
      description:
        "Qualitätsorientierte Beschaffung aus Indonesien, aufbereitet gemäß den Importanforderungen für Deutschland und die Europäische Union.",
      viewDetails: "Details ansehen →",
    },
    approach: {
      eyebrow: "So arbeiten wir",
      titleStart: "Unser",
      titleEm: "Ansatz",
      description:
        "Die Grundsätze, nach denen wir beschaffen, handeln und Partnerschaften zwischen Europa und Südostasien aufbauen.",
      principles: [
        {
          num: "01",
          title: "Qualität zuerst",
          description:
            "Gleichbleibende Produktqualität und zuverlässige Kommunikation mit jedem Lieferanten – als Grundvoraussetzung, nicht als Nachgedanke.",
        },
        {
          num: "02",
          title: "Flexible Beschaffung",
          description:
            "Zertifizierte und nicht zertifizierte Beschaffungsoptionen, abgestimmt auf den tatsächlichen Bedarf jedes Käufers.",
        },
        {
          num: "03",
          title: "Fokus auf den europäischen Markt",
          description:
            "Gezielter Fokus auf das Verständnis deutscher und EU-Importanforderungen während wir wachsen.",
        },
        {
          num: "04",
          title: "Partnerschaftlicher Ansatz",
          description:
            "Langfristige Zusammenarbeit statt transaktionalem Verkauf – Beziehungen, die mit unseren Partnern wachsen.",
        },
      ],
    },
    whyAlserd: {
      eyebrow: "Warum mit uns arbeiten",
      titleStart: "Warum",
      titleEm: "Alserd",
      description:
        "Entwickelt für europäische Einkäufer, die Wert auf direkte Kommunikation, klare Beschaffung und einen mitwachsenden Partner legen.",
      checklist1: [
        "Unternehmen mit Sitz in Deutschland",
        "Direkte Beschaffung an der Quelle",
        "Transparente Kommunikation",
      ],
      checklist2: [
        "Individuelle Spezifikationen möglich",
        "Nachhaltiger Beschaffungsansatz",
        "Langfristig orientiertes Geschäftsverständnis",
      ],
      forWhomLabel: "Für wen?",
      whom: [
        {
          title: "Importeure & Großhändler",
          description: "Zuverlässige Versorgung zu wettbewerbsfähigen Konditionen.",
        },
        {
          title: "Lebensmittelindustrie & Einzelhandel",
          description:
            "Vanille und Holzkohle mit klarer Herkunft und Rückverfolgbarkeit.",
        },
        {
          title: "Private Label & Shisha-Marken",
          description:
            "Individuelle Verpackung und OEM-Beschaffung auf Anfrage.",
        },
      ],
    },
    transparency: {
      eyebrow: "Transparenz",
      titleStart: "Wir glauben:",
      titleEm: "Vertrauen entsteht durch Transparenz.",
      description:
        "Wir begrüßen Fragen zu Produktherkunft, Beschaffung und unseren Lieferantenbeziehungen – offen und ehrlich, in jeder Phase unseres Wachstums.",
    },
    ctaBand: {
      title: "Lassen Sie uns gemeinsam etwas Verlässliches aufbauen.",
      subtitle: "Importeure · Großhändler · Einzelhändler · Hersteller · Private Label",
      cta: "Jetzt kontaktieren",
    },
    footer: {
      tagline: "Zuverlässige Produkte. Faire Partnerschaften.",
      kontakt: "Kontakt",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      copyright: "© 2026 - Alserd",
    },
    productDetail: {
      backToProducts: "← Zurück zu den Produkten",
      availableForms: "Verfügbare Formen",
      applications: "Anwendungen",
      requestQuote: "Angebot anfordern",
    },
    specTable: {
      no: "Nr.",
      product: "Produkt",
      size: "Größe",
      weight: "Gewicht",
      moistureContent: "Feuchtigkeitsgehalt",
      packaging: "Verpackung",
      condition: "Zustand",
      aroma: "Aroma",
      description: "Beschreibung",
    },
    briquetteSheet: {
      moq: "Mindestbestellmenge",
      productSpecifications: "Produktspezifikationen",
      availableSize: "Verfügbare Größen",
      packaging: "Verpackung",
    },
    languageSwitch: {
      label: "Sprache",
    },
  },
} satisfies Record<Locale, unknown>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
