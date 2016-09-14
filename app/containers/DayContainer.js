import React, {Component, PropTypes} from 'react';
import styles from '../styles/styles.scss';
import moment from 'moment';
import Day from '../components/Day';

class DayContainer extends Component {
  constructor(props) {
    super(props);
    this.handleViewDetails = this.handleViewDetails.bind(this);
  }

  handleViewDetails(e) {
    e.preventDefault();
    console.log(this.props);
    this.context.router.push({
      pathname: '/details/' + this.props.place,
      state: {
        weatherInfo: this.props.day
      }
    });
  }

  render() {
    const date = moment.unix(this.props.day.dt).format('dddd, MMM D');
    const iconPath = '/app/images/' + this.props.day.weather[0].icon + '.svg';
    const description = this.props.day.weather[0].description;

    return(
      <Day
        onViewDetails={this.handleViewDetails}
        iconPath={iconPath}
        description={description}
        date={date} />
    );
  }
}

DayContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DayContainer;
