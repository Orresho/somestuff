import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './bootstrap';
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById('root');
ReactDOM.render(<Bootstrap />, rootElement);
registerServiceWorker();
