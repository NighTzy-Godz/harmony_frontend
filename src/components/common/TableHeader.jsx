import React from "react";
import "../../static/css/table.css";
const TableHeader = ({ columns }) => {
  const renderTableHeader = () => {
    return columns.map((item, index) => {
      return (
        <th className={`font_bold ${item.className}`} key={index + 1}>
          {item.label}
        </th>
      );
    });
  };

  return (
    <React.Fragment>
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeader;
