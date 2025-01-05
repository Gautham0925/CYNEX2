import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContentProvider } from './ContentContext';

ReactDOM.render(
  <ContentProvider>
    <App />
  </ContentProvider>,
  document.getElementById('root')
);
