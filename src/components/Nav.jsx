const links = ['about', 'projects', 'skills', 'resume', 'contact'];

export default function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">PP</a>
      <nav aria-label="Main">
        <ul>
          {links.map(l => <li key={l}><a href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a></li>)}
        </ul>
      </nav>
    </header>
  );
}
