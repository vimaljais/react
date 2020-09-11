import React, { Component } from 'react';
import Image from './image';

    const ImagesList = props => {
        const results = props.data;
        let images = results.map(img => <Image url={img.urls.small} key={img.id} />);
        return (
            <ul className="img-list">
                {images}
            </ul>
          );
    };

 
export default ImagesList;