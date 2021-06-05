import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
// import GalleryList into App.jsx
import GalleryList from '../GalleryList/GalleryList'

function App() {

    const [galleryList, setGalleryList] = useState([]);

    // When page is loaded
    useEffect( () => {
      // run getGallery
      getGallery()
    }, []);

    //function to Get gallery
    const getGallery = () => {
      // console log to show GET works on call
      console.log('GET was triggered');
      // axios request to server
      Axios.get('/gallery')
      .then( (response) => {
        // console log the data coming in
        console.log('Response from GET:', response.data)
        // setGalleryList to the response that comes in
        setGalleryList(response.data)
      })
      .catch( (error) => {
        console.log('Error in GET request', error);
      });
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/twinkie_dog.jpg"/> */}
        <GalleryList list={galleryList} getGallery={getGallery} />
      </div>
    );
}

export default App;
