import React from "react";
import searchImg from "../../assets/images/icon/SearchBar/icon_search_re.png";
import "./styles.scss";

const SearchBar = ({
  value,
  onClick,
  onChange,
  onKeypress,
  placeholderText,
  style,
}) => {
  return (
    <form name="searchForm" className="search-form" style={style}>
      <img
        className="searchImg"
        src={searchImg}
        alt="searchImg"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
      <input
        className="search-bar"
        type="search"
        value={value}
        onChange={onChange}
        onKeyPress={onKeypress}
        placeholder={placeholderText}
      />
    </form>
  );
};

export default SearchBar;
