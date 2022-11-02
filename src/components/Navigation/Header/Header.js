import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import NavLinks from '../NavLinks';
import SocialNetworks from '../SocialNetworks';
import Container from '../../Container';
import SmallButton from '../../Buttons/SmallButton';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.containerHeader}>
          <NavLink to="/">
            <img
              className={styles.logo}
              src={require('../../../images/logo.svg').default}
              alt="logo"
            />
          </NavLink>

          <p className={styles.logoText}>
            TokarCompany - production and construction company
          </p>
          <div className={styles.containerSocials}>
            <p className={styles.textSocials}>Contact directly:</p>
            <SocialNetworks />
          </div>
          <div className={styles.containerPhone}>
            <p className={styles.textPhone}>+3 80 (97) 111 55 00</p>
            <p className={styles.textSchedule}>from 9a.m. to 6p.m.</p>
          </div>
          <SmallButton>Order a call</SmallButton>
        </div>
        <NavLinks />
      </Container>
    </header>
  );
}

export default Header;
