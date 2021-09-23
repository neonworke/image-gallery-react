import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import "tailwindcss/tailwind.css";

function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(() => {
    // API call for fetching images 
    axios.get('https://picsum.photos/v2/list')
      .then(function (response) {
        // handle success
        console.log("Data received",response);
        updatePhotoGalleryArray(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <div className="Header w-full m-10">
      <h2 className="w-full font-bold text-xl">Photographer's Showcase</h2>
      </div>
      <div className="grid grid-cols-3 gap-10 ml-36">
        {
          photoGalleryArray.map((photoGalleryArrayItem, index) => {
            return (
              <div key={index} className="border-2 border-gray-300 h-56 w-72 shadow-lg rounded-b-lg md:flex flex-col" onClick={() => getImg(photoGalleryArrayItem.download_url)}>
                <img src={photoGalleryArrayItem.download_url}
                  alt={`image_${photoGalleryArrayItem.id}`}
                  className="h-48 w-72"/>
                <p className="pt-1 font-semibold">Image by: {photoGalleryArrayItem.author}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;