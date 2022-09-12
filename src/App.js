import { useState } from 'react';
import { BOOKS_DB, GENRE_NAMES } from './Constants';

const App = () => {
  const [genreSelected, setGenreSelected] = useState(GENRE_NAMES.SCI_FI);

  const handleGenreSelection = (event) => {
    setGenreSelected(event.target.innerText);
  };
  return (
    <div className='container'>
      <h1 className='heading text-center'>Welcome to GoodReads!</h1>
      <div className='text-center mt-sm'>
        Recommendation of books from{' '}
        <a
          href='https://akshayraichur.com'
          className='text-center personal-website-link'
        >
          Akshay Raichur
        </a>
      </div>

      <div className='card'>
        <div>
          <h4>Checkout my collection of books 📚 from each genere</h4>
          <br />
          <h4>Choose from</h4>
          {Object.keys(GENRE_NAMES).map((genere) => (
            <button
              className={
                genreSelected === GENRE_NAMES[genere]
                  ? 'genre-btn selected-btn'
                  : 'genre-btn'
              }
              key={genere}
              onClick={handleGenreSelection}
            >
              {GENRE_NAMES[genere]}
            </button>
          ))}
        </div>
      </div>

      <hr />

      {/* Display the list of book recomendations */}
      {BOOKS_DB[genreSelected].map((book, index) => (
        <div key={index} className='card'>
          <div className='card-container'>
            <div className='title-row'>
              <h4>{book.name}</h4>
              <a href={book.link} target='_blank' rel='noreferrer'>
                Buy
              </a>
            </div>
            <p className='mt-sm'>Rating: {book.rating} ⭐️ ⭐️ ⭐️ ⭐️ </p>
            <h5 className='mt-sm'>Author: {book.author}</h5>
            <p className='mt-sm'>Description: {book.description}</p>
          </div>
        </div>
      ))}

      {/* 
        <div key={genre} className='card'>
          <div className='card-container'>
            <h5>{}</h5>
          </div>
        </div>
      
       */}
    </div>
  );
};

export default App;
