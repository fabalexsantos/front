import React, { Component } from 'react';

import css from './book-list.module.css';

import BookItem from './BookItem';

export default class BookList extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return <h4>Carregando...</h4>;
    }

    if (data.length === 0) {
      return <h4>Nenhum livro foi encontrado com esse filtro.</h4>;
    }

    return (
      <div className={css.container}>
        <h2 className="title">Livros registrados</h2>

        <ul className={css.ulContainer}>
          {data.map((item) => {
            const { id } = item;

            return (
              <li key={id} className={css.liContainer}>
                <BookItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
