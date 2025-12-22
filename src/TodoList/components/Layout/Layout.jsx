/** @jsxImportSource @emotion/react */
import Header from '../Header/Header';
import * as s from './styles';

import React from 'react';

function Layout({ children }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <Header></Header>
                {children}
            </div>
        </div>
    );
}

export default Layout;
