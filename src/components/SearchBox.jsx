import PropTypes from 'prop-types';

const SearchBox = (props) => {
  SearchBox.propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchValue: PropTypes.func.isRequired,
  };

  return (
    <div className="col-12 col-sm-4">
      <input
        className="form-control"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."></input>
    </div>
  );
};

export default SearchBox;
