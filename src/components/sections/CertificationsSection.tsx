import { certifications } from '@/data/certifications';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Certification type badge styling. Distinct from ranking — a course
 * is not presented as a professional certification.
 */
const typeLabel: Record<string, string> = {
  certification: 'Certification',
  course: 'Course',
  workshop: 'Workshop',
};

const typeClasses: Record<string, string> = {
  certification: 'border-accent/50 bg-accent/10 text-accent',
  course: 'border-border-strong bg-surface-elevated text-foreground',
  workshop: 'border-border bg-surface text-muted-foreground',
};

/**
 * Certifications section.
 *
 * Renders verified certifications and structured courses. The
 * `type` field distinguishes certification / course / workshop without
 * ranking one above another. Only fields present in the data are
 * displayed.
 */
export function CertificationsSection() {
  return (
    <section id="certifications" className="section border-t border-border">
      <PageContainer>
        <div className="section-heading">
          <span className="eyebrow">08</span>
          <h2>Certifications</h2>
          <p>Verified courses and professional credentials.</p>
        </div>

        {certifications.length === 0 ? (
          <p className="text-muted-foreground">
            Certification details will be added once verified.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => {
              const type = cert.type ?? 'course';
              const label = typeLabel[type] ?? typeLabel.course;
              const classes = typeClasses[type] ?? typeClasses.course;

              return (
                <li
                  key={`${cert.name}-${cert.issuer ?? 'unknown'}-${index}`}
                  className="card card-hover p-5"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${classes}`}
                    >
                      {label}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {cert.name}
                  </h3>

                  {cert.issuer ? <p className="mt-1 text-sm text-accent">{cert.issuer}</p> : null}

                  {cert.date ? (
                    <p className="mt-1 text-xs text-muted-foreground">{cert.date}</p>
                  ) : null}

                  {cert.credentialId ? (
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="text-foreground/80">Credential ID:</span> {cert.credentialId}
                    </p>
                  ) : null}

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex text-xs text-accent hover:underline"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      Verify credential
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </PageContainer>
    </section>
  );
}
