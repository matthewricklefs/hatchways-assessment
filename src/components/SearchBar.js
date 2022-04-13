import styled from 'styled-components';

const StyledSearch = styled.div`
  .searchInputs {
    margin-top: 75px;
    display: flex;
  }

  .search input {
    color: lightgrey;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid lightgrey;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 30px;
    width: 100%;
  }

  .searchIcon {
    height: 30px;
    width: 50px;
    background-color: transparent;
    display: grid;
    place-items: center;
  }

  input:focus {
    outline: none;
  }

  .searchIcon svg {
    font-size: 30px;
  }

  .dataResult .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: lightgrey;
  }

  .dataItem p {
    margin-left: 10px;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    background-color: lightgrey;
  }

  #clearBtn {
    cursor: pointer;
  }
`;

function SearchBar({ filteringFunc, type }) {
  return (
    <StyledSearch>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={`search by ${type}`}
            onChange={(e) => filteringFunc(e.target.value.toLowerCase()).trim()}
          />
        </div>
      </div>
    </StyledSearch>
  );
}

export default SearchBar;
