import useGif from "../hooks/useGif";

// import { useEffect, useState } from "react";
import Spinner from "./Spinner";
// import axios from "axios";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  /* 
      Initial me gif empty hota hai 
    
      const [gif, setGif] = useState("");
      // For loading purpose
      const [loading, setLoading] = useState(false);
    
      // Fetch data 
      async function fetchData() {
        setLoading(true)
    
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
        // random?api_key -> call this API End points to get Random Gif 
    
        // data ek object ke form me lene hai
    
        const { data } = await axios.get(url);
        // data ek object ke form me mila hai , so hum uspr . operator ka use kr skte hai 
    
        const imageSource = data.data.images.downsized_large.url;
    
        setGif(imageSource);        // fetch initial 1st image 
        // console.log(imageSource);
    
        console.log(data)
        // data aate hi loading false 
        setLoading(false);
      }
    
      useEffect(() => {
        fetchData();
      }, []);
     
  
  */

  // Random Generate 
  function changeHandler() {
    fetchData();
  }

  // Call hook without tag

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] pb-4">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>

      {
        loading ? <Spinner /> : <img src={gif} width="450" alt="this is gif" />
      }
      <button
        onClick={changeHandler}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">
        Generate
      </button>
    </div>
  );
};

export default Random;
