import { Link } from 'react-router-dom';
import { toProperCase } from '../../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['portfolio', 'contact', 'talents'];

  return (
    <nav>
      <ul className="flex-list">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="home"
        >
          <Link to="/">{toProperCase('Home')}</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{toProperCase(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
