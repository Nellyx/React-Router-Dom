import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [url, seturl] = useState("http://localhost:3000/articles");
  const { data: articles, ispending, error } = useFetch(url);

  return (
    <div className="home">
      <h2>Articles</h2>

      {ispending && (
        <div>
          <h1>Loading Loading Loading</h1>
        </div>
      )}

      {error && (
        <div>
          <h1>error 404</h1>
        </div>
      )}

      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <p>{article.body}</p>
            <Link to={`/article/${article.id} `}>Read More..</Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
