import axios from 'axios';
import {useState} from 'react';
// import GalleryItem CSS
import './GalleryItem.css';

// function to show images on DOM
function GalleryItem ({item, getGallery}) {
    // useState variable isHidden to toggle description
    const [isHidden, setIsHidden] = useState(false);


    // handle like click to increase count
    const handleLikes = () => {
        // console log to see click fired
        console.log('Like button clicked!');
        
        // use axios to update like count
        axios.put(`/gallery/like/${item.id}`)
        .then( (response) => {
            // log the response
            console.log('Response in PUT', response);
            // GET gallery
            getGallery();
        })
        .catch( (error) => {
            // console log the error
            console.log('Error in PUT:', error);
        });
    } // end handleLikes

    // handle the image click
    const handleImage = () => {
        // console log to show imaged was clicked
        console.log('Clicked Image!');
       
    }

    return (
        <>
            <div className="galleryItem-container">
                <div>
                    <img src={item.path} onClick={(handleImage)}/>
                </div>
                    
                <div>
                    <p>{item.description}</p>
                </div>

            </div>
            <div>
                <button onClick={handleLikes}>Like</button>
                <p>{item.likes} People Like This</p> 
            </div>
        </>    
    )
} // end GalleryItem

// export GalleryItem
export default GalleryItem;