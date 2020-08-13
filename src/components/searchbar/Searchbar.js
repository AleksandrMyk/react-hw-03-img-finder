import React, { Component } from 'react';
import style from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  handleChange = e => {
    this.setState({ inputQuery: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputQuery);
    this.setState({ inputQuery: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
