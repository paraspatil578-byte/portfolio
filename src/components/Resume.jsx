import { resume } from '../data.js';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <ol className="timeline">
        {resume.jobs.map(j => (
          <li key={j.title}>
            <span className="when">{j.when}</span>
            <h3>{j.title}</h3>
            <p>{j.text}</p>
          </li>
        ))}
      </ol>
      <a className="btn" href={`${import.meta.env.BASE_URL}${resume.file}`} download>Download resume (PDF)</a>
    </section>
  );
}
