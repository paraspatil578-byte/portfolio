import { profile } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <div className="prose">
        {profile.about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
