import { useState } from 'react';
import { profile } from '../data.js';

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const set = k => e => setState({ ...state, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(state.email)) { setError('Enter a valid email address.'); return; }
    setError('');
    // Opens the visitor's mail app. Swap for Formspree/Netlify Forms if you want server-side delivery.
    const body = encodeURIComponent(`${state.message}\n\n— ${state.name} (${state.email})`);
    window.location.href = `mailto:${profile.email}?subject=Portfolio%20enquiry&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="prose">Have a project or role in mind? Write to <a href={`mailto:${profile.email}`}>{profile.email}</a> or use the form.</p>
      <form onSubmit={submit} noValidate>
        <label>Name<input required value={state.name} onChange={set('name')} autoComplete="name" /></label>
        <label>Email<input type="email" required value={state.email} onChange={set('email')} autoComplete="email" aria-invalid={!!error} /></label>
        {error && <p className="error" role="alert">{error}</p>}
        <label>Message<textarea required rows="5" value={state.message} onChange={set('message')} /></label>
        <button className="btn" type="submit">Send message</button>
      </form>
      <p className="links"><a href={profile.github}>GitHub</a> <a href={profile.linkedin}>LinkedIn</a></p>
    </section>
  );
}
