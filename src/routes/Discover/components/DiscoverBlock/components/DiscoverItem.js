import React from 'react';
import '../styles/_discover-item.scss';

export default function DiscoverItem({ images, name }) {
  const imageUrl = images && images.length > 0 ? images[0]?.url : 'URL_GAMBAR_DEFAULT';
  // console.log('imageUrl:', imageUrl);

  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${imageUrl})` }}
        alt={name}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}