import { Header } from '@/components/layout/Header';
import { PageContainer } from '@/components/ui/PageContainer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { PublicationSection } from '@/components/sections/PublicationSection';

/**
 * Application shell.
 *
 * Phase 3E: Education and Publication sections are now populated with
 * verified data. Leadership, Certifications, and Contact remain
 * placeholders.
 */
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <PublicationSection />
        <section id="leadership" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">07</span>
              <h2>Leadership</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
        <section id="certifications" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">08</span>
              <h2>Certifications</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
        <section id="contact" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">09</span>
              <h2>Contact</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
      </main>
      <footer className="border-t border-border">
        <PageContainer>
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
            <p>{new Date().getFullYear()} Ibad Ur Rahman.</p>
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </PageContainer>
      </footer>
    </div>
  );
}

export default App;
