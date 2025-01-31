// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js'; // Ensure this path is correct
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Pass the store as a prop */}
      <App />
    </Provider>
  </StrictMode>
);
