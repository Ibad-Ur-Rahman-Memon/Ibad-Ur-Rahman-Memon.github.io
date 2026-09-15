import { skillCategories } from '@/data/skills';
import { PageContainer } from '@/components/ui/PageContainer';

/**
 * Skills section.
 *
 * Skills are grouped by their existing categories. No proficiency
 * levels, percentages, or progress bars are rendered — the data layer
 * intentionally omits them.
 */
export function SkillsSection() {
  return (
    <section id="skills" className="section border-t border-border">
      <PageContainer>
        <div className="section-heading">
          <span className="eyebrow">02</span>
          <h2>Skills</h2>
          <p>A selection of technical and professional capabilities.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.id} className="card card-hover p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-sm font-mono text-accent">
                  {category.id.slice(0, 2).toUpperCase()}
                </span>
                <h3 className="text-base font-semibold text-foreground">{category.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={category.label}>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border-strong hover:bg-surface-elevated hover:text-foreground">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
