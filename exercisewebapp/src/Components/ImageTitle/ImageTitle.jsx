import React from "react";
import "./ImageTitle.css";

const ImageTitle = ({ imgSrc, title }) => {
  return (
    <div>
      <img className="" src="{imgSrc}" />
      <div className="sub-title">{title}</div>
    </div>
  );
};
export default ImageTitle;
