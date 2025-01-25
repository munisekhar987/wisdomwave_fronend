import React from 'react';
 // Import the CSS file

const Banner = () => {

    const images = [
        '/icons/background/banner1.jpg',
        '/icons/background/banner2.jpg',
        '/icons/background/banner3.jpg',
        '/icons/background/banner4.jpg',
        // Add as many images as you want
    ];    

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    // Get random image URL
    const randomImage = getRandomImage();
    
    return (
        <div className='banner-image'>
            <img 
                src={randomImage} 
                alt="Random Image" 
                className="banner-image"  // Use the CSS class
            />
        </div>
    );
};

export default Banner;
