import React from 'react';
import { useParams, Link } from 'react-router-dom';
import css from './app.module.css';

export default function SingleBook() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {

    setLoading(true);
    async function getBook() {
      try {
        const response = await fetch(
          `https://api.vibook.com.br/wp-json/api/livro/${id}`
        );
        const data = await response.json();
            console.log(data);

        if (data) {
          const {
            title,
            author,
            genre,
            description,
            synopsis,
            amazonLink,
            registrationDate,
            publisher,
            imageUrl,
            fileHash,
            transactionHash,
          } = data;

          const newBook = {
            title,
            author,
            genre,
            description,
            synopsis,
            amazonLink,
            registrationDate,
            publisher,
            imageUrl,
            fileHash,
            transactionHash,
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getBook();
  }, [id]);
  if (loading) {
    return <h2 className={css.sectiontitle}>Loading...</h2>;
  }
  if (!book) {
    return <h2 className={css.sectiontitle}>no book to display</h2>;
  } else {
    const {
      title,
      author,
      genre,
      description,
      synopsis,
      amazonLink,
      registrationDate,
      publisher,
      imageUrl,
      fileHash,
      transactionHash,
    } = book;
    return (
      <section>
        <Link to="/" className="btn">
          Voltar Para a página Inicial
        </Link>
        <h3 className={css.sectiontitle}>{title}</h3>
        <div className={css.singlebookcontainer}>
          <div className={css.singledata}>
            <p>
              <strong>Obra: </strong>
              {title}
            </p>
            <p>
              <strong>Autor(a): </strong>
              {author}
            </p>
            <p>
              <strong>Gênero: </strong>
              {genre}
            </p>
            <p>
              <strong>Editora: </strong>
              {publisher}
            </p>
            <p>
              <strong>Descrição: </strong>
              {description}
            </p>
            <p>
              <strong>Resumo da obra: </strong>
              <br />
              {synopsis}
            </p>
            <p>
              <strong>Data de registro: </strong>
              {registrationDate}
            </p>
            <p>
              <strong>Hash do arquivo: </strong>
              {fileHash}
            </p>
            <p>
              <strong>Hash da transação: </strong>
              {transactionHash}
            </p>
            <Link
              to={{
                pathname: `${amazonLink}`,
              }}
              target="_blank"
              className="btn vermelho"
            >
              Compre pela Amazon
            </Link>
          </div>
          <img
            src={`https://api.vibook.com.br/images/books/${imageUrl}`}
            alt={title}
          />
        </div>
        <Link to="/" className="btn">
          Voltar Para a página Inicial
        </Link>
      </section>
    );
  }
}
