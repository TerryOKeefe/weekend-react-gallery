import GalleryItems from '../GalleryItem/GalleryItem';

function GalleryList({ list, getGallery }) {
    return (
        <div>
            {list.map(item => {
                console.log('Item from map', item)
                return (
                    <GalleryItem />
                )
            })}
        </div>
    )
}

export default GalleryList;