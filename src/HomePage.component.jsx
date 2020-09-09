import React from "react";
import "./HomePage.style.css";

export const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content-container">
          <h1 className="title">hats</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content-container">
          <h1 className="title">jackets</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content-container">
          <h1 className="title">sneakers</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content-container">
          <h1 className="title">women</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content-container">
          <h1 className="title">men</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div>
    </div>
  </div>
);
