import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [ispending, setispending] = useState(false);
  const [error, seterror] = useState(null)

  useEffect(() => {
    const fetchdata = async () => {


try {
  setispending(true);
  const response = await fetch(url);





  
  const json = await response.json();
  setispending(false);
  setdata(json);
  
} catch (error) {
  seterror("There is an error")
  setispending(false)
  
  console.log(error.message)
}





    };

    fetchdata();
  }, [url]);

  return { data, ispending };
};

export default useFetch;