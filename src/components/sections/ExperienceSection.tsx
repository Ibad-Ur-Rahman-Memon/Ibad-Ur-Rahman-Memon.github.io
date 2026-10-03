import { experience } from '@/data/experience';
import { PageContainer } from '@/components/ui/PageContainer';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, staggerChild } from '@/components/motion/Stagger';
import { motion } from 'motion/react';

/**
 * Experience section.
 *
 * Renders verified employment/internship history in a clean,
 * recruiter-friendly timeline layout. No metrics or achievements are
 * invented — only the data present in src/data/experience.ts is shown.
 *
 * Entrance motion: heading reveals, then the timeline entries stagger in.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="section border-t border-border">
      <PageContainer>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">03</span>
            <h2>Experience</h2>
            <p>Professional roles and internships.</p>
          </div>
        </Reveal>

        <Stagger as="ul" className="relative ml-3 space-y-8 border-l border-border pl-6">
          {experience.map((role, index) => (
            <motion.li
              key={`${role.organization}-${role.role}-${index}`}
              variants={staggerChild}
              className="relative"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="card card-hover p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {role.organization}
                    </h3>
                    <p className="text-sm text-accent sm:text-base">{role.role}</p>
                    {role.roles && role.roles.length > 1 ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Also served as: {role.roles.filter((r) => r !== role.role).join(' · ')}
                      </p>
                    ) : null}
                  </div>
                  {role.startDate ? (
                    <div className="mt-1 text-left text-sm font-medium text-muted-foreground sm:mt-0 sm:shrink-0 sm:text-right">
                      {formatDateRange(role.startDate, role.endDate, role.current)}
                    </div>
                  ) : null}
                </div>

                {role.location ? (
                  <p className="mt-2 text-xs text-muted-foreground">{role.location}</p>
                ) : null}

                {role.responsibilities && role.responsibilities.length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {role.technologies && role.technologies.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}

                {role.projects && role.projects.length > 0 ? (
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="text-foreground/80">Associated projects:</span>{' '}
                    {role.projects.join(' · ')}
                  </p>
                ) : null}
              </div>
            </motion.li>
          ))}
        </Stagger>
      </PageContainer>
    </section>
  );
}

function formatDateRange(
  startDate: string | undefined,
  endDate: string | undefined,
  current: boolean | undefined,
): string {
  if (!startDate) return '';
  const end = current ? 'Present' : (endDate ?? 'Present');
  return `${startDate} – ${end}`;
}
