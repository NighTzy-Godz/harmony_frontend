import "../../static/css/nodata.css";

const NoData = ({ message }) => {
  return (
    <div className="no-data">
      <h1 className="font_reg">{message}</h1>
    </div>
  );
};

export default NoData;
