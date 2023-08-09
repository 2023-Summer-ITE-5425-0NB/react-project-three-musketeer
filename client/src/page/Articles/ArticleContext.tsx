import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

interface Article {
  _id: string;
  title: string;
  author: string;
}

interface ArticleProviderProps {
  children: React.ReactNode;
}

const ArticleContext = createContext<Article[] | undefined>(undefined);

const ArticleProvider: React.FC<ArticleProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get<Article[]>(
        "http://localhost:9090/articles/articles"
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Error while fetching articles:", error);
    }
  };

  return (
    <ArticleContext.Provider value={articles}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };
