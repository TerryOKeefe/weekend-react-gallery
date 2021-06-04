TODO:

-- Setup --
    [x] - Add six photos into public/images
    [x] - Modify gallery.data.js for each photo with `id`, `title`, `description`, and `path`
        [x] - Each `id` should be a unique number (e.g. 1, 2, 3 ...)
    [x] - Install `nodemon` with `npm install nodemon --global`

-- Base Mode --
    [ ] - Need three (3) components
        [x] - `App` - represents the overall application or site 
        [ ] - `GalleryList` - represents the gallery of images. With components, we could reuse this component in different applications
        [ ] - `Galleryitem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.
    [ ] - Use `axios` to retrieve (`GET`) data from `/gallery` and store it in `App.jsx`
    [ ] - Create a new (`component`) for the `GalleryList`
        [ ] - Pass it the gallery data stored in `App.jsx` via `props`
            [ ] - Loop over the list of gallery data
            [ ] - Make `GalleryItems` component
    [ ] - Create a new (`component`) called `GalleryItem.jsx`
        [ ] - Pass it the individual gallery item via `props`
            [ ] - Update the `GalleryList` to use this component to display an image
            [ ] - Swap the image with the description on `click`
            [ ] - Use `conditional rendering`
            [ ] - Display the number of likes for each item
                [ ] - Create a (`like`) button
            [ ] - When the (`like`) button is clicked, use `axios` to update (`PUT`) the like count `/gallery/like/:id`
            [ ] - Update the gallery each time a (`like`) button is clicked

-- WireFrame --
    [ ] - My Gallery Header
    [ ] - Six photos displayed
        [ ] - Box? Inline? Flex?
        [ ] - (`Like`) button displayed below each image
        [ ] - Like `count` displayed below (`like`) button 