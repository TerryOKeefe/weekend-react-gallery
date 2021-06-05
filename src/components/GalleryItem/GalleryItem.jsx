// import GalleryItem CSS
import axios from 'axios';
import './GalleryItem.css';

// function to show images on DOM
function GalleryItem ({item, getGallery}) {


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



    return (
        <>
            <div className="galleryItem-container">
                <img src={item.path} />   
            </div>
            <button onClick={handleLikes}>Like</button>
            <p>{item.likes} Likes</p>     
        </>    
    )
} // end GalleryItem

// export GalleryItem
export default GalleryItem;