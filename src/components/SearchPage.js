import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
// import data from "../data/response"; // my data
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchPageOptions from "./SearchPageOptions";

const SearchPage = () => {
  // const [{ term = "tesla" }, despath] = useStateValue();
  
  // LIVE API CALL
  const [{ term }, despath] = useStateValue();
  const {data} = useGoogleSearch(term);

  // console.log(data);


  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <SearchPageOptions />
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img 
                  className="searchPage__resultImage"
                  src={item.pagemap?.cse_image[0]?.src} alt="" />
                )}
                {item.displayLink}
                </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

// https://www.googleapis.com/customsearch/v1?key=YOUR-KEY&cx=017576662512468239146:omuauf_lfve&q=cars&callback=hndlr

//   <script async src="https://cse.google.com/cse.js?cx=141fcf9a7bb254d26">
// </script>
// <div class="gcse-search"></div>
