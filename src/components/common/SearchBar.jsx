import "../../static/css/searchbar.css";

const SearchBar = ({ value, onSearchChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="font_reg"
        placeholder="Search Here..."
        onChange={(e) => onSearchChange(e.currentTarget.value)}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
