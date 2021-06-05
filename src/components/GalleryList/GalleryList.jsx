// import GalleryItem
import GalleryItem from '../GalleryItem/GalleryItem';
// import GalleryList css
import './GalleryList.css';

// function to loop through images
function GalleryList({ list, getGallery }) {
    return (
        <div className="gallerylist-container">
            {list.map(item => {
                console.log('Item from map', item)
                return (
                    <GalleryItem getGallery={getGallery} key={item.id} item={item}/>
                )
            })}
        </div>
    )
} // end GalleryList

// export GalleryList
export default GalleryList;