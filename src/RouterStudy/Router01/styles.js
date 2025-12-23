import { css } from '@emotion/react';

export const layout = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const header = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    background-color: cadetblue;
`;

export const main = (color) => css`
    width: 100%;
    flex-grow: 1;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;

export const countBox = css`
    display: flex;
`;
