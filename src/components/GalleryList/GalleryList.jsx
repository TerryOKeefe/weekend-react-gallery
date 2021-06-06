// import GalleryItem
import GalleryItem from '../GalleryItem/GalleryItem';
// import GalleryList css
import './GalleryList.css';

// function to loop through images
function GalleryList({ list, getGallery }) {
    // need to return photos with a .map to loop through
    return (
        <div className="gallerylist-container">
            {list.map(item => {

                {/* console log to see what is being passed through */}
                console.log('Item from map', item)

                {/* 
                    return the images that have been passed through w/ props
                    send each image through GalleryItem with props 
                */}
                return (
                    <GalleryItem getGallery={getGallery} key={item.id} item={item}/>
                )
            })}
        </div>
    )
} // end GalleryList

// export GalleryList
export default GalleryList;