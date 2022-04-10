import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function TagBar({ placeholder, onChange, tagEntered, clearTagInput }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={tagEntered}
          onChange={onChange}
        />

        <div className="searchIcon">
          {tagEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearTagInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TagBar;
