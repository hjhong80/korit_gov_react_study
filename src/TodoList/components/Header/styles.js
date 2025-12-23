import { css } from '@emotion/react';

export const container = css`
    width: 100%;
    height: 40px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`;

export const searchInput = css`
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 5px 15px;
`;

export const filterContainer = css`
    padding: 8px 0px;
`;
