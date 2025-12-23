import { css } from '@emotion/react';

export const container = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const listContainer = css`
    flex-grow: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;

    & > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 422px;
        overflow: auto;

        & > li {
            position: relative;
            display: flex;
            padding: 10px 15px;
            border-bottom: 1px solid #dbdbdb;
            box-sizing: border-box;
            align-items: center;
            justify-content: space-between;

            & > div {
                display: flex;
                align-items: center;
            }

            & > div > input[type='checkbox'] {
                display: none;
                padding: 0;
                margin: 0;

                & + label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    border-radius: 50%;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #dbdbdb;
                    box-sizing: border-box;
                }

                &:checked + label::after {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 8px;
                    background-color: #7744ff;
                }
            }
        }
    }
`;

export const trashBoxContainer = css`
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    font-size: 18px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #ee1111;
        color: white;
    }
`;

export const todoInputContainer = css`
    margin-top: 8px;
    height: 40px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;

    & > input {
        border: none;
        outline: none;
        box-sizing: border-box;
        padding: 5px 15px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`;
