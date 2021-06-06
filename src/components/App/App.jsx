import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
// import GalleryList into App.jsx
import GalleryList from '../GalleryList/GalleryList'

function App() {
    // variable to store data coming from GET
    const [galleryList, setGalleryList] = useState([]);

    // When page is loaded
    useEffect( () => {
      // run getGallery
      getGallery()
      // [] prevents page refresh each time
    }, []);

    //function to Get gallery
    const getGallery = () => {
      // console log to show GET works on call
      console.log('GET was triggered');
      // axios request to server
      axios.get('/gallery')
      .then( (response) => {
        // console log the data coming in
        console.log('Response from GET:', response.data)
        // setGalleryList to the response that comes in
        setGalleryList(response.data)
      })
      .catch( (error) => {
        // console log errors that happen
        console.log('Error in GET request', error);
      });
    } // end getGallery

    // layout of the DOM including component
    // commented out old tags to replace with new ones
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        <p>Click on an image to see description!</p>
        
        {/* <img src="images/twinkie_dog.jpg"/> */}
        <GalleryList list={galleryList} getGallery={getGallery} />
        
      </div>
    );
} // end App

// export App
export default App;