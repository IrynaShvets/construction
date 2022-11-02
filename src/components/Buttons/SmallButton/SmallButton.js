import React from 'react';
import PropTypes from 'prop-types';
import styles from './SmallButton.module.scss';

const SmallButton = ({ children }) => (
  <div className={styles.button}>{children}</div>
);

export default SmallButton;

SmallButton.propTypes = {
  children: PropTypes.node.isRequired,
};
