import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from '../styles/styles.scss';

const InputAndButtonControls = (props) =>
  <div className={props.style}>
    <input className='form-control' type='text' placeholder='Guatemala City, Guatemala' onChange={props.onUpdateLocation} />
    <button className={classnames('btn btn-success', styles.buttonControl)} type='button' onClick={props.onSubmitLocation}>Get Weather</button>
  </div>

InputAndButtonControls.propTypes = {
  style: PropTypes.string
};

InputAndButtonControls.defaultProps = {
  style: styles.inputAndButtonControls
};

export default InputAndButtonControls;
