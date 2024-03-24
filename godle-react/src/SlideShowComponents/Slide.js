import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideCard from './SlideCard';

const SlideShow = () => {
    function importAll(r) {
        let images = {};
        r.keys().forEach((key) => {
            // Extract filename from the full path
            const filename = key.replace(/^.*[\\/]/, ''); // Regex to get the filename from path
            // Remove file extension
            const nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
            images[key] = {
                filename: nameWithoutExtension,
                path: key // Keeping the full path if needed
            };
        });
        return images;
    }
    
    const imagesObject = importAll(require.context('../../public/Images', false, /\.(png|jpe?g|svg)$/));
    
    // Convert the object values into an array of filenames
    const imagesArray = Object.values(imagesObject);
    const filteredImagesArray = imagesArray.filter(image => image.filename !== "deityProfileBackground" && image.filename !== "loading" && image.filename !== "cardBack");

    return (
        <div>
            <Slide 
                autoplay={true} // Enable autoplay
                easing={"linear"}
                slidesToScroll={1}
                slidesToShow={8}
                indicators={true}
                pauseOnHover={true}
                infinite={true} // Enable infinite looping
                arrows={false}
                transitionDuration={3000}
                duration={0}
                >
                {/* Map over the array of filenames */}
                {filteredImagesArray.map((image, index) => (
                    <SlideCard key={index} image={"./Images/" + image.path} name={image.filename} />
                ))}
            </Slide>
        </div>
    );
};

export default SlideShow;
