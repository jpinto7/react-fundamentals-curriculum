import React from 'react';
import classnames from 'classnames';
import styles from '../styles/styles.scss';
import TopBar from '../components/TopBar';

const Main = (props) =>
  <div className={styles.mainComponent}>
    <TopBar />
    {props.children}
  </div>

export default Main;
