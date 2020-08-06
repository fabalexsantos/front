import React, { Component } from 'react';

import BookList from '../components/Books/BookList';

import css from './app.module.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      allBooks: [],
      currentBooks: [],
      filter: '',
      bookCount: 0,
    };
  }

  async componentDidMount() {
    const res = await fetch('https://api.vibook.com.br/wp-json/api/livro');
    const json = await res.json();

    const books = json.map((item) => {
      const { id, title, author, genre, description, imageUrl } = item;

      return {
        id: id,
        titleFilter: title.toLowerCase(),
        title,
        author,
        genre,
        description,
        image: imageUrl,
      };
    });

    this.setState({
      allBooks: books,
      books,
      bookCount: books.length,
    });
  }

  handleFilter = (event) => {
    const filterText = event.target.value;
    const filterTextLowerCase = filterText.toLowerCase();

    this.setState({ filter: filterText });

    let { books, allBooks } = this.state;

    books = allBooks.filter((book) => {
      return book.titleFilter.includes(filterTextLowerCase);
    });


    this.setState({
      books,
      bookCount: books.length,
    });
  };

  render() {
    const { books, filter, bookCount } = this.state;

    return (
      <div className={css.mainContainer}>
        <div className={css.flexRow}>
          <input
            placeholder="Digite o nome do livro para a busca"
            type="text"
            value={filter}
            onChange={this.handleFilter}
          />
          <div>
            <p>
             Número de Livros: <strong>{bookCount}</strong>
            </p>
          </div>
        </div>
        <div>
          <BookList data={books} />
        </div>
      </div>
    );
  }
}
