import { projects, featuredProjectSlugs } from '@/data/projects';
import { PageContainer } from '@/components/ui/PageContainer';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, staggerChild } from '@/components/motion/Stagger';
import { motion } from 'motion/react';

/**
 * Projects section.
 *
 * Featured projects (listed in `featuredProjectSlugs`) receive the
 * strongest visual emphasis. Remaining projects are shown in a
 * secondary grid. GitHub links are rendered only when a verified
 * `githubUrl` exists; no fake URLs are created.
 *
 * Entrance motion: heading reveals, then featured and additional
 * project cards stagger in.
 */
export function ProjectsSection() {
  const featured = projects.filter((p) => featuredProjectSlugs.includes(p.slug));
  const other = projects.filter((p) => !featuredProjectSlugs.includes(p.slug));

  return (
    <section id="projects" className="section border-t border-border">
      <PageContainer>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">04</span>
            <h2>Projects</h2>
            <p>A selection of academic, research, and applied engineering work.</p>
          </div>
        </Reveal>

        {featured.length > 0 ? (
          <Stagger className="grid gap-6 lg:grid-cols-2">
            {featured.map((project) => (
              <motion.article
                key={project.slug}
                variants={staggerChild}
                className="card card-hover flex flex-col p-6"
              >
                <ProjectCardContents project={project} featured />
              </motion.article>
            ))}
          </Stagger>
        ) : null}

        {other.length > 0 ? (
          <div className="mt-10">
            <Reveal delay={80}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Additional Projects
              </h3>
            </Reveal>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((project) => (
                <motion.article
                  key={project.slug}
                  variants={staggerChild}
                  className="card card-hover flex flex-col p-5"
                >
                  <ProjectCardContents project={project} featured={false} />
                </motion.article>
              ))}
            </Stagger>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}

interface ProjectCardContentsProps {
  project: (typeof projects)[number];
  featured?: boolean;
}

function ProjectCardContents({ project, featured = false }: ProjectCardContentsProps) {
  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);

  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 text-xs font-mono text-accent">
          {project.category}
        </span>
        {featured ? (
          <span className="inline-flex items-center rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      {project.technologies && project.technologies.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
        {hasGithub ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost sm"
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub
          </a>
        ) : null}
        {hasLive ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost sm"
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
          </a>
        ) : null}
        {!hasGithub && !hasLive ? (
          <span className="text-xs text-muted-foreground/70">No external links available</span>
        ) : null}
      </div>
    </>
  );
}
