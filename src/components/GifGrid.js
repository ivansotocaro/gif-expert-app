import React, {  useState } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

  const {data : imagen, loading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2> 
      { loading && <p>Cargando...</p> }
      <div className="card-grid">
        {
          imagen.map((img) => (
            <GifGridItem key={img.id} img={img} />
          ))
        }
      </div>
    </> 
  );
};

export default GifGrid;
