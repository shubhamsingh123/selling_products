import React from "react";
import "./menu-item.style.css";

const MenuItem = ({ title, subtitle, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content-container">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle.toUpperCase()}</span>
    </div>
  </div>
);

export default MenuItem;
