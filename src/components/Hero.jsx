import { profile } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-role">{profile.role}, {profile.location}</p>
      <h1>{profile.name}</h1>
      <p className="hero-intro">{profile.intro}</p>
      <div className="actions">
        <a className="btn" href="#projects">See my projects</a>
        <a className="btn ghost" href="#contact">Get in touch</a>
      </div>
    </section>
  );
}
