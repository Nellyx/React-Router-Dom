import React from "react";

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Article() {
  const { id } = useParams();
  const url = " http://localhost:3000/articles" + id;
  const { data: articles, ispending, error } = useFetch(url);

  return (
    <div>
      {ispending && (
        <div>
          <h1>Loading Loading Loading </h1>
        </div>
      )}

      {error && <div>{error}</div>}
      {articles && <div>
        <h2>{articles.title}</h2>
        <p></p>
        
        
        
        
        
        
        </div>}
    </div>
  );
}

export default Article;
