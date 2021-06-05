TODO:

-- Setup --
    [x] - Add six photos into public/images
    [x] - Modify gallery.data.js for each photo with `id`, `title`, `description`, and `path`
        [x] - Each `id` should be a unique number (e.g. 1, 2, 3 ...)
    [x] - Install `nodemon` with `npm install nodemon --global`

-- Base Mode --
    [x] - Need three (3) components
        [x] - `App` - represents the overall application or site 
        [x] - `GalleryList` - represents the gallery of images. With components, we could reuse this component in different applications
        [ ] - `GalleryItem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.
    [x] - Use `axios` to retrieve (`GET`) data from `/gallery` and store it in `App.jsx`
    [x] - Create a new (`component`) for the `GalleryList`
        [x] - Pass it the gallery data stored in `App.jsx` via `props`
            [x] - Loop over the list of gallery data with .map
            [x] - Make `GalleryItems` component
    [x] - Create a new (`component`) called `GalleryItem.jsx`
        [x] - Pass it the individual gallery item via `props`
            [x] - Update the `GalleryList` to use this component to display an image
            [ ] - Swap the image with the description on `click`
            [ ] - Use `conditional rendering`
            [x] - Display the number of likes for each item
                [x] - Create a (`like`) button
            [x] - When the (`like`) button is clicked, use `axios` to update (`PUT`) the like count `/gallery/like/:id`
            [x] - Update the gallery each time a (`like`) button is clicked

-- WireFrame --
    [x] - My Gallery Header
    [x] - Six photos displayed
        [x] - Box? Inline? Flex?
        [x] - (`Like`) button displayed below each image
        [x] - Like `count` displayed below (`like`) button 