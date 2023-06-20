import React, { useState } from "react";

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 9.99,
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 14.99,
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 12.99,
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 8.99,
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center mb-4">Book Catalogue</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search books"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card" style={{ borderRadius: "10px", border: "1px solid #dee2e6" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <a href={`/books/${book.id}`}>{book.title}</a>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">{book.description}</p>
                <p className="card-text">${book.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
