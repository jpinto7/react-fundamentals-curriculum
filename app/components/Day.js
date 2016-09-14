import React, {Component, PropTypes} from 'react';
import styles from '../styles/styles.scss';

const Day = (props) =>
  <div className={styles.dayItem} onClick={props.onViewDetails}>
    <img className={styles.dayItemImage} src={props.iconPath} alt={props.description} />
    <h2 className={styles.datItemTitle}>{props.date}</h2>
  </div>

Day.propTypes = {
  onViewDetails: PropTypes.func,
  description: PropTypes.string,  
  iconPath: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Day;
