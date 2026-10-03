import { publications } from '@/data/publication';
import { PageContainer } from '@/components/ui/PageContainer';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, staggerChild } from '@/components/motion/Stagger';
import { motion } from 'motion/react';

/**
 * Publication section.
 *
 * Renders verified academic publications. The data array is the single
 * source of truth; when it is empty, a graceful empty state is shown
 * rather than fabricated content.
 *
 * Entrance motion: heading reveals, then the publication entries stagger in.
 */
export function PublicationSection() {
  return (
    <section id="publication" className="section border-t border-border">
      <PageContainer>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">06</span>
            <h2>Publication</h2>
            <p>Peer-reviewed research and academic work.</p>
          </div>
        </Reveal>

        {publications.length === 0 ? (
          <p className="text-muted-foreground">Publication details will be added once verified.</p>
        ) : (
          <Stagger as="ul" className="space-y-4">
            {publications.map((pub, index) => (
              <motion.li
                key={`${pub.title}-${index}`}
                variants={staggerChild}
                className="card card-hover p-5"
              >
                <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {pub.title}
                </h3>
                {pub.venue ? (
                  <p className="mt-1 text-base font-medium text-accent">{pub.venue}</p>
                ) : null}
                {pub.date ? <p className="mt-1 text-sm text-muted-foreground">{pub.date}</p> : null}
                {pub.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pub.description}
                  </p>
                ) : null}
                {pub.methodology || pub.result || pub.dataset ? (
                  <dl className="mt-4 grid gap-x-6 gap-y-3 border-t border-border pt-4 sm:grid-cols-2">
                    {pub.methodology ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Methodology
                        </dt>
                        <dd className="mt-1 text-sm text-foreground/90">{pub.methodology}</dd>
                      </div>
                    ) : null}
                    {pub.result ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Result
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-accent">{pub.result}</dd>
                      </div>
                    ) : null}
                    {pub.dataset ? (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Dataset
                        </dt>
                        <dd className="mt-1 text-sm text-foreground/90">{pub.dataset}</dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}
              </motion.li>
            ))}
          </Stagger>
        )}
      </PageContainer>
    </section>
  );
}
