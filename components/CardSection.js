import React from 'react';
import './CardSection.css';

const Card = ({ title, description, date, category, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-meta">
        <span className="card-category">{category}</span>
        <span className="card-date">{date}</span>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card-container">
        <Card
          title="The rise of the sea"
          description="This is a description for card 3"
          date="Jan 3, 2020"
          category="CLIMATE I BEAUTY"
          imageUrl="https://images.pexels.com/photos/8111458/pexels-photo-8111458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="300px"
        />
        <Card
          title="Card 2"
          description="This is a description for card 2"
          date="Jan 2, 2020"
          category="Category 2"
          imageUrl="https://images.pexels.com/photos/9968523/pexels-photo-9968523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400px"
        />
      </div>
      <div className="card-container">
        <Card
          title="Card 3"
          description="This is a description for card 3"
          date="Jan 3, 2020"
          category="Category 3"
          imageUrl="https://images.pexels.com/photos/13304394/pexels-photo-13304394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="300px"
        />
        <Card
          title="Card 4"
          description="This is a description for card 4"
          date="Jan 4, 2020"
          category="Category 4"
          imageUrl="https://images.pexels.com/photos/13304394/pexels-photo-13304394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="300px"
        />
        <Card
          title="Card 5"
          description="This is a description for card 5"
          date="Jan 5, 2020"
          category="Category 5"
          imageUrl="https://images.pexels.com/photos/13304394/pexels-photo-13304394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="300px"
        />
      </div>
    </div>
  );
};

export default CardSection;
