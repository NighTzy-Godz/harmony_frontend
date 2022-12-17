import _ from "lodash";
import "../../static/css/paginate.css";

const Paginate = ({ itemCount, currPage, pageSize, onPageChange }) => {
  const pageCount = itemCount / pageSize;
  const pages = _.range(1, pageCount + 1);

  if (pages.length === 1) return;
  return (
    <div className="paginate">
      <ul>
        {pages.map((item) => {
          return (
            <li
              key={item}
              className={`font_reg ${currPage === item ? "active" : ""}`}
              onClick={() => onPageChange(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
