import React, { useState, ChangeEvent, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext, CartContextProps } from "../Cart/CartContext";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
}

const Catalogue: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
      price: 9.99,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society, depicting a world of government surveillance and control.",
      price: 14.99,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A novel exploring themes of decadence, idealism, and social upheaval in 1920s America.",
      price: 12.99,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A classic novel of manners, romance, and social commentary, revolving around the Bennet family.",
      price: 19.99,
    },
    {
      id: 5,
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      description:
        "A pioneering novel exploring the complex thoughts and emotions of its characters, reflecting on the passage of time.",
      price: 8.99,
    },
  ]);

  const { cartItems, addToCart } = useContext(CartContext) as CartContextProps;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="cart-icon" style={{ textAlign: "right" }}>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
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
            <div
              className="card"
              style={{ borderRadius: "10px", border: "1px solid #dee2e6", height: "100%" }}
            >
              <div className="card-body" style={{ height: "100%" }}>
                <h5 className="card-title">
                  <a href={`/books/${book.id}`}>{book.title}</a>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">{book.description}</p>
                <p className="card-text">${book.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
