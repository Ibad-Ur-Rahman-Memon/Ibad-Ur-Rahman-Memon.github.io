import { education } from '@/data/education';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Education section.
 *
 * Renders verified academic history in a clean timeline layout.
 * Data is already ordered most-recent-first; no reordering is applied.
 * No grades, CGPA, or coursework are displayed — none exist in the data.
 */
export function EducationSection() {
  return (
    <section id="education" className="section border-t border-border">
      <PageContainer>
        <div className="section-heading">
          <span className="eyebrow">05</span>
          <h2>Education</h2>
          <p>Academic background and qualifications.</p>
        </div>

        <ol className="relative ml-3 space-y-6 border-l border-border pl-6">
          {education.map((item, index) => (
            <li
              key={`${item.institution}-${item.degree ?? 'unknown'}-${index}`}
              className="relative"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="card card-hover p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.institution}</h3>
                    {item.degree ? <p className="text-sm text-accent">{item.degree}</p> : null}
                    {item.fieldOfStudy ? (
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.fieldOfStudy}</p>
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
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}

function formatDateRange(startDate: string | undefined, endDate: string | undefined): string {
  if (!startDate) return '';
  const end = endDate ?? 'Present';
  return `${startDate} – ${end}`;
}
