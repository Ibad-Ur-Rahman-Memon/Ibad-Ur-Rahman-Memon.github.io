import { leadership } from '@/data/leadership';
import { PageContainer } from '@/components/ui/PageContainer';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, staggerChild } from '@/components/motion/Stagger';
import { motion } from 'motion/react';

/**
 * Leadership section.
 *
 * Renders verified leadership and extracurricular roles in a timeline
 * layout consistent with Experience and Education. No metrics,
 * achievements, or organizations are invented — only the data present
 * in src/data/leadership.ts is shown.
 *
 * Entrance motion: heading reveals, then the leadership entries stagger in.
 */
export function LeadershipSection() {
  return (
    <section id="leadership" className="section border-t border-border">
      <PageContainer>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">07</span>
            <h2>Leadership</h2>
            <p>Extracurricular roles and event coordination.</p>
          </div>
        </Reveal>

        {leadership.length === 0 ? (
          <p className="text-muted-foreground">Leadership details will be added once verified.</p>
        ) : (
          <Stagger className="relative ml-3 space-y-6 border-l border-border pl-6">
            {leadership.map((item, index) => (
              <motion.li
                key={`${item.organization}-${item.role}-${index}`}
                variants={staggerChild}
                className="relative"
              >
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <div className="card card-hover p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.organization}
                      </h3>
                      <p className="text-sm text-accent">{item.role}</p>
                      {item.event ? (
                        <p className="mt-0.5 text-xs text-muted-foreground">{item.event}</p>
                      ) : null}
                    </div>
                    <div className="mt-1 text-right text-xs text-muted-foreground sm:mt-0">
                      {formatDateRange(item.startDate, item.endDate)}
                    </div>
                  </div>

                  {item.location ? (
                    <p className="mt-2 text-xs text-muted-foreground">{item.location}</p>
                  ) : null}

                  {item.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </motion.li>
            ))}
          </Stagger>
        )}
      </PageContainer>
    </section>
  );
}

function formatDateRange(startDate: string | undefined, endDate: string | undefined): string {
  if (!startDate) return '';
  const end = endDate ?? 'Present';
  return `${startDate} – ${end}`;
}
