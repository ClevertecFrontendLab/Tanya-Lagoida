import React from 'react';

import {Navigate, Route, Routes} from 'react-router-dom';
import {LoginToPersonalAccount} from '../../authorization/login-to-personal-account';
import {RegistrationContainer} from '../../registration/registration-container';
import {Layout} from '../components/layout/layout';
import {LayoutMainPage} from '../components/layout/layout-main-page';
import {Terms} from '../components/terms/terms';
import {BookPage} from '../components/book-card-page/book-page';
import {MainPage} from './main-page';
import {PasswordResetContainer} from '../../password-recovery/password-reset-container';
import {RootState, useAppSelector} from '../../store/store';

export const RoutesComponent = () => {
    const isAuth = useAppSelector((state: RootState) => state.userSlice.isAuth);

    return (
        <Routes>
            <Route path="/auth" element={<LoginToPersonalAccount/>}/>
            <Route path="/registration" element={<RegistrationContainer/>}/>
            <Route path="/forgot-pass" element={<PasswordResetContainer/>}/>

            <Route path="/" element={isAuth ? <Layout/> : <Navigate to="/auth" />}>
                <Route element={<LayoutMainPage/>}>
                    <Route path="/" element={<Navigate to="/books/all"/>}/>
                    <Route path="/books/:category" element={<MainPage/>}/>
                    <Route path="/terms" element={<Terms contentView="terms"/>}/>
                    <Route path="/contract"
                           element={<Terms contentView="contract"/>}/>
                </Route>
                <Route path="/books/:category/:bookId" element={<BookPage/>}/>
            </Route>
        </Routes>
    );
}




