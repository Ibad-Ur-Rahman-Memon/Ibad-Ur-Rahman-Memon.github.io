import { skillCategories } from '@/data/skills';
import { PageContainer } from '@/components/ui/PageContainer';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, staggerChild } from '@/components/motion/Stagger';
import { motion } from 'motion/react';

/**
 * Skills section.
 *
 * Skills are grouped by their existing categories. No proficiency
 * levels, percentages, or progress bars are rendered — the data layer
 * intentionally omits them.
 *
 * Entrance motion: heading reveals, then the category cards stagger in.
 */
export function SkillsSection() {
  return (
    <section id="skills" className="section border-t border-border">
      <PageContainer>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">02</span>
            <h2>Skills</h2>
            <p>A selection of technical and professional capabilities.</p>
          </div>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.article
              key={category.id}
              variants={staggerChild}
              className="card card-hover p-5"
            >
              <div className="mb-3">
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {category.label}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={category.label}>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="inline-flex items-center rounded-md bg-surface-elevated px-2.5 py-1.5 text-sm text-muted-foreground">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </Stagger>
      </PageContainer>
    </section>
  );
}
