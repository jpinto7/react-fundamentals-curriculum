import React, {Component, PropTypes} from 'react';
import styles from '../styles/styles.scss';
import Loading from '../components/Loading';
import DayContainer from '../containers/DayContainer';

const Results = (props) => {
  if(props.isLoading === true) {
    return(
      <Loading speed={100} text='One Moment' />
    );
  }

  const forecastDays = props.fiveDaysForecast.map((day, index) => {
    return(
      <DayContainer
        key={index}
        day={day}
        place={props.place} />
    );
  });

  return(
    <div className={styles.resultsContainer}>
      <h1 className={styles.resultsTitle}>{props.header}</h1>
      <p className={styles.resultsSubTitle}>Select a day</p>
      <div className={styles.resultsGrid}>
        {forecastDays}
      </div>
    </div>
  );
}
Results.propTypes = {
  header: PropTypes.string.isRequired
};

export default Results;
