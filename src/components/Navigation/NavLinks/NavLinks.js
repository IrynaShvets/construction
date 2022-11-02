import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';

function NavLinks() {
  return (
    <>
      <nav>
        <div className={styles.linkCatalog}>
          <NavLink to="residential" className={styles.linkResidential}>
            Residential
          </NavLink>
          <NavLink to="commercial" className={styles.linkCommercial}>
            Commercial
          </NavLink>
          <NavLink to="garden" className={styles.linkGarden}>
            Garden
          </NavLink>
        </div>
        <div className={styles.links}>
          <NavLink to="about-company" className={styles.link}>
            About company
          </NavLink>
          <NavLink to="our-work" className={styles.link}>
            Our work
          </NavLink>
          <NavLink to="contacts" className={styles.link}>
            Contacts
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavLinks;
