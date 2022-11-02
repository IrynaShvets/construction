import React from 'react';
import Container from '../../../components/Container';
import Background from '../../../images/home/gazebo.jpg';
import imgResidential from '../../../images/home/residential.png';
import imgCommercial from '../../../images/home/commercial.png';
import imgGarden from '../../../images/home/garden.png';
import ButtonArrow from '../../Buttons/ButtonArrow';
import styles from './SectionProject.module.scss';

const SectionProject = () => (
  <section className={styles.section}>
    <Container>
      <div>
        <h2 className={styles.title}>Project catalog</h2>
        <div
          className={styles.imageStyle}
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className={styles.sectionStyle}></div>
        </div>
        <ul className={styles.list}>
          <li className={styles.item} style={{ marginRight: '30px' }}>
            <div className={styles.containerImageResidential}>
              <img
                className={styles.imageResidential}
                src={imgResidential}
                alt="residential"
              />
            </div>

            <div className={styles.containerTextResidential}>
              <h3 className={styles.titleResidential}>Residential</h3>
              <p className={styles.textResidential}>
                Section with houses, dachas, cottages, villas, estates and
                mansions
              </p>
              <div className={styles.containerButtonResidential}>
                <ButtonArrow />

                <p className={styles.textButtonResidential}>See the projects</p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.containerImageCommercial}>
              <img
                className={styles.imageCommercial}
                src={imgCommercial}
                alt="commercial"
              />
            </div>

            <div className={styles.containerTextCommercial}>
              <h3 className={styles.titleCommercial}>Commercial</h3>
              <p className={styles.textCommercial}>
                Section with recreation centers, hotels, restaurants, cafes and
                shops
              </p>
              <div className={styles.containerButtonCommercial}>
                <ButtonArrow />
                <p className={styles.textButtonCommercial}>See the projects</p>
              </div>
            </div>
          </li>
          <li className={styles.itemProjectGarden}>
            <div className={styles.containerTextGarden}>
              <h3 className={styles.titleGarden}>Garden</h3>
              <p className={styles.textGarden}>
                Section with saunas, gazebos, garages, kitchens, playgrounds,
                barbecue areas and barbecues
              </p>
              <div className={styles.containerButtonGarden}>
                <ButtonArrow />
                <p className={styles.textButtonGarden}>See the projects</p>
              </div>
            </div>

            <div className={styles.containerImageGarden}>
              <img
                className={styles.imageGarden}
                src={imgGarden}
                alt="garden"
              />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  </section>
);

export default SectionProject;
