import React from 'react';
import PropTypes from 'prop-types';
import style from './Imagegallery.module.css';
import ImageGalleryItems from '../imageGalleyItems/ImageGalleryItems';

const ImageGallery = ({ gallery, getOpenModal }) => {
  return (
    <>
      <ul className={style.ImageGallery}>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItems
            key={id}
            url={webformatURL}
            getOpenModal={() => getOpenModal(largeImageURL)}
            alt={tags}
          />
        ))}
      </ul>
    </>
  );
};
ImageGallery.propTypes = {
  getOpenModal: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ImageGallery;
