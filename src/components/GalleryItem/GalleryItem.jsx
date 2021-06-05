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

    // console log to see what isHidden
    console.log(isHidden);

    return (
        <div className="galleryItem-container">
                { isHidden ? (
                    <div onClick={() => setIsHidden(false)}>
                        <p>{item.description}</p>
                    </div>
                ) : (
                    <div onClick={() => setIsHidden(true)}>
                        <img src={item.path} />
                    </div>
                )}   
                
            <div>
                <button onClick={handleLikes}>Like Photo</button>
                <p>{item.likes} People Like This</p> 
            </div>
        </div>    
    )
} // end GalleryItem

// export GalleryItem
export default GalleryItem;