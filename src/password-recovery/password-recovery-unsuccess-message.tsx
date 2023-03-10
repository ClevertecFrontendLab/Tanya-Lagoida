import React from 'react';

import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {AllForm, HeaderLogin} from '../authorization/styles';
import {MessageContainerBox} from '../authorization/errors-container-styles';

type TPropsType = {
    code: string
}
export const PasswordRecoveryUnSuccessMessage: React.FC<TPropsType> = ({code}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const handleNavigateToPasswordRecoveryPage = () => {
        if (code) {
            location.reload()
        }
    }

    return (
        <AllForm>
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <MessageContainerBox data-test-id='status-block'>
                <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>Данные не
                    сохранились</LabelText>
                <div>
                    <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Что-то
                        пошло не так. Попробуйте ещё раз</LabelText>
                </div>
                <ButtonComponent
                    onClick={handleNavigateToPasswordRecoveryPage}
                    height={isMobileView ? '40px' : '52px'}
                    width={isMobileView ? '256px' : '410px'}
                    status="inStock"><LabelText
                    variantText={isMobileView ? 'smallLS' : 'medium16LS'}>повторить</LabelText>
                </ButtonComponent>
            </MessageContainerBox>
        </AllForm>
    );
};