import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import css from './book-item.module.css';

export default class BookItem extends Component {
  render() {
    const { id, image, title, genre, author, description } = this.props.item;

    return (
      <div id={id}>
        <h4>{title}</h4>
        <div className={css.bookItemContainer}>
          <img
            className={css.flag}
            src={`https://api.vibook.com.br/images/books/${image}`}
            alt={title}
          />
          <div>
            <p>
              <strong>Gênero:</strong> {genre}
            </p>
            <p>
              <strong>Autor(a):</strong> {author}
            </p>
            <p className={css.desc}>
              <strong>Descrição:</strong> {description}
            </p>
            <Link
              to={`/book/${id}`}
              className="btn"
            >
              detalhes
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
