import React, { useState } from 'react';
import './Books1.css';


const books = [
  {
    title: "Wilder Girls",
    author: "Rory Power",
    genre: "Drama",
    price: "$14",
    imageUrl: "https://covers.openlibrary.org/b/id/10777300-L.jpg",
    description: "This fresh debut is a mind-bending novel unlike anything you’ve read before...",
  },
  // Librat e tjerë...
];

function Books1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-card" onClick={() => openModal(book)}>
          <img className="book-image" src={book.imageUrl} alt={book.title} />
          <div className="book-info">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <p className="book-genre">{book.genre}</p>
          </div>
        </div>
      ))}

      {isModalOpen && selectedBook && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
            
            <div className="modal-text">
              <h2>{selectedBook.title}</h2>
              <p>{selectedBook.description}</p>
              <p><strong>{selectedBook.price}</strong></p>
              <p><strong>Genre: </strong>{selectedBook.genre}</p>
              <p><strong>Author: </strong>{selectedBook.author}</p>
              <button className="modal-close" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books1;
