import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchPageOption from "./SearchPageOption";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./SearchPageOptions.css";

const SearchPageOptions = () => {
  return (
    <div className="searchPage__options">
      <div className="searchPage__optionLeft">
        <SearchPageOption Icon={SearchIcon} text="all" />
        <SearchPageOption Icon={DescriptionIcon} text="news" />
        <SearchPageOption Icon={ImageIcon} text="images" />
        <SearchPageOption Icon={LocalOfferIcon} text="shopping" />
        <SearchPageOption Icon={RoomIcon} text="maps" />
        <SearchPageOption Icon={MoreVertIcon} text="more" />
      </div>
      <div className="searchPage__optionRight">
        <SearchPageOption text="settings" />
        <SearchPageOption text="tools" />
      </div>
    </div>
  );
};

export default SearchPageOptions;
