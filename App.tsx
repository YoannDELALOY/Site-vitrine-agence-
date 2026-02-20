import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services, ServiceData } from './components/Services';
import { Projects, ProjectData } from './components/Projects';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { LegalMentions } from './components/LegalMentions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ExpertisePage } from './components/ExpertisePage';
import { ProjectsPage } from './components/ProjectsPage';
import { AgencyPage } from './components/AgencyPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BlogPage } from './components/BlogPage';
import { BlogArticlePage } from './components/BlogArticlePage';
import { ExpertiseProjectsPage } from './components/ExpertiseProjectsPage';
import { CookieBanner } from './components/CookieBanner';
import { projectsData } from './components/Projects';
import { ExpertiseCategory } from './data/projects';
import { SectionId } from './types';

type Page = 'home' | 'mentions' | 'privacy' | 'expertise' | 'realisations' | 'agence' | 'service-detail' | 'blog' | 'blog-article' | 'expertise-projects';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [activeService, setActiveService] = useState<ServiceData | null>(null);
  const [activeServicePage, setActiveServicePage] = useState<ServiceData | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [activeBlogProject, setActiveBlogProject] = useState<ProjectData | null>(null);
  const [activeExpertiseCategory, setActiveExpertiseCategory] = useState<ExpertiseCategory | null>(null);

  const showLegal = useCallback((p: 'mentions' | 'privacy') => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHome = useCallback(() => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigate = useCallback((p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToContact = useCallback(() => {
    setPage('home');
    setTimeout(() => {
      document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, []);

  const openProject = useCallback((idOrProject: string | ProjectData) => {
    if (typeof idOrProject === 'string') {
      const found = projectsData.find((p) => p.id === idOrProject);
      if (found) setActiveProject(found);
    } else {
      setActiveProject(idOrProject);
    }
  }, []);

  const openServiceDetail = useCallback((service: ServiceData) => {
    setActiveServicePage(service);
    setPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const backFromServiceDetail = useCallback(() => {
    setPage('expertise');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToBlogArticle = useCallback((projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setActiveBlogProject(found);
      setPage('blog-article');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const backFromBlogArticle = useCallback(() => {
    setActiveBlogProject(null);
    setPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToExpertiseProjects = useCallback((expertiseId: ExpertiseCategory) => {
    setActiveExpertiseCategory(expertiseId);
    setPage('expertise-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Pages légales : sans Navbar ni Footer
  if (page === 'mentions') {
    return <LegalMentions onBack={goHome} />;
  }

  if (page === 'privacy') {
    return <PrivacyPolicy onBack={goHome} />;
  }

  // Toutes les autres pages : avec Navbar + Footer
  return (
    <div className="min-h-screen bg-paper relative overflow-x-hidden">
      <Navbar onNavigate={navigate} currentPage={page} />

      <main>
        {page === 'home' && (
          <>
            <Hero />
            <Services onOpenService={openServiceDetail} />
            <Projects onOpenProject={openProject} />
            <About />
            <Testimonials onOpenProject={navigateToBlogArticle} />
            <Contact />
          </>
        )}

        {page === 'expertise' && (
          <ExpertisePage
            onOpenService={setActiveService}
            onNavigateService={openServiceDetail}
            onGoToContact={goToContact}
          />
        )}

        {page === 'realisations' && (
          <ProjectsPage
            onOpenProject={openProject}
            onNavigateBlogArticle={navigateToBlogArticle}
            onGoToContact={goToContact}
            onNavigateExpertise={navigateToExpertiseProjects}
          />
        )}

        {page === 'expertise-projects' && activeExpertiseCategory && (
          <ExpertiseProjectsPage
            expertiseId={activeExpertiseCategory}
            onBack={() => { setPage('realisations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onNavigateBlogArticle={navigateToBlogArticle}
            onGoToContact={goToContact}
          />
        )}

        {page === 'agence' && (
          <AgencyPage
            onGoToContact={goToContact}
          />
        )}

        {page === 'service-detail' && activeServicePage && (
          <ServiceDetailPage
            service={activeServicePage}
            onBack={backFromServiceDetail}
            onGoToContact={goToContact}
          />
        )}

        {page === 'blog' && (
          <BlogPage
            onNavigateBlogArticle={navigateToBlogArticle}
            onGoToContact={goToContact}
          />
        )}

        {page === 'blog-article' && (
          <BlogArticlePage
            project={activeBlogProject}
            onBack={backFromBlogArticle}
            onGoToContact={goToContact}
          />
        )}
      </main>

      <Footer
        onShowLegal={showLegal}
        onNavigateService={openServiceDetail}
      />

      {/* Modales */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNavigateBlog={navigateToBlogArticle}
      />

      {/* Cookie Banner */}
      <CookieBanner onNavigatePrivacy={() => showLegal('privacy')} />
    </div>
  );
}

export default App;
