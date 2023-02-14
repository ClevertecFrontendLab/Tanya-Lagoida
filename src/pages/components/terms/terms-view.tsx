import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {
    Caption,
    Container,
    Context,
    ContextContainer,
    Head,
    Paragraph,
    Subparagraph, Subsubparagraph
} from './styles';

export const TermsView = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <Container>
            <Caption>
                <LabelText variantText={isMobileView ? 'medium18LS' : 'large'}>Правила
                    пользования</LabelText>
            </Caption>
            <ContextContainer>
                <Context>
                    <Head>
                        {/* eslint-disable-next-line no-irregular-whitespace */}
                        <LabelText variantText="medium16Bold">1. Идейные соображения высшего
                            порядка, а также высокое качество позиционных исследований представляет
                            собой интересный эксперимент проверки экспериментов, поражающих по своей
                            масштабности и грандиозности.</LabelText>
                    </Head>
                    <Paragraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>1.1.
                            Задача организации, в особенности же социально-экономическое развитие
                            однозначно определяет каждого участника как способного принимать
                            собственные решения касаемо инновационных методов управления
                            процессами.</LabelText>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>1.2.
                            Не следует, однако, забывать, что разбавленное изрядной долей эмпатии,
                            рациональное мышление играет важную роль в формировании приоритизации
                            разума над эмоциями. Но некоторые особенности внутренней политики лишь
                            добавляют фракционных разногласий и преданы социально-демократической
                            анафеме.</LabelText>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>1.3.
                            Приятно, граждане, наблюдать, как элементы политического процесса,
                            превозмогая сложившуюся непростую экономическую ситуацию, объявлены
                            нарушающими общечеловеческие нормы этики и морали.</LabelText>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>1.4.
                            Но независимые государства, которые представляют собой яркий пример
                            континентально-европейского типа политической культуры, будут объединены
                            в целые кластеры себе подобных. </LabelText>
                    </Paragraph>
                </Context>
                <Context>
                    <Head>
                        {/* eslint-disable-next-line no-irregular-whitespace */}
                        <LabelText variantText="medium16Bold">2. С учётом сложившейся международной
                            обстановки, консультация с широким активом предоставляет широкие
                            возможности для приоритизации разума над эмоциями.</LabelText>
                    </Head>
                    <Paragraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>2.1.
                            Задача организации, в особенности же социально-экономическое развитие
                            однозначно определяет каждого участника как способного принимать
                            собственные решения касаемо инновационных методов управления
                            процессами. </LabelText>
                    </Paragraph>
                    <Subparagraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>2.1.1.
                            Не следует, однако, забывать, что разбавленное изрядной долей эмпатии,
                            рациональное мышление играет важную роль в формировании приоритизации
                            разума над эмоциями. Но некоторые особенности внутренней политики лишь
                            добавляют фракционных разногласий и преданы социально-демократической
                            анафеме.</LabelText>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>2.1.2.
                            Приятно, граждане, наблюдать, как элементы политического процесса,
                            превозмогая сложившуюся непростую экономическую ситуацию, объявлены
                            нарушающими общечеловеческие нормы этики и морали. </LabelText>
                    </Subparagraph>
                    <Paragraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>2.2.
                            Но независимые государства, которые представляют собой яркий пример
                            континентально-европейского типа политической культуры, будут объединены
                            в целые кластеры себе подобных. </LabelText>
                    </Paragraph>
                </Context>
                <Context>
                    <Head>
                        {/* eslint-disable-next-line no-irregular-whitespace */}
                        <LabelText variantText="medium16Bold">3. Принимая во внимание показатели
                            успешности, укрепление и развитие внутренней структуры требует от нас
                            анализа приоритизации разума над эмоциями.</LabelText>
                    </Head>
                    <Paragraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>3.1.
                            Задача организации, в особенности же социально-экономическое развитие
                            однозначно определяет каждого участника как способного принимать
                            собственные решения касаемо инновационных методов управления
                            процессами. </LabelText>
                    </Paragraph>
                    <Subparagraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>3.1.1.
                            Не следует, однако, забывать, что разбавленное изрядной долей эмпатии,
                            рациональное мышление играет важную роль в формировании приоритизации
                            разума над эмоциями. Но некоторые особенности внутренней политики лишь
                            добавляют фракционных разногласий и преданы социально-демократической
                            анафеме.</LabelText>
                            <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>
                                3.1.2. Приятно, граждане, наблюдать, как элементы политического
                                процесса, превозмогая сложившуюся непростую экономическую ситуацию,
                                объявлены нарушающими общечеловеческие нормы этики и
                                морали. </LabelText>
                    </Subparagraph>
                    <Paragraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>3.2.
                            Но независимые государства, которые представляют собой яркий пример
                            континентально-европейского типа политической культуры, будут объединены
                            в целые кластеры себе подобных. </LabelText>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>
                            3.3. Не следует, однако, забывать, что экономическая повестка
                            сегодняшнего дня требует анализа анализа существующих паттернов
                            поведения. </LabelText>
                    </Paragraph>
                    <Subparagraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>3.3.1.
                            А ещё представители современных социальных резервов набирают
                            популярность среди определенных слоев населения, а значит, должны быть
                            функционально разнесены на независимые элементы. </LabelText>
                    </Subparagraph>
                    <Subsubparagraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>3.3.1.1.
                            Стремящиеся вытеснить традиционное производство, нанотехнологии могут
                            быть объявлены нарушающими общечеловеческие нормы этики и морали.</LabelText>
                            <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>
                                3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии,
                                рациональное
                                мышление однозначно фиксирует необходимость новых предложений.
                                Являясь
                                всего лишь частью общей картины, независимые государства
                                представлены в
                                исключительно положительном свете.</LabelText>
                    </Subsubparagraph>
                    <Paragraph>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>3.4.
                            Повседневная практика показывает, что убеждённость некоторых оппонентов
                            требует от нас анализа распределения внутренних резервов и
                            ресурсов.</LabelText>
                    </Paragraph>
                </Context>
            </ContextContainer>
        </Container>
    );
};
