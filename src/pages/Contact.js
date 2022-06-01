import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>hey {name} Contact us Here</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, placeat!
        Alias facilis, eos reiciendis blanditiis et harum quidem, recusandae
        eveniet optio aliquid ab velit nam esse laudantium. Molestiae, velit
        magni!
      </p>
    </div>
  );
}

export default Contact;
