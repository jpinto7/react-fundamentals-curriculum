import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import styles from '../styles/styles.scss';
import ControlsContainer from '../containers/ControlsContainer';

const TopBar = (props) =>
  <div className={styles.topBarComponent}>
    <Link to='/' className={styles.topBarTitle}>
      <h2>Weather App</h2>
    </Link>
    <ControlsContainer style={styles.topBarControls} />
  </div>

export default TopBar;
