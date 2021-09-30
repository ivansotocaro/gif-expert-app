import React from "react";
import "../index.css";

const GifGridItem = ({img}) => {

  return (
    <div className="card">
      <img src={img.url} key={img.id} alt={img.title} />
      <p>{ img.title }</p>
    </div>
  );

};

export default GifGridItem;
