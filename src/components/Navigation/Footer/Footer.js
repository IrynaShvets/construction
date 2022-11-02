import { NavLink } from 'react-router-dom';
import Container from '../../Container';
import SmallButton from '../../Buttons/SmallButton';
import NavLinks from '../NavLinks';
import SocialNetworks from '../SocialNetworks';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <NavLinks />
        <div className={styles.footerWrapper}>
          <div className={styles.footerLinks}>
            <div className={styles.footerResidentialLinks}>
              <NavLink
                to="/residential/profiled-timber"
                className={styles.link}
              >
                Houses made of profiled timber
              </NavLink>
              <NavLink
                to="/residential/cylindrical-timber"
                className={styles.link}
              >
                Houses made of cylindrical timber
              </NavLink>
              <NavLink to="/residential/frame-houses" className={styles.link}>
                Frame houses
              </NavLink>
              <NavLink to="/residential/block-houses" className={styles.link}>
                Block houses
              </NavLink>
            </div>
            <div className={styles.footerCommercialLinks}>
              <NavLink
                to="/commercial/recreation-centers"
                className={styles.link}
              >
                Recreation centers
              </NavLink>
              <NavLink to="/commercial/hotels" className={styles.link}>
                Hotels
              </NavLink>
              <NavLink to="/commercial/restaurants" className={styles.link}>
                Restaurants
              </NavLink>
              <NavLink to="/commercial/cafe" className={styles.link}>
                Cafe
              </NavLink>
              <NavLink to="/commercial/shops" className={styles.link}>
                Shops
              </NavLink>
            </div>
            <div className={styles.footerGardenLinks}>
              <NavLink to="/garden/garden-house" className={styles.link}>
                Garden house
              </NavLink>
              <NavLink to="/garden/gazebo" className={styles.link}>
                Gazebo
              </NavLink>
              <NavLink
                to="/garden/children-playgrounds"
                className={styles.link}
              >
                Children's playgrounds
              </NavLink>
              <NavLink to="/garden/garages" className={styles.link}>
                Garages
              </NavLink>
              <NavLink to="/garden/children-houses" className={styles.link}>
                Wooden children's houses
              </NavLink>
              <NavLink to="/garden/barbecue-areas" className={styles.link}>
                Barbecue areas
              </NavLink>
              <NavLink to="/garden/kitchens" className={styles.link}>
                Kitchens
              </NavLink>
              <NavLink to="/garden/wooden-baths" className={styles.link}>
                Wooden baths
              </NavLink>
            </div>
          </div>

          <div className={styles.containerFooter}>
            <div className={styles.logoContainer}>
              <NavLink to="/">
                <img
                  className={styles.logoFooter}
                  src={require('../../../images/logo.svg').default}
                  alt="logo"
                />
              </NavLink>

              <p className={styles.logoTextFooter}>
                TokarCompany-production and construction company
              </p>
            </div>
            <div className={styles.phoneContainer}>
              <div className={styles.phoneWrapper}>
                <p className={styles.textPhone}>+3 80 (97) 111 55 00</p>
                <p className={styles.textSchedule}>from 9a.m. to 6p.m.</p>
              </div>
              <SmallButton>Order a call</SmallButton>
            </div>
            <div className={styles.containerSocials}>
              <p className={styles.textSocials}>Contact directly:</p>
              <SocialNetworks />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.containerPrivacyPolicy}>
        <p className={styles.privacyPolicy}>
          © 2022. All rights reserved. TokarCompany - production and
          construction company. The information presented on the site is not a
          public offer.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
