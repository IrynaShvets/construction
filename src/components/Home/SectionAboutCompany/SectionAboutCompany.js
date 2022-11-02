import React from 'react';
import Container from '../../../components/Container';
import BigButton from '../../Buttons/BigButton';
import styles from './SectionAboutCompany.module.scss';

const SectionAboutCompany = () => (
  <section className={styles.sectionAboutCompany}>
    <Container>
      <img
        className={styles.imagePlanTop}
        src="https://i.gyazo.com/13fb0027a30061c132e344b8fe076fc8.png"
        alt="plan"
      />
      <h2 className={styles.titleAboutCompany}>About the Tokar company</h2>
      <div className={styles.containerAboutCompany}>
        <img
          className={styles.imageAboutCompany}
          src="https://i.gyazo.com/3d54f4a0cae5dd7c5aca095580cbfc12.png"
          alt="about company"
        />
        <div className={styles.containerQuote}>
          <img
            className={styles.iconQuote}
            src={require('../../../images/home/quote.svg').default}
            alt="quote"
          />
          <div>
            <h4 className={styles.authorQuote}>Bohdan Kozoriz</h4>
            <p className={styles.quote}>
              Цитата о компании, пару слов от самого лица компании. Цитата о
              компании, пару слов от самого лица компании.
            </p>
          </div>
        </div>
      </div>
      <ul className={styles.listCompanyDetails}>
        <li
          className={styles.itemCompanyDetails}
          style={{ marginRight: '30px' }}
        >
          <div className={styles.wrapperDetail}>
            <h4 className={styles.titleDetail}>21 years</h4>
          </div>
          <p className={styles.textDetail}>
            We have been working on the Ukrainian market since 1998
          </p>
        </li>

        <li
          className={styles.itemCompanyDetails}
          style={{ marginRight: '30px' }}
        >
          <div className={styles.wrapperDetail}>
            <h4 className={styles.titleDetail}>300+</h4>
          </div>
          <p className={styles.textDetail}>Positions of various buildings</p>
        </li>
        <li
          className={styles.itemCompanyDetails}
          style={{ marginRight: '30px' }}
        >
          <div className={styles.wrapperDetail}>
            <h4 className={styles.titleDetail}>up to 7</h4>
          </div>
          <p className={styles.textDetail}>
            Humidity of dried wood, which corresponds to GOST standards
          </p>
        </li>
        <li className={styles.itemCompanyDetails}>
          <div className={styles.wrapperDetail}>
            <h4 className={styles.titleDetail}>in 1,5 times</h4>
          </div>
          <p className={styles.textDetail}>Shipping cost below market</p>
        </li>
      </ul>
      <div className={styles.wrapperButton}>
        <BigButton>Read more about the company</BigButton>
      </div>
      <img
        className={styles.imagePlanBottom}
        src="https://i.gyazo.com/6e990c36bf3947bbdc9b47221adf5842.png"
        alt="plan"
      />
    </Container>
  </section>
);

export default SectionAboutCompany;
