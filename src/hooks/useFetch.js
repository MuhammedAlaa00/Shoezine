import  { useEffect, useState } from "react";
import axios from "axios";
function useFetch(pagenextNumb, title) {
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    console.log(title);
    const usplashApi = "gN2owvKtm8BAum3PTUT-RpTJm1FaHXR2HJ-lQHADqog";
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${pagenextNumb}&query=${title}&client_id=${usplashApi}`
      )
      .then((res) => {
        setImages(res.data.results);
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pagenextNumb]);
  return {
    loading,
    images,
  };
}

export default useFetch;
