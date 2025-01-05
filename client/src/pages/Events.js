import React from 'react';
import './css/VerticalsGrid.css';

const events = [
  {
    title: "Group 1",
    items: [
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" },
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" }
    ],
  },
  {
    title: "Group 2",
    items: [
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" },
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" }
    ],
  },
  {
    title: "Group 3",
    items: [
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" },
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" }
    ],
  },
  {
    title: "Group 4",
    items: [
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" },
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" }
    ],
  },
  {
    title: "Group 5",
    items: [
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" },
      { name: "Administration", img: "https://via.placeholder.com/600x400" },
      { name: "Agriculture & Allied Sectors", img: "https://via.placeholder.com/600x400" },
      { name: "Data Management & Analysis", img: "https://via.placeholder.com/600x400" },
      { name: "Economics & Finance Cell", img: "https://via.placeholder.com/600x400" },
      { name: "Education", img: "https://via.placeholder.com/600x400" }
    ],
  },
];


const VerticalsGrid = () => {
  return (
    <div className="grid-container">
      {events.map((group, groupIndex) => (
        <div key={groupIndex} className="group-container">
          <h2 className="group-title">{group.title}</h2>
          <div className="group-grid">
            {group.items.map((item, itemIndex) => (
              <div key={itemIndex} className="grid-item">
                <div className="content">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalsGrid;
