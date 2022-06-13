import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";



export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const getImages = async ()=>{
      const newImages = await getGifs(category);
      setimages(newImages);
      setLoading(false);
      
    }

    useEffect (()=>{
        getImages();
    },[] )
  return {
      images,
      isLoading
  }
}
