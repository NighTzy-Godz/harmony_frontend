import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../static/css/table.css";
import _ from "lodash";
import LoadingSpinner from "./LoadingSpinner";

const TableBody = ({ columns, dataSource }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data: result } = await dataSource();

      setData(result);
    };

    getData();
  }, [data, dataSource]);

  const getClasses = (item, column) => {
    switch (column.path) {
      case "status":
        return `font_bold ${_.get(
          item,
          column.path
        ).toLowerCase()} patient_status`;

      case "prescription":
        return "font_reg prescriptionDetails";

      default:
        return "font_reg";
    }
  };

  const renderCell = (item, column) => {
    if (column.xtraContent) return column.xtraContent(item);

    return (
      <React.Fragment>
        <p className={`${getClasses(item, column)}`}>
          {column.path === "amount" ? "P" : ""} {_.get(item, column.path)}
        </p>
      </React.Fragment>
    );
  };

  const renderTableBody = () => {
    return data.map((item) => {
      return (
        <tr key={item._id} className="table_data">
          {columns.map((column, index) => {
            return (
              <td key={index + 1} className={column.className}>
                {renderCell(item, column)}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  const renderLoadingTable = () => {
    return columns.map((item) => {
      return (
        <td key={item.path}>
          <LoadingSpinner />
        </td>
      );
    });
  };

  return (
    <React.Fragment>
      {data.length === 0 ? (
        <React.Fragment>
          <tbody>{renderLoadingTable()}</tbody>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <tbody>{renderTableBody()}</tbody>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TableBody;
