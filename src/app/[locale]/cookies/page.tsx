import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ScalasAi",
};

export default function CookiesPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-white prose-p:text-gray-300 prose-a:text-[var(--color-cyan)] prose-strong:text-white">
          <h1 className="text-gradient-brand">Cookie Policy</h1>
          <p className="text-sm text-gray-500">
            Ultimo aggiornamento: Marzo 2026
          </p>

          <h2>1. Cosa sono i Cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati
            dall&apos;utente inviano al suo terminale, dove vengono memorizzati per
            essere poi ritrasmessi agli stessi siti alla visita successiva.
          </p>

          <h2>2. Cookie Utilizzati</h2>

          <h3>Cookie Tecnici (necessari)</h3>
          <p>
            Questi cookie sono essenziali per il funzionamento del sito e non
            possono essere disattivati. Includono cookie per la gestione della
            sessione, la preferenza della lingua e la sicurezza.
          </p>

          <h3>Cookie Analitici</h3>
          <p>
            Utilizziamo Google Analytics per raccogliere informazioni
            sull&apos;utilizzo del sito in forma aggregata e anonima. Questi cookie
            ci aiutano a capire come i visitatori interagiscono con il sito.
          </p>
          <ul>
            <li>
              <strong>_ga:</strong> durata 2 anni, utilizzato per distinguere
              gli utenti
            </li>
            <li>
              <strong>_gid:</strong> durata 24 ore, utilizzato per distinguere
              gli utenti
            </li>
            <li>
              <strong>_gat:</strong> durata 1 minuto, utilizzato per limitare
              la frequenza delle richieste
            </li>
          </ul>

          <h3>Cookie di Terze Parti</h3>
          <p>
            Il sito puo incorporare contenuti di terze parti che possono
            impostare propri cookie:
          </p>
          <ul>
            <li>
              <strong>Google Tag Manager:</strong> gestione dei tag di
              monitoraggio
            </li>
            <li>
              <strong>GoHighLevel:</strong> widget di prenotazione
            </li>
          </ul>

          <h2>3. Gestione dei Cookie</h2>
          <p>
            L&apos;utente puo gestire le preferenze relative ai cookie
            direttamente tramite le impostazioni del proprio browser:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
          </ul>

          <h2>4. Base Giuridica</h2>
          <p>
            I cookie tecnici sono installati sulla base del legittimo interesse
            del Titolare. I cookie analitici e di profilazione sono installati
            solo previo consenso dell&apos;utente, ai sensi dell&apos;Art. 122 del Codice
            Privacy e delle Linee Guida del Garante del 10 giugno 2021.
          </p>

          <h2>5. Contatti</h2>
          <p>
            Per informazioni sulla presente Cookie Policy:{" "}
            <strong>privacy@scalasai.com</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}
