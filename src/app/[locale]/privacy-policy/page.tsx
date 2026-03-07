import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ScalasAi",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-white prose-p:text-gray-300 prose-a:text-[var(--color-cyan)] prose-strong:text-white">
          <h1 className="text-gradient-brand">Privacy Policy</h1>
          <p className="text-sm text-gray-500">
            Ultimo aggiornamento: Marzo 2026
          </p>

          <h2>1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati personali e{" "}
            <strong>ScalasAi</strong>, con sede legale in Italia.
            <br />
            P.IVA: [DA INSERIRE]
            <br />
            Email: privacy@scalasai.com
          </p>

          <h2>2. Dati Raccolti</h2>
          <p>Raccogliamo le seguenti categorie di dati personali:</p>
          <ul>
            <li>
              <strong>Dati identificativi:</strong> nome, cognome, email,
              telefono
            </li>
            <li>
              <strong>Dati aziendali:</strong> nome azienda, sito web, settore,
              numero dipendenti, fatturato
            </li>
            <li>
              <strong>Dati di navigazione:</strong> indirizzo IP, tipo di
              browser, pagine visitate, durata della visita
            </li>
            <li>
              <strong>Cookie tecnici e analitici:</strong> vedi Cookie Policy
            </li>
          </ul>

          <h2>3. Finalita del Trattamento</h2>
          <p>I dati personali sono trattati per le seguenti finalita:</p>
          <ul>
            <li>Rispondere alle richieste di contatto e preventivo</li>
            <li>Valutazione della candidatura per collaborazione</li>
            <li>Erogazione dei servizi richiesti</li>
            <li>Invio di comunicazioni commerciali (previo consenso)</li>
            <li>Analisi statistiche aggregate e anonime</li>
            <li>Adempimenti di legge e obblighi fiscali</li>
          </ul>

          <h2>4. Base Giuridica</h2>
          <p>
            Il trattamento dei dati si basa su: esecuzione di un contratto o
            misure precontrattuali (Art. 6.1.b GDPR), consenso dell&apos;interessato
            (Art. 6.1.a GDPR), legittimo interesse del Titolare (Art. 6.1.f
            GDPR), adempimento di obblighi legali (Art. 6.1.c GDPR).
          </p>

          <h2>5. Conservazione dei Dati</h2>
          <p>
            I dati personali sono conservati per il tempo strettamente
            necessario al raggiungimento delle finalita per cui sono stati
            raccolti. In particolare:
          </p>
          <ul>
            <li>Dati contrattuali: 10 anni dalla conclusione del rapporto</li>
            <li>Dati di contatto: 24 mesi dall&apos;ultimo contatto</li>
            <li>Dati di navigazione: 26 mesi</li>
            <li>Dati fiscali: come previsto dalla normativa vigente</li>
          </ul>

          <h2>6. Diritti dell&apos;Interessato</h2>
          <p>
            Ai sensi degli articoli 15-22 del GDPR, l&apos;interessato ha diritto
            di:
          </p>
          <ul>
            <li>Accesso ai propri dati personali</li>
            <li>Rettifica dei dati inesatti</li>
            <li>Cancellazione dei dati (&quot;diritto all&apos;oblio&quot;)</li>
            <li>Limitazione del trattamento</li>
            <li>Portabilita dei dati</li>
            <li>Opposizione al trattamento</li>
            <li>
              Revoca del consenso in qualsiasi momento senza pregiudicare la
              liceita del trattamento basata sul consenso prestato prima della
              revoca
            </li>
            <li>
              Proporre reclamo all&apos;Autorita Garante per la Protezione dei Dati
              Personali
            </li>
          </ul>

          <h2>7. Cookie</h2>
          <p>
            Per informazioni dettagliate sull&apos;uso dei cookie, si prega di
            consultare la nostra{" "}
            <a href="/cookies">Cookie Policy</a>.
          </p>

          <h2>8. Terze Parti</h2>
          <p>
            I dati possono essere condivisi con terze parti per finalita
            strettamente connesse all&apos;erogazione dei servizi:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> analisi del traffico web
            </li>
            <li>
              <strong>Vercel:</strong> hosting della piattaforma
            </li>
            <li>
              <strong>GoHighLevel:</strong> CRM e gestione appuntamenti
            </li>
          </ul>

          <h2>9. Trasferimento Dati Extra-UE</h2>
          <p>
            Alcuni dei servizi terzi utilizzati possono comportare il
            trasferimento di dati al di fuori dell&apos;Unione Europea. In tali
            casi, il trasferimento avviene nel rispetto delle garanzie previste
            dal GDPR (decisioni di adeguatezza, clausole contrattuali tipo).
          </p>

          <h2>10. Contatti</h2>
          <p>
            Per esercitare i propri diritti o per qualsiasi informazione
            relativa al trattamento dei dati personali, e possibile contattare
            il Titolare all&apos;indirizzo: <strong>privacy@scalasai.com</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}
