import React, {Component, PropTypes} from 'react';
import Controls from '../components/Controls';
import styles from '../styles/styles.scss';

class ControlsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
    };
    this.handleUpdatePlace = this.handleUpdatePlace.bind(this);
    this.handleSubmitPlace = this.handleSubmitPlace.bind(this);
  }

  handleUpdatePlace(e) {
    this.setState(
      {place: e.target.value}
    );
  }

  handleSubmitPlace(e) {
    e.preventDefault();
    var place = this.state.place;
    this.setState(
      {place: ''}
    );
    this.context.router.push({
      pathname: '/forecast/' + place
    });
  }

  render() {
    return(
      <Controls
        style = {this.props.style}
        onSubmitPlace={this.handleSubmitPlace}
        onUpdatePlace={this.handleUpdatePlace} />
    );
  }
}

ControlsContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ControlsContainer;
