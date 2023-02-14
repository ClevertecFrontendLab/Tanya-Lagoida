import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import iconFacebook from '../../images/icon-facebook.svg';
import iconInstagram from '../../images/icon-instagram.svg';
import iconLinkedin from '../../images/icon-linkedin.svg';
import iconVk from '../../images/icon-vk.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {FooterStyles, FooterText, IconsContainer, IconSocial,} from './styles';

export const Footer = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <FooterStyles>
            <FooterText>
                <LabelText variantText={isMobileView ? 'medium15' : 'medium16'} >
                    © 2020-2023 Cleverland. Все права защищены.
                </LabelText>
            </FooterText>
            <IconsContainer>
                <IconSocial src={iconFacebook} alt=""/>
                <IconSocial src={iconInstagram} alt=""/>
                <IconSocial src={iconVk} alt=""/>
                <IconSocial src={iconLinkedin} alt=""/>
            </IconsContainer>
        </FooterStyles>
    );
};

