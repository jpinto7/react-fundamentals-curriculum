import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from '../styles/styles.scss';

const Controls = (props) =>
  <form className={props.style} onSubmit={props.onSubmitPlace}>
    <input className='form-control' type='text' placeholder='Guatemala City, Guatemala' onChange={props.onUpdatePlace} />
    <button className={classnames('btn btn-success', styles.buttonControl)} type='submit'>Get Weather</button>
  </form>

Controls.propTypes = {
  style: PropTypes.string,
  onSubmitPlace: PropTypes.func.isRequired,
  onUpdatePlace: PropTypes.func.isRequired  
};

Controls.defaultProps = {
  style: styles.inputAndButtonControls
};

export default Controls;
