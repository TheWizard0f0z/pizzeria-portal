import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography
      className={styles.component}
      variant="h4"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};