import React, { Component } from 'react';
import pt from 'prop-types';
import style from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClose: pt.func.isRequired,
    src: pt.string.isRequired,
  };

  state = {};

  componentWillMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  handelCloseModal = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { src } = this.props;
    return (
      <div className={style.Overlay} onClick={this.handelCloseModal}>
        <div className={style.Modal}>
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;


