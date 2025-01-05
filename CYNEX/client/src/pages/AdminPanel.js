import React, { useState } from 'react';

const AdminPanel = () => {
  // Initial content for each page
  const [content, setContent] = useState({
    homeTitle: 'Welcome to Our Website',
    aboutDescription: 'Learn more about our mission and team.',
    eventsDescription: 'Stay tuned for exciting events!',
    academicsDescription: 'Explore the latest academic programs.',
  });

  // Handle content change
  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  // Save the changes
  const saveContent = () => {
    // Here, you can save content to a backend or local storage if necessary
    console.log('Content saved:', content);
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <h2>Edit Home Page</h2>
      <div>
        <label>Home Title</label>
        <input
          type="text"
          name="homeTitle"
          value={content.homeTitle}
          onChange={handleContentChange}
        />
      </div>

      <h2>Edit About Page</h2>
      <div>
        <label>About Description</label>
        <textarea
          name="aboutDescription"
          value={content.aboutDescription}
          onChange={handleContentChange}
        />
      </div>

      <h2>Edit Events Page</h2>
      <div>
        <label>Events Description</label>
        <textarea
          name="eventsDescription"
          value={content.eventsDescription}
          onChange={handleContentChange}
        />
      </div>

      <h2>Edit Academics Page</h2>
      <div>
        <label>Academics Description</label>
        <textarea
          name="academicsDescription"
          value={content.academicsDescription}
          onChange={handleContentChange}
        />
      </div>

      <button onClick={saveContent}>Save Changes</button>

      <h3>Preview</h3>
      <div>
        <h2>{content.homeTitle}</h2>
        <p>{content.aboutDescription}</p>
        <p>{content.eventsDescription}</p>
        <p>{content.academicsDescription}</p>
      </div>
    </div>
  );
};

export default AdminPanel;
