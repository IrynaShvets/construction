import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../../components/Container';
import styles from './SectionTypesConstruction.module.scss';

const SectionTypesConstruction = () => (
  <section className={styles.section}>
    <Container>
      <h2 className={styles.title}>
        We divide 3 types
        <br />
        of buildings
      </h2>
      <ul className={styles.list}>
        <li className={styles.item} style={{ marginRight: '30px' }}>
          <div className={styles.wrapperImage}>
            <img
              className={styles.image}
              src="https://i.gyazo.com/1a710d0a810a8bf3965b0d4d6f33c0de.png"
              alt="residential buildings"
            />
          </div>
          <div className={styles.wrapperLinks}>
            <h3 className={styles.titleLinks}>Residential buildings</h3>
            <ul className={styles.listLinks}>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink
                  to="/residential/profiled-timber"
                  className={styles.link}
                >
                  Houses made of profiled timber
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink
                  to="/residential/cylindrical-timber"
                  className={styles.link}
                >
                  Houses made of cylindrical timber
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/residential/frame-houses" className={styles.link}>
                  Frame houses
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/residential/block-houses" className={styles.link}>
                  Block houses
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.item} style={{ marginRight: '30px' }}>
          <div className={styles.wrapperImage}>
            <img
              className={styles.image}
              src="https://i.gyazo.com/153ebc067c96cb4f687bbae263ac41ae.png"
              alt="commercial building"
            />
          </div>
          <div className={styles.wrapperLinks}>
            <h3 className={styles.titleLinks}>Commercial building</h3>
            <ul className={styles.listLinks}>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink
                  to="/commercial/recreation-centers"
                  className={styles.link}
                >
                  Recreation centers
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/commercial/hotels" className={styles.link}>
                  Hotels
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/commercial/restaurants" className={styles.link}>
                  Restaurants
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/commercial/cafe" className={styles.link}>
                  Cafe
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/commercial/shops" className={styles.link}>
                  Shops
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.wrapperImage}>
            <img
              className={styles.image}
              src="https://i.gyazo.com/83caf9b8112e112dcb2651c9747596e5.png"
              alt="garden and household"
            />
          </div>
          <div className={styles.wrapperLinks}>
            <h3 className={styles.titleLinks}>Garden and household</h3>
            <ul className={styles.listLinks}>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/garden-house" className={styles.link}>
                  Garden house
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/gazebo" className={styles.link}>
                  Gazebo
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink
                  to="/garden/children-playgrounds"
                  className={styles.link}
                >
                  Children's playgrounds
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/garages" className={styles.link}>
                  Garages
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/children-houses" className={styles.link}>
                  Wooden children's houses
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/barbecue-areas" className={styles.link}>
                  Barbecue areas
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/kitchens" className={styles.link}>
                  Kitchens
                </NavLink>
              </li>
              <li className={styles.itemLinks}>
                <img
                  className={styles.imageArrow}
                  src={require('../../../images/arrow.svg').default}
                  alt="arrow"
                />
                <NavLink to="/garden/wooden-baths" className={styles.link}>
                  Wooden baths
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Container>
  </section>
);

export default SectionTypesConstruction;
