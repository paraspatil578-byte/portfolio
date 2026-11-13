import { projects } from '../data.js';
import LazyImage from './LazyImage.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article key={p.title} className="project">
            <LazyImage src={`${import.meta.env.BASE_URL}images/${p.image}`} alt={p.alt} width={640} height={400} />
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="tags">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
            <p className="links"><a href={p.live}>Live demo</a> <a href={p.code}>Source code</a></p>
          </article>
        ))}
      </div>
    </section>
  );
}
