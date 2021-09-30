import { useState, useEffect } from "react";
import getGif from "../helpers/getGif";

const useFetchGifs = (category) => {

  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGif(category).then((res) => setState({ data: res, loading: false }));
  }, [category]);

  return state;
}


export default useFetchGifs;