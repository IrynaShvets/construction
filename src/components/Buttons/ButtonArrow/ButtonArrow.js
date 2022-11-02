import React from 'react';
import styles from './ButtonArrow.module.scss';

const ButtonArrow = () => (
  <button type="button" className={styles.button}>
    <img
      className={styles.iconArrow}
      src={require('../../../images/arrow.svg').default}
      alt="arrow"
    />
  </button>
);

export default ButtonArrow;
