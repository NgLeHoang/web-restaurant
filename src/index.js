import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
)

