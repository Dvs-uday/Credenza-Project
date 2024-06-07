import React from 'react';
import './Feature.css';

const Feature = ({ title, description, image }) => {
  return (
    <section className="feature">
      <img src={image} alt={title} className="feature-image" />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#!" className="read-more">Read more</a>
      </div>
    </section>
  );
};

export default Feature;
