// src/ContentContext.js
import React, { createContext, useState, useContext } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    homeTitle: 'Welcome to Our Website',
    aboutDescription: 'Learn more about our mission and team.',
    eventsDescription: 'Stay tuned for exciting events!',
    academicsDescription: 'Explore the latest academic programs.',
  });

  const updateContent = (newContent) => {
    setContent((prevContent) => ({ ...prevContent, ...newContent }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};
