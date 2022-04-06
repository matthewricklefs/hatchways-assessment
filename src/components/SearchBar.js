import './SearchBar.css';

function SearchBar({ placeholder, search, onChange }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
