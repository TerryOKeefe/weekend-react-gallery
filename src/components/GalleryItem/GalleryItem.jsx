// import GalleryItem CSS
import './GalleryItem.css';

// function to show images on DOM
function GalleryItem ({item, getGallery}) {
    return (
        <>
            <div className="galleryItem-container">
                <img src={item.path} />   
            </div>
            <button>Like</button>     
        </>    
    )
} // end GalleryItem

// export GalleryItem
export default GalleryItem;