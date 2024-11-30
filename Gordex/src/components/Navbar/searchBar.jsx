import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as img from "./styles/img.js"

const NavBarSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleFindSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="nav__searchbar">
      <div className="nav__input-box">
        <img src={img.searchIcon} className="nav__input-icon" alt="search icon" />
        <input
          className="nav__input"
          placeholder="Search by brand, name, etc."
          type="text"
          onChange={handleSearchInput}
        />
      </div>
      <button className="nav__input-submit" type="submit" onClick={handleFindSearch}>
        Search
      </button>
    </form>
  );
};

export default NavBarSearch;
