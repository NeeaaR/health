import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../../static/css/index.css'
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
)