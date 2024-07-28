import React from 'react';
import useFetch from './useFetch';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="photo-gallery">
      <h2>Photos</h2>
      <div className="photo-grid">
        {data.slice(0, 12).map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
