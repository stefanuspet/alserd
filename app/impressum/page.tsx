import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LegalSection from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Impressum | Alserd",
  description: "Impressum gemäß § 5 Digitale-Dienste-Gesetz (DDG) von Alserd.",
};

export default function ImpressumPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-bg px-4 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[820px]">
            <h1 className="mb-2 font-serif text-4xl font-bold text-white-bright sm:text-5xl">
              Impressum
            </h1>
            <p className="mb-12 text-sm text-text-dim sm:text-base">
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
            </p>

            <div className="space-y-10">
              <LegalSection title="Alserd">
                <p>
                  Inhaberin: Rehatta Linda Elisabeth Einzelunternehmen
                  <br />
                  Clemens-August Straße 22B
                  <br />
                  59320 Ennigerloh
                  {/* <br />
                  Deutschland */}
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@alserd.com"
                    className="text-gold hover:underline"
                  >
                    info@alserd.com
                  </a>
                </p>
                <p>USt-IdNr.:DE461313276</p>
              </LegalSection>

              <LegalSection title="Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV">
                <p>
                  Rehatta Linda Elisabeth Einzelunternehmen
                  <br />
                  Clemens-August Straße 22B
                  <br />
                  59320 Ennigerloh
                  {/* <br />
                  Deutschland */}
                </p>
              </LegalSection>

              <LegalSection title="Unternehmensprofil">
                <p>
                  Rehatta Linda Elisabeth einzelunternehmen ist ein deutsches
                  Unternehmen mit Schwerpunkt auf Außenhandel (Export &amp;
                  Import), Online-Handel sowie der Vermittlung internationaler
                  Handelsbeziehungen.
                </p>
                <p>
                  Unser Angebot umfasst ausgewählte Importprodukte sowie die
                  Unterstützung von Unternehmen und Privatkunden bei der
                  internationalen Beschaffung hochwertiger Waren.
                </p>
              </LegalSection>

              <LegalSection title="Bildnachweise">
                <p>
                  Soweit nicht anders angegeben, stammen sämtliche auf dieser
                  Website verwendeten Bilder, Grafiken sowie
                  Produktdarstellungen von Rehatta&rsquo;s Collection oder
                  wurden mit entsprechender Genehmigung verwendet.
                </p>
                <p>
                  Jegliche Vervielfältigung, Bearbeitung oder Nutzung ohne
                  vorherige schriftliche Zustimmung ist unzulässig.
                </p>
              </LegalSection>

              <LegalSection title="Haftung für Inhalte">
                <p>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                  erstellt. Dennoch übernehmen wir keine Gewähr für die
                  Richtigkeit, Vollständigkeit oder Aktualität der
                  bereitgestellten Informationen.
                </p>
              </LegalSection>

              <LegalSection title="Haftung für externe Links">
                <p>
                  Diese Website enthält gegebenenfalls Links zu externen
                  Webseiten Dritter. Auf deren Inhalte haben wir keinen
                  Einfluss. Für diese Inhalte ist ausschließlich der jeweilige
                  Anbieter oder Betreiber der verlinkten Seiten verantwortlich.
                </p>
              </LegalSection>

              <LegalSection title="Urheberrecht">
                <p>
                  Alle auf dieser Website veröffentlichten Inhalte, Texte,
                  Bilder, Logos und sonstigen Werke unterliegen dem deutschen
                  Urheberrecht sowie den geltenden Bestimmungen zum Schutz
                  geistigen Eigentums.
                </p>
                <p>
                  Eine Nutzung außerhalb der gesetzlichen Grenzen des
                  Urheberrechts bedarf der vorherigen schriftlichen Zustimmung
                  des jeweiligen Rechteinhabers.
                </p>
              </LegalSection>

              <LegalSection title="Verbraucherstreitbeilegung">
                <p>
                  Wir sind weder verpflichtet noch bereit, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </LegalSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
