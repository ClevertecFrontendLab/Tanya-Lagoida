import styled, { css } from 'styled-components';

export const labelVariants = {
    small: css`
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0.1px;
    `,
    smallLS: css`
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0.2px;
    `,
    smallBold: css`
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0;
    `,
    small400: css`
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0;
    `,
    smallNorm: css`
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.2px;
    `,
    medium14Bold: css`
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0.1px;
    `,
    medium14: css`
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.1px;
    `,
    medium16: css`
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.1px;
    `,
    medium16LH24: css`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.1px;
    `,
    medium16LS: css`
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.2px;
    `,
    medium18: css`
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.2px;
    `,
    medium18LS: css`
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.1px;
    `,
    large: css`
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0.1px;
    `,
    medium14Norm: css`
      letter-spacing: 0.1px;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    `,
    large22: css`
        letter-spacing: 0.1px;
        font-size: 22px;
        font-weight: 700;
        line-height: 32px;
    `,
    medium16Bold: css`
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.1px;
    `,
    large22LH: css`
        letter-spacing: 0;
        font-size: 22px;
        font-weight: 700;
        line-height: 32px;
    `,
    large24: css`
        letter-spacing: 0.1px;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
    `,
    medium15: css`
        letter-spacing: 0.1px;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
    `,
    medium15LH: css`
        letter-spacing: 0.1px;
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
    `,
    small500: css`
        letter-spacing: 0.2px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
    `,
    small500LS: css`
        letter-spacing: 0.2px;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
    `,

};

type LabelTextType = {
    variantText: keyof typeof labelVariants,
};

export const LabelText = styled.span`
  ${(props: LabelTextType) => labelVariants[props.variantText]
}`









