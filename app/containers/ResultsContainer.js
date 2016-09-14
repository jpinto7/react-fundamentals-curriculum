import React, {Component, PropTypes} from 'react';
import Results from '../components/Results';
import api from '../helpers/api';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentWeather: {},
      fiveDaysForecast: []
    };
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    this.getWeatherData(this.props.params.place);
  }

  componentWillReceiveProps(props) {
    this.getWeatherData(props.params.place);
  }

  getWeatherData(place) {
    api.forecast(place)
      .then((data) =>
        this.setState(
          {
            isLoading: false,
            currentWeather: data[0],
            fiveDaysForecast: data[1].list
          }
        )
      );
  }

  render() {
    return(
      <Results
        header={this.props.params.place}
        isLoading={this.state.isLoading}
        place={this.props.params.place}
        currentWeather={this.state.currentWeather}
        fiveDaysForecast={this.state.fiveDaysForecast} />
    );
  }
}

export default ResultsContainer;
