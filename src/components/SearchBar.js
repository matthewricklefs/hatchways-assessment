import './SearchBar.css';

function SearchBar({ filteringFunc, type }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={`search by ${type}`}
          onChange={(e) => filteringFunc(e.target.value.toLowerCase()).trim()}
        />
      </div>
    </div>
  );
}

export default SearchBar;
