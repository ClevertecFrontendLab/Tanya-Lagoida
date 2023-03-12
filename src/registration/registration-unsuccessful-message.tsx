import React from 'react';

import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {AllForm, HeaderLogin} from '../authorization/styles';
import {MessageContainerBox} from '../authorization/errors-container-styles';

type TPropsTypes = {
    registration: any
    setIsSuccessMessage?: any
    setIsUnSuccessMessage?: any
    setIsUnSuccessMessageSameLogin?: any
    state?: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null } | undefined
    error: any
}

export const RegistrationUnsuccessfulMessage: React.FC<TPropsTypes> = ({
    state,
    registration,
    setIsUnSuccessMessage,
    setIsUnSuccessMessageSameLogin,
    setIsSuccessMessage,
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const setMessage = (error: any) => {
        if (error?.status === 400) {
            setIsUnSuccessMessageSameLogin(true);
        } else setIsUnSuccessMessage(true);
    }

    const onSubmit = async () => {

        try {
            await registration(state).unwrap();
            setIsSuccessMessage(true);

        } catch (error) {
            console.log(error);
            setMessage(error)
        }
    };

    return (
        <AllForm data-test-id="auth">

            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <MessageContainerBox data-test-id='status-block'>
                <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>Данные не
                    сохранились</LabelText>
                <div>
                    <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Что-то
                        пошло не так и ваша регистрация не завершилась. Попробуйте ещё
                        раз</LabelText>
                </div>
                <ButtonComponent
                    onClick={onSubmit}
                    height={isMobileView ? '40px' : '52px'}
                    width={isMobileView ? '256px' : '410px'}
                    status="inStock"><LabelText
                    variantText={isMobileView ? 'smallLS' : 'medium16LS'}>повторить</LabelText>
                </ButtonComponent>
            </MessageContainerBox>
        </AllForm>
    );
};
