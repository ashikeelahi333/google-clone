import React from "react";
import { Link } from "react-router-dom";
import './SearchPageOptions.css'

// const SearchPageOption = ({ Icon }, { text = 'do' }) => {
//   console.log(text);
//   return (
//     <div className="searchPage__Option">
//       <Icon />
//       <Link to={`/g${text}`}>
//         {
//         `${text[0].toUpperCase()}${text.slice(1)}`
//         }
//       </Link>
//     </div>
//   );
// };

const SearchPageOption = (props) => {
  const Icon = props.Icon;
  const text = props.text;
  return (
    <div className="searchPage__option">
      {
        Icon && <Icon />
      }
      <Link to={`/${text}`}>
        {`${text[0].toUpperCase()}${text.slice(1)}`}
      </Link>
    </div>
  );
};

export default SearchPageOption;
