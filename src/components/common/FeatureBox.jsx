const FeatureBox = ({ img, text }) => {
  return (
    <div className="feature_box">
      <div className="feature_img">
        <img src={img} alt="" />
      </div>
      <div className="feature_box_text">
        <h3 className="font_reg">{text}</h3>
      </div>
    </div>
  );
};

export default FeatureBox;
