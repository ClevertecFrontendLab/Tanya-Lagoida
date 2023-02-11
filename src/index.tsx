import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {BookCardPage} from './pages/components/book-card-page/book-card-page';
import {Layout} from './pages/components/layout/layout';
import {LayoutMainPage} from './pages/components/layout/layout-main-page';
import {Terms} from './pages/components/terms/terms';
import {MainPage} from './pages/main';

import './index.css';

import {store} from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route element={<LayoutMainPage/>}>
                            <Route path="/" element={<Navigate to="/books/all"/>}/>
                            {/*
                  <Route path='/' element={<MainPage />} />
                  */}
                            <Route path="/books/:category" element={<MainPage/>}/>
                            <Route path="/terms" element={<Terms contentView="terms"/>}/>
                            <Route path="/contract" element={<Terms contentView="contract"/>}/>
                        </Route>
                        <Route path="/books/:category/:bookId" element={<BookCardPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
