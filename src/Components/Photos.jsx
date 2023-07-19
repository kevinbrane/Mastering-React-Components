import React from 'react';
import data from '../mocks/data.json'

const Photos = () => {

    return (
        <div>
            <h2>Photos</h2>
            <ul>
                {
                    data.map(photos => (
                        <li key={photos.id}>
                            <h3> Id: {photos.id} Título:{photos.title}</h3>
                            <img src={photos.url} alt={photos.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Photos;
