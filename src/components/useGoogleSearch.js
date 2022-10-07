import { useState, useEffect } from "react";
import API_KEYS from "./keys";

const CONTEXT_KEY = "141fcf9a7bb254d26";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
