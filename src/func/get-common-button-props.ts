export const getCommonButtonProps = (isMobileView: boolean) => ({
    type: 'submit',
    height: isMobileView ? '40px' : '52px',
    width: isMobileView ? '255px' : '416px',
    status: 'inStock',
} as const);
