import React from 'react';
import './styles/ResponsiveIframe.css'; // You can define CSS here or use inline styles

const ResponsiveIframe = ({ src, title }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
