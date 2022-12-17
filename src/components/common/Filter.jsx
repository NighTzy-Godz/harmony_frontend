import "../../static/css/filter.css";
const Filter = ({ listCategories, currSpecialty, onSpecialtyChange }) => {
  const renderSpecialties = listCategories.map((item, index) => {
    return (
      <li
        key={item.id + index}
        className={`font_reg ${currSpecialty.id === item.id ? "active" : ""}`}
        onClick={() => onSpecialtyChange(item)}
      >
        {item.name}
      </li>
    );
  });
  return (
    <div className="filter">
      <h1 className="font_bold">FILTER CATEGORY</h1>
      <ul>{renderSpecialties}</ul>
    </div>
  );
};

export default Filter;
