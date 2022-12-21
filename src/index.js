import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


// Inside the render function we are not limited to 
// rendering a single App component 
// We can of course have a div and other components 
// inside it.
root.render(
  // The App component will fit in as a children prop inside the Provider.
  <Provider>
    <App />
  </Provider>
);