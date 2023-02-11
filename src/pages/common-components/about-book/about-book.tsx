import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {AboutBookContainer, AboutBookText, AboutBookTop} from './styles';

export const AboutBook = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);

    return (
    <AboutBookContainer>
        <AboutBookTop>
            <LabelText variantText={ isMobileView || isLaptopView  ? 'medium18' : 'medium16Bold'}>О книге</LabelText>
        </AboutBookTop>
        <AboutBookText>
            <LabelText  variantText={isMobileView ? 'smallNorm' : 'medium16LH24'}>
                Алгоритмы  — это всего лишь пошаговые алгоритмы решения задач, и  большинство таких задач уже были кем-то  решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с  доказательствами и  обоснованиями, но хотите ли  вы  тратить на  это свое время?
                <br/>
                <br/>
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы  это веселое и увлекательное занятие.
            </LabelText>
        </AboutBookText>
    </AboutBookContainer>
)
}

