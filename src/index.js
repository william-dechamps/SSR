import React from 'react';
import './index.css';
import App from './App';

import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

// Create *and* render a root with hydration.
const root = ReactDOMClient.hydrateRoot(container, <App tab="home" />);