import React from 'react';
import Container from '../../../components/Container';
import imgCreatingLayout from '../../../images/home/creating-layout.png';
import imgMeasurement from '../../../images/home/measurement.png';
import imgConstruction from '../../../images/home/construction.png';
import imgConstructionWorks from '../../../images/home/construction-works.png';
import imgNumberOne from '../../../images/home/01.png';
import imgNumberTwo from '../../../images/home/02.png';
import imgNumberThree from '../../../images/home/03.png';
import imgNumberFour from '../../../images/home/04.png';
import imgSliderConstruction from '../../../images/home/slider-construction.png';
import ButtonArrow from '../../Buttons/ButtonArrow';
import BigButton from '../../Buttons/BigButton';
import styles from './SectionStructure.module.scss';

const SectionStructure = () => (
  <section className={styles.sectionStructure}>
    <Container>
      <h2 className={styles.titleStructure}>
        What are our structures made of?
      </h2>
      <ul className={styles.listStructure}>
        <li
          className={styles.itemStructure}
          style={{ marginRight: '30px', marginBottom: '58px' }}
        >
          <div className={styles.wrapperCreatingLayout}>
            <h3 className={styles.titleCreatingLayout}>
              Create
              <br />a 3D layout
            </h3>
            <img
              className={styles.imageCreatingLayout}
              src={imgCreatingLayout}
              alt="create a 3D layout"
            />
          </div>
          <p className={styles.textCreatingLayout}>
            This is a visualization of the structure through the gadget screen.
            The layout is created individually for the client. The main task of
            3D-visualization: to take into account all the details in the
            development and show the final view of the project in the original
            color and size, using actual materials and filling inside.
          </p>
          <img className={styles.numberStructure} src={imgNumberOne} alt="01" />
        </li>
        <li className={styles.itemStructure} style={{ marginBottom: '58px' }}>
          <div className={styles.wrapperMeasurement}>
            <h3 className={styles.titleMeasurement}>
              Taking measurements
              <br />
              and creating foundation
            </h3>
            <img
              className={styles.imageMeasurement}
              src={imgMeasurement}
              alt="taking measurements"
            />
          </div>
          <p className={styles.textMeasurement}>
            We go to the object, discuss the problem, identify the client’s need
            and take measurements. We build a load-bearing structure that will
            withstand the load from the building and weather conditions.
            Professionals use laser level and quality materials to get the
            foundation as strong and smooth as possible.
          </p>
          <img className={styles.numberStructure} src={imgNumberTwo} alt="02" />
        </li>
        <li className={styles.itemStructure} style={{ marginRight: '30px' }}>
          <div className={styles.wrapperConstruction}>
            <h3 className={styles.titleConstruction}>
              Construction
              <br />
              production
            </h3>
            <img
              className={styles.imageConstruction}
              src={imgConstruction}
              alt="construction production"
            />
          </div>
          <p className={styles.textConstruction}>
            At one of the 4 factories throughout Ukraine, we produce a design
            according to the technical specifications. The task is created and
            agreed with you through a written contract at the beginning of work.
          </p>
          <img
            className={styles.numberStructure}
            src={imgNumberThree}
            alt="03"
          />
        </li>
        <li className={styles.itemStructure}>
          <div className={styles.wrapperConstructionWorks}>
            <h3 className={styles.titleConstructionWorks}>
              Construction
              <br />
              works
            </h3>
            <img
              className={styles.imageConstructionWorks}
              src={imgConstructionWorks}
              alt="construction production"
            />
          </div>
          <p className={styles.textConstructionWorks}>
            We will carry out the full scope of work: from the construction of
            the foundation to the installation of the roof. Ultimately, it will
            be possible to immediately use the building, and not buy additional
            material with your own money. We will carry out plumbing work until
            the completion of the project.
          </p>
          <img
            className={styles.numberStructure}
            src={imgNumberFour}
            alt="04"
          />
        </li>
      </ul>
      <img
        className={styles.imageSliderConstruction}
        src={imgSliderConstruction}
        alt="slider construction"
      />
      <div className={styles.wrapperSlider}>
        <span style={{ marginRight: '12px' }}>
          <BigButton>Go to the catalog of houses</BigButton>
        </span>
        <ButtonArrow />
        <p className={styles.textSlider}>Catalog of baths</p>
      </div>
    </Container>
  </section>
);

export default SectionStructure;
