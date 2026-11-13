import { lazy, Suspense } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';

// Below-the-fold sections load as separate chunks (code splitting).
const Projects = lazy(() => import('./components/Projects.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Suspense fallback={<p className="loading" role="status">Loading…</p>}>
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Paras Patil</footer>
    </>
  );
}
