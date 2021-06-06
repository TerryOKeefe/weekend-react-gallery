// import axios to use axios.put
import axios from 'axios';
// import useState for conditional rendering
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

    // console log to see what isHidden
    console.log(isHidden);

    return (
        <div className="galleryItem-container">
                {/* Conditional rendering */}
                { isHidden ? (
                    // if isHidden is true display description 
                    <div onClick={() => setIsHidden(false)}>
                        <p>{item.description}</p>
                    </div>
                ) : (
                     /*
                        isHidden is default false displaying the images on load
                        clicking on image sets isHidden to true
                        thus description will appear
                     */
                    <div onClick={() => setIsHidden(true)}>
                        <img src={item.path} />
                    </div>
                )}   
                
            <div>
                {/*  like button and p tag to show below each image*/}
                <button className="btn btn-info btn-sm" 
                    onClick={handleLikes}>Like Photo</button>
                <p>{item.likes} People Like This</p> 
            </div>
        </div>    
    )
} // end GalleryItem

// export GalleryItem
export default GalleryItem;