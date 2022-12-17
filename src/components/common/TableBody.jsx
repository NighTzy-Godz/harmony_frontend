import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../static/css/table.css";
import _ from "lodash";
import LoadingData from "./LoadingData";

const TableBody = ({ columns, dataSource }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data: result } = await dataSource();
      console.log(result);
      setData(result);
    };

    getData();
  }, [data, dataSource]);
  const renderCell = (item, column) => {
    if (column.xtraContent) return column.xtraContent(item);

    return (
      <React.Fragment>
        <p
          className={`${
            column.path === "status"
              ? `${_.get(item, column.path).toLowerCase()}`
              : ""
          } font_reg `}
        >
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

  return (
    <React.Fragment>
      {data.length === 0 ? (
        <LoadingData msg="Loading data for table body..." />
      ) : (
        <React.Fragment>
          <tbody>{renderTableBody()}</tbody>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TableBody;
