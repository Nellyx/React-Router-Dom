import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

function Home() {
  const [url, seturl] = useState("http://localhost:3000/articles");
  const { data: articles, ispending } = useFetch(url);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, placeat!
        Alias facilis, eos reiciendis blanditiis et harum quidem, recusandae
        eveniet optio aliquid ab velit nam esse laudantium. Molestiae, velit
        magni!
      </p>

      {ispending && (
        <div>
          <h1>Loading Loading Loading</h1>
        </div>
      )}

      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <p>{article.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Home;
