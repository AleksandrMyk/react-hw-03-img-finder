import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItems.module.css';

const ImageGalleryItems = ({ url, alt, getOpenModal }) => {
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img
          className={style.items}
          src={url}
          alt={alt}
          onClick={getOpenModal}
        ></img>
      </li>
    </>
  );
};

ImageGalleryItems.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  getOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItems;
