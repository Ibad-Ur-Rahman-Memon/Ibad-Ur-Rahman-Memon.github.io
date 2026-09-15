import { publications } from '@/data/publication';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Publication section.
 *
 * Renders verified academic publications. The data array is the single
 * source of truth; when it is empty, a graceful empty state is shown
 * rather than fabricated content.
 */
export function PublicationSection() {
  return (
    <section id="publication" className="section border-t border-border">
      <PageContainer>
        <div className="section-heading">
          <span className="eyebrow">06</span>
          <h2>Publication</h2>
          <p>Peer-reviewed research and academic work.</p>
        </div>

        {publications.length === 0 ? (
          <p className="text-muted-foreground">Publication details will be added once verified.</p>
        ) : (
          <ul className="space-y-4">
            {publications.map((pub, index) => (
              <li key={`${pub.title}-${index}`} className="card card-hover p-5">
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {pub.title}
                </h3>
                {pub.venue ? <p className="mt-1 text-sm text-accent">{pub.venue}</p> : null}
                {pub.date ? <p className="mt-1 text-xs text-muted-foreground">{pub.date}</p> : null}
                {pub.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pub.description}
                  </p>
                ) : null}
                {pub.methodology ? (
                  <p className="mt-2 text-xs text-muted-foreground">
                    <span className="text-foreground/80">Methodology:</span> {pub.methodology}
                  </p>
                ) : null}
                {pub.result ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    <span className="text-foreground/80">Result:</span> {pub.result}
                  </p>
                ) : null}
                {pub.dataset ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    <span className="text-foreground/80">Dataset:</span> {pub.dataset}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </PageContainer>
    </section>
  );
}
