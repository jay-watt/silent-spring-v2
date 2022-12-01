import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';

import store from './slices'

const container = document.getElementById('app');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(

    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
})
