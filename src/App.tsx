import { Header } from '@/components/layout/Header';
import { PageContainer } from '@/components/ui/PageContainer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';

/**
 * Application shell.
 *
 * Phase 3B.1: Hero and About sections are now populated with verified
 * data. The remaining sections are intentionally still placeholders.
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
        <section id="skills" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">02</span>
              <h2>Skills</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
        <section id="experience" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">03</span>
              <h2>Experience</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
        <section id="projects" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">04</span>
              <h2>Projects</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
        <section id="education" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">05</span>
              <h2>Education</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
        <section id="publication" className="section border-t border-border">
          <PageContainer>
            <div className="section-heading">
              <span className="eyebrow">06</span>
              <h2>Publication</h2>
              <p>Section placeholder.</p>
            </div>
            <p className="text-muted-foreground">Content coming soon.</p>
          </PageContainer>
        </section>
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
            <p>© {new Date().getFullYear()} Ibad Ur Rahman.</p>
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </PageContainer>
      </footer>
    </div>
  );
}

export default App;
