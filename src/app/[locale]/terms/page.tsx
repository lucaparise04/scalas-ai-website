import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini di Servizio | ScalasAi",
};

export default function TermsPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-white prose-p:text-gray-300 prose-a:text-[var(--color-cyan)] prose-strong:text-white">
          <h1 className="text-gradient-brand">Termini di Servizio</h1>
          <p className="text-sm text-gray-500">
            Ultimo aggiornamento: Marzo 2026
          </p>

          <h2>1. Oggetto</h2>
          <p>
            I presenti Termini di Servizio regolano l&apos;utilizzo del sito web
            scalasai.com e dei servizi offerti da ScalasAi (di seguito
            &quot;Fornitore&quot;), con sede in Italia, P.IVA [DA INSERIRE].
          </p>

          <h2>2. Servizi Offerti</h2>
          <p>
            ScalasAi offre servizi di automazione aziendale basati su
            intelligenza artificiale, inclusi ma non limitati a: workflow
            automation, AI agents, lead generation, cold email, CRM setup,
            sviluppo web, consulenza strategica e formazione.
          </p>

          <h2>3. Preventivo e Accettazione</h2>
          <p>
            Ogni progetto inizia con una call conoscitiva gratuita, seguita da
            un preventivo personalizzato. Il rapporto contrattuale si instaura
            con l&apos;accettazione scritta del preventivo da parte del Cliente.
          </p>

          <h2>4. Pagamenti</h2>
          <ul>
            <li>I prezzi indicati si intendono IVA esclusa (ove applicabile)</li>
            <li>
              Pagamento: 50% all&apos;accettazione del preventivo, 50% alla consegna
            </li>
            <li>
              Metodi accettati: bonifico bancario, PayPal, carta di credito
            </li>
            <li>
              In caso di ritardo nel pagamento, il Fornitore si riserva il
              diritto di sospendere i servizi
            </li>
          </ul>

          <h2>5. Tempi di Consegna</h2>
          <p>
            I tempi di consegna indicati nei preventivi sono stimati e possono
            variare in base alla complessita del progetto. Il Fornitore si
            impegna a comunicare tempestivamente eventuali ritardi.
          </p>

          <h2>6. Proprieta Intellettuale</h2>
          <p>
            Al completamento del progetto e al saldo del pagamento, il Cliente
            acquisisce la piena proprieta dei deliverables concordati. Il
            Fornitore si riserva il diritto di utilizzare il progetto come caso
            studio nel proprio portfolio, salvo diverso accordo scritto.
          </p>

          <h2>7. Riservatezza</h2>
          <p>
            Entrambe le parti si impegnano a mantenere riservate tutte le
            informazioni confidenziali scambiate nell&apos;ambito della
            collaborazione.
          </p>

          <h2>8. Limitazione di Responsabilita</h2>
          <p>
            Il Fornitore non sara responsabile per danni indiretti,
            consequenziali o perdite di profitto. La responsabilita massima del
            Fornitore e limitata all&apos;importo totale pagato dal Cliente per il
            servizio in questione.
          </p>

          <h2>9. Recesso</h2>
          <p>
            Il Cliente puo recedere dal contratto con preavviso scritto di 15
            giorni. In caso di recesso, il Cliente e tenuto al pagamento dei
            servizi gia erogati.
          </p>

          <h2>10. Legge Applicabile e Foro Competente</h2>
          <p>
            I presenti Termini sono regolati dalla legge italiana. Per
            qualsiasi controversia sara competente il Foro di [CITTA DA
            INSERIRE].
          </p>

          <h2>11. Contatti</h2>
          <p>
            Per informazioni sui presenti Termini:{" "}
            <strong>info@scalasai.com</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}
