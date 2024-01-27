import React from 'react';
// import ReactDOM from 'react-dom'; // For react 17
// For react 18: 
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';
import { AdminPortal } from '@frontegg/react'

const contextOptions = {
  baseUrl: 'https://app-03wldufq7i57.frontegg.com',
  clientId: '06492db4-deda-40ea-bbb5-dc0471408fbe'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


// For react 18: 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
const handleClick = () => {
  AdminPortal.show();
};

<button onClick={handleClick}>Settings</button>