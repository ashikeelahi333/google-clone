import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from './../StateProvider';
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispath] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    if (input) {
      e.preventDefault();
      console.log("You hit the search button => ", input);

      dispath({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      })

      history.push("/search");
    }
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__mic" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search__buttonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
