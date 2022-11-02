import React from 'react';
import Container from '../../Container';
import styles from './SectionPreference.module.scss';

const SectionPreference = () => (
  <section>
    <Container>
      <div className={styles.sectionPreference}>
        <h2>Why choose us:</h2>
        <div className={styles.containerPreferenceBlocks}>
          <div>
            <img
              src={require('../../../images/design.svg').default}
              alt="design"
              width={62}
              height={62}
            />
            <div className={styles.wrapperDesign}>
              <h4 className={styles.titleDesign}>Exclusive design</h4>
              <p>It has no analogues anywhere in the world</p>
            </div>
          </div>
          <div>
            <img
              src={require('../../../images/model.svg').default}
              alt="model"
              width={62}
              height={62}
            />
            <div className={styles.wrapperModel}>
              <h4 className={styles.titleModel}>Model development</h4>
              <p>
                Individually with the help of 3D visualization in our
                application
              </p>
            </div>
          </div>
          <div>
            <img
              src={require('../../../images/certificates.svg').default}
              alt="certificates"
              width={62}
              height={62}
            />
            <div className={styles.wrapperCertificates}>
              <h4 className={styles.titleCertificates}>Quality certificates</h4>
              <p>Confirm our materials and components</p>
            </div>
          </div>
          <div>
            <img
              src={require('../../../images/turn-key.svg').default}
              alt="turn-key"
              width={62}
              height={62}
            />
            <div className={styles.wrapperTurnKey}>
              <h4 className={styles.titleTurnKey}>Turn-key operation</h4>
              <p>
                On average, in X days from the foundation installation to the
                commissioning of the facility
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default SectionPreference;
