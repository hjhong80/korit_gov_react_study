import { css } from '@emotion/react';

export const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
`;

export const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
`;

export const box3 = (isWide) => css`
    width: ${isWide ? '300px' : '100px'};
    height: 100px;
    background-color: green;
    transition: all 0.2s ease-in-out;
`;
