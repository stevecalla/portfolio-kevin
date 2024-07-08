import { Link } from 'react-router-dom';

function Nav({ currentPage }) {
  const pages = ['portfolio', 'contact', 'talents'];

  return (
    <nav>
      <ul className="flex-row nav-menu-item">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="home"
        >
          <Link to="/">Home</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{Page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
