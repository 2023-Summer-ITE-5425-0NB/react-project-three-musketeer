import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Login/AuthContext";

interface Article {
  _id: string;
  title: string;
  author: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchArticles();
    console.log(articles)
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:9090/articles/articles", {
        headers: {
          Authorization: authContext.token,
        },
      });
      setArticles(response.data);
      
    } catch (error) {
      console.error("Error while fetching articles:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Articles</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article._id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{ borderRadius: "10px", border: "1px solid #dee2e6" }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/articles/${article._id}`}>{article.title}</Link>
                </h5>
                <p className="card-text">{article.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
