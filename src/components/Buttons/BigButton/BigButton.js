import React from 'react';
import PropTypes from 'prop-types';
import styles from './BigButton.module.scss';

const BigButton = ({ children }) => (
  <div className={styles.button}>{children}</div>
);

export default BigButton;

BigButton.propTypes = {
  children: PropTypes.node.isRequired,
};
