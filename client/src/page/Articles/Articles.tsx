import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Article 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Article 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Article 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Article 6",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      title: "Article 7",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      title: "Article 8",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      title: "Article 9",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 10,
      title: "Article 10",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 11,
      title: "Article 11",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 12,
      title: "Article 12",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mb-4">Articles</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card" style={{ borderRadius: "10px", border: "1px solid #dee2e6" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h5>
                <p className="card-text">{article.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
