import React, { Component } from 'react';
import imgGalleryApi from './components/api/imgApi';
import Searchbar from './components/searchbar/Searchbar';
import ImageGallery from './components/imagegallery/Imagegallery';
import Button from './components/button/Button';
import Spinner from './components/spinner/Spinner';
import Modal from './components/modal/Modal';

export default class App extends Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
    loadMoreQuery: '',
    page: 0,
    isModalOpen: false,
    modalUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.loadMoreQuery;
    const nextQuery = this.state.loadMoreQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImg(nextQuery);
    }
    if (
      prevState.gallery !== this.state.gallery ||
      this.state.gallery.length > 12
    ) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 500);
    }
  }
  fetchImg = () => {
    const { loadMoreQuery, page } = this.state;
    this.setState({ loading: true });
    imgGalleryApi
      .imgApi(loadMoreQuery, page)
      .then(gallery =>
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      loadMoreQuery: query,
      page: 0,
      gallery: [],
    });
  };

  openModal = e => {
    const bigImg = e.target.dataset.modal;
    this.setState({ isModalOpen: true, modalUrl: bigImg });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, modalUrl: '' });
  };

  handelModalUrl = url => {
    this.setState({ modalUrl: url, isModalOpen: true });
  };
  render() {
    const { gallery, loading, isModalOpen, modalUrl } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery gallery={gallery} getOpenModal={this.handelModalUrl} />
        {loading && <Spinner />}
        {isModalOpen && <Modal src={modalUrl} onClose={this.closeModal} />}
        {gallery.length > 0 && !loading && <Button onClick={this.fetchImg} />}
      </div>
    );
  }
}
