import React, {Component, PropTypes} from 'react';
import Day from '../components/Day';
import styles from '../styles/styles.scss';
import moment from 'moment';
import converter from '../helpers/converter';

const Details = (props) => {
  const date = moment.unix(props.location.state.weatherInfo.dt).format('dddd, MMM D');
  const iconPath = '/app/images/' + props.location.state.weatherInfo.weather[0].icon + '.svg';
  const description = props.location.state.weatherInfo.weather[0].description;
  const minTemp = converter.fromKelvinToCelsius(props.location.state.weatherInfo.temp.min);
  const maxTemp = converter.fromKelvinToCelsius(props.location.state.weatherInfo.temp.max);
  const humidity = props.location.state.weatherInfo.humidity

  return(
    <div>
      <Day
        date={date}
        iconPath={iconPath}
        description={description} />
      <div className={styles.detailsBody}>
        <p>{props.params.place}</p>
        <p>{description}</p>
        <p>min temp: {minTemp}°C</p>
        <p>max temp: {maxTemp}°C</p>
        <p>humidity: {humidity}</p>
      </div>
    </div>
  );
}

export default Details;
