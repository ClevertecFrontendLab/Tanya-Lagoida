import React from 'react';

import {detailedInformationObject} from '../../constants/constants-book';
import {useMediaQuery} from '../../hooks/use-media-query';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {
    CommonContainer,
    DetailedInformationContainer,
    Table1, Table2,
    TablesContainer, TH1, TH2, TH3, TH4
} from './styles';

export const DetailedInformation = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);

    return (
        <DetailedInformationContainer>
            <CommonContainer>
                <LabelText variantText={isMobileView || isLaptopView ? 'medium18' : 'medium16Bold'}>Подробная
                    информация</LabelText>
            </CommonContainer>
            <TablesContainer>
                <Table1>
                    <tbody>
                    <tr>
                        <TH1><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Издательство</LabelText></TH1>
                        <TH2><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject['publishing office']}</LabelText></TH2>
                    </tr>
                    <tr>
                        <TH1><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Год
                            издания</LabelText></TH1>
                        <TH2><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject['the year of publishing']}</LabelText></TH2>
                    </tr>
                    <tr>
                        <TH1><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Страниц</LabelText></TH1>
                        <TH2><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.pagesAmount}</LabelText></TH2>
                    </tr>
                    <tr>
                        <TH1><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Переплёт</LabelText></TH1>
                        <TH2><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.binding}</LabelText></TH2>
                    </tr>
                    <tr>
                        <TH1><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Формат</LabelText></TH1>
                        <TH2><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.size}</LabelText></TH2>
                    </tr>
                    </tbody>
                </Table1>
                <Table2>
                    <tbody>
                    <tr>
                        <TH3><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Жанр</LabelText></TH3>
                        <TH4><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.genre}</LabelText></TH4>
                    </tr>
                    <tr>
                        <TH3><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Вес</LabelText></TH3>
                        <TH4><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.weight}</LabelText></TH4>
                    </tr>
                    <tr>
                        <TH3><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>ISBN</LabelText></TH3>
                        <TH4><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.ISBN}</LabelText></TH4>
                    </tr>
                    <tr>
                        <TH3><LabelText
                            variantText={isLaptopView ? 'medium16Bold' : isTabletView ? 'medium14Bold' : 'small500'}>Изготовитель</LabelText></TH3>
                        <TH4><LabelText
                            variantText={isLaptopView ? 'medium16LH24' : isTabletView ? 'medium14Norm' : 'smallNorm'}>{detailedInformationObject.manufacturer}</LabelText></TH4>
                    </tr>
                    </tbody>
                </Table2>
            </TablesContainer>

        </DetailedInformationContainer>);
};
