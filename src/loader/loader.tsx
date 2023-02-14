import React from 'react';
import {LoaderContainer} from './styles';
import loader from '../pages/images/loader.svg';

export const Loader = () =>

    (
        <LoaderContainer >
            <img src={loader} alt='' data-test-id='loader' />

        </LoaderContainer>
    )

