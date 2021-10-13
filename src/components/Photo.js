import React from 'react';

const Photo = ({ id, server, secret, title }) => {
  return(
    <li>
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </li>
    )
};

export default Photo;