import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import styles from '../styles/styles.scss';
import ControlsContainer from '../containers/ControlsContainer';

const Home = () =>
  <div className={styles.homeComponent}>
    <h1 className={styles.homeTitle}>Enter a City and State</h1>
    <ControlsContainer />
  </div>

export default Home;
