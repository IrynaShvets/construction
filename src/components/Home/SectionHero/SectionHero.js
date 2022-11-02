import React from 'react';
import Container from '../../../components/Container';
import hero from '../../../images/hero-home.png';
import scoop from '../../../images/scoop.png';
import tree from '../../../images/tree.png';
import ButtonArrow from '../../Buttons/ButtonArrow';
import BigButton from '../../Buttons/BigButton';
import styles from './SectionHero.module.scss';

const SectionHero = () => (
  <section className={styles.sectionHero}>
    <Container>
      <div className={styles.containerHero}>
        <div>
          <h1 className={styles.titleHero}>
            We manufacture and install structures of various types all over the
            world.
          </h1>
          <p className={styles.textHero}>
            We will build a house, a restaurant, a gazebo, a barbecue or any
            other building individually according to your request.
          </p>
          <div className={styles.wrapperSlider}>
            <span style={{ marginRight: '12px' }}>
              <BigButton>Go to the catalog of houses</BigButton>
            </span>
            <ButtonArrow />
            <p className={styles.textSlider}>Catalog of baths</p>
          </div>
        </div>

        <img
          src={hero}
          alt="hero"
          width={615}
          height={506}
          className={styles.hero}
        />
        <img
          src={scoop}
          alt="hero"
          width={121}
          height={113}
          className={styles.heroScoop}
        />
        <img
          src={tree}
          alt="hero"
          width={122}
          height={91}
          className={styles.heroTree}
        />
      </div>
    </Container>
  </section>
);

export default SectionHero;
