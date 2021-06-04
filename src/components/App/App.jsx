import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [gallery, setGallery] = useState([]);

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
        // setGallery to the response that comes in
        setGallery(response.data)
        // console log the data
        console.log(gallery);
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
        <img src="images/twinkie_dog.jpg"/>
      </div>
    );
}

export default App;
