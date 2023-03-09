import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import {HashRouter} from 'react-router-dom';
import {store} from './store/store';
import {RoutesComponent} from './pages/main/routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <RoutesComponent/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
