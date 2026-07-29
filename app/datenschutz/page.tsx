import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LegalSection from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Alserd",
  description: "Datenschutzerklärung gemäß DSGVO und BDSG von Alserd.",
};

export default function DatenschutzPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-bg px-4 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[820px]">
            <h1 className="mb-2 font-serif text-4xl font-bold text-white-bright sm:text-5xl">
              Datenschutzerklärung
            </h1>
            <p className="mb-12 text-sm text-text-dim sm:text-base">
              Alserd, Ennigerloh, Deutschland
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@alserd.com"
                className="text-gold hover:underline"
              >
                info@alserd.com
              </a>
            </p>

            <div className="space-y-10">
              <LegalSection title="Datenschutz">
                <p>
                  Der Schutz Ihrer personenbezogenen Daten ist uns ein
                  wichtiges Anliegen. Alserd erhebt und verarbeitet
                  personenbezogene Daten ausschließlich im Rahmen der
                  geltenden Datenschutzgesetze, insbesondere der
                  Datenschutz-Grundverordnung (DSGVO) und des
                  Bundesdatenschutzgesetzes (BDSG).
                </p>
                <p>
                  Nachfolgend informieren wir Sie über Art, Umfang und Zweck
                  der Verarbeitung personenbezogener Daten auf unserer
                  Website.
                </p>
              </LegalSection>

              <LegalSection title="Nutzung der Website">
                <p>
                  Die Nutzung unserer Website ist grundsätzlich ohne Angabe
                  personenbezogener Daten möglich.
                </p>
                <p>
                  Soweit auf unseren Seiten personenbezogene Daten (z. B.
                  Name, E-Mail-Adresse oder sonstige Kontaktdaten) erhoben
                  werden, erfolgt dies stets auf freiwilliger Basis.
                </p>
                <p>
                  Eine Weitergabe Ihrer Daten an Dritte erfolgt grundsätzlich
                  nicht, sofern keine gesetzliche Verpflichtung besteht oder
                  Sie ausdrücklich eingewilligt haben.
                </p>
                <p>
                  Bitte beachten Sie, dass die Datenübertragung im Internet
                  (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                  aufweisen kann. Ein vollständiger Schutz der Daten vor dem
                  Zugriff durch Dritte ist daher nicht möglich.
                </p>
              </LegalSection>

              <LegalSection title="Server-Log-Dateien">
                <p>
                  Beim Besuch unserer Website werden durch den
                  Hosting-Anbieter automatisch Informationen erhoben und in
                  sogenannten Server-Log-Dateien gespeichert.
                </p>
                <p>Hierzu gehören insbesondere:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>aufgerufene Seiten</li>
                </ul>
                <p>
                  Diese Daten dienen ausschließlich der Gewährleistung eines
                  störungsfreien Betriebs der Website sowie der Verbesserung
                  unseres Angebots. Eine Zusammenführung dieser Daten mit
                  anderen Datenquellen erfolgt nicht.
                </p>
              </LegalSection>

              <LegalSection title="Kontaktformular und E-Mail">
                <p>
                  Wenn Sie uns über das Kontaktformular oder per E-Mail
                  kontaktieren, speichern wir Ihre Angaben ausschließlich zur
                  Bearbeitung Ihrer Anfrage sowie für mögliche
                  Anschlussfragen.
                </p>
                <p>
                  Ihre Daten werden ohne Ihre ausdrückliche Zustimmung nicht
                  an Dritte weitergegeben.
                </p>
              </LegalSection>

              <LegalSection title="Produktanfragen">
                <p>
                  Unsere Website dient der Präsentation unseres Unternehmens
                  sowie unserer Produkte.
                </p>
                <p>
                  Anfragen zu Produkten oder Bestellungen erfolgen
                  ausschließlich über das Kontaktformular oder per E-Mail. Ein
                  Kaufvertrag kommt nicht unmittelbar über diese Website
                  zustande.
                </p>
              </LegalSection>

              <LegalSection title="Cookies">
                <p>
                  Unsere Website verwendet Cookies, soweit dies technisch
                  erforderlich ist oder Sie der Verwendung zugestimmt haben.
                </p>
                <p>
                  Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                  gespeichert werden und dazu dienen, unsere Website
                  benutzerfreundlicher und sicherer zu gestalten.
                </p>
                <p>
                  Sie können die Speicherung von Cookies jederzeit über die
                  Einstellungen Ihres Browsers deaktivieren oder bereits
                  gespeicherte Cookies löschen. Die Funktionalität der
                  Website kann dadurch eingeschränkt sein.
                </p>
              </LegalSection>

              <LegalSection title="Analyse- und Marketingdienste">
                <p>
                  Zur Verbesserung unseres Online-Angebots können Analyse-
                  und Marketingdienste wie Google Analytics oder vergleichbare
                  Dienste eingesetzt werden.
                </p>
                <p>
                  Soweit hierfür eine Einwilligung erforderlich ist, erfolgt
                  die Verarbeitung ausschließlich nach Ihrer vorherigen
                  Zustimmung über unser Cookie-Banner.
                </p>
              </LegalSection>

              <LegalSection title="Speicherdauer">
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie
                  dies zur Bearbeitung Ihrer Anfrage oder aufgrund
                  gesetzlicher Aufbewahrungspflichten erforderlich ist.
                </p>
                <p>
                  Nach Wegfall des Verarbeitungszwecks werden die Daten
                  entsprechend den gesetzlichen Vorschriften gelöscht.
                </p>
              </LegalSection>

              <LegalSection title="Ihre Rechte">
                <p>Sie haben jederzeit das Recht auf</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Auskunft über Ihre gespeicherten personenbezogenen Daten,</li>
                  <li>Berichtigung unrichtiger Daten,</li>
                  <li>Löschung Ihrer Daten,</li>
                  <li>Einschränkung der Verarbeitung,</li>
                  <li>Datenübertragbarkeit,</li>
                  <li>Widerspruch gegen die Verarbeitung sowie</li>
                  <li>
                    Widerruf einer erteilten Einwilligung mit Wirkung für die
                    Zukunft.
                  </li>
                </ul>
                <p>
                  Darüber hinaus haben Sie das Recht, Beschwerde bei einer
                  zuständigen Datenschutzaufsichtsbehörde einzulegen.
                </p>
              </LegalSection>

              <LegalSection title="Kontakt">
                <p>
                  Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer
                  personenbezogenen Daten können Sie sich jederzeit an uns
                  wenden:
                </p>
                <p>
                  Alserd
                  <br />
                  Rehatta Linda Elisabeth
                  <br />
                  Ennigerloh
                  <br />
                  Deutschland
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@alserd.com"
                    className="text-gold hover:underline"
                  >
                    info@alserd.com
                  </a>
                </p>
              </LegalSection>

              <LegalSection title="Änderungen dieser Datenschutzerklärung">
                <p>
                  Alserd behält sich vor, diese Datenschutzerklärung bei
                  Bedarf anzupassen, um sie an technische Entwicklungen,
                  gesetzliche Änderungen oder neue Dienstleistungen
                  anzupassen.
                </p>
                <p>
                  Es gilt jeweils die auf dieser Website veröffentlichte
                  aktuelle Version.
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
