import React from 'react';
import './TopSectionImg.css';

const TopSectionImg = () => {
  return (
    <div className="top-section-img">
        <h2>
        This website uses cookies to give you the best user experience. If you
        continue browsing you are giving your consent for acceptance of the
        aforementioned cookies and the acceptance of our cookie policy.
      </h2>
      <div className="image-grid">
        <div className="img-container image-card">
          <img
            src="https://images.pexels.com/photos/8193586/pexels-photo-8193586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 1"
            className="small-image"
          />
          <div className="image-description">
            <h3 className="image-title">No more waste</h3>
            <p className="image-text">Read the latest about plastic waste</p>
            <p className="image-date">2022-12-21</p>
          </div>
        </div>
        <div className="img-container image-card">
          <img
            src="https://images.pexels.com/photos/8193586/pexels-photo-8193586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 2"
            className="small-image"
          />
          <div className="image-description">
            <h3 className="image-title">Title 2</h3>
            <p className="image-text">Description 2</p>
            <p className="image-date">Date 2</p>
          </div>
        </div>
        <div className="img-container image-card">
          <img
            src="https://images.pexels.com/photos/8193586/pexels-photo-8193586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 3"
            className="small-image"
          />
          <div className="image-description">
            <h3 className="image-title">Title 3</h3>
            <p className="image-text">Description 3</p>
            <p className="image-date">Date 3</p>
          </div>
        </div>
        <div className="img-container image-card">
          <img
            src="https://images.pexels.com/photos/8193586/pexels-photo-8193586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 4"
            className="small-image"
          />
          <div className="image-description">
            <h3 className="image-title">Title 4</h3>
            <p className="image-text">Description 4</p>
            <p className="image-date">Date 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSectionImg;
