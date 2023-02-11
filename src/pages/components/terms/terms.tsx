import React from 'react';

import {ContractView} from './contract-view';
import {TermsView} from './terms-view';


const contentViewComponents = {
    terms: TermsView,
    contract: ContractView
}

type TProps = {contentView: keyof typeof contentViewComponents};
export const Terms: React.FC<TProps> = ({contentView}) => {
    const Component = contentViewComponents[contentView];

    return <Component />
};




