import React from 'react';

const Image = props => (
    <li className="img-card">
        <img src={props.url} alt="" />
    </li>
);

export default Image;