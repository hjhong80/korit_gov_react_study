/** @jsxImportSource @emotion/react */
import Header from '../Header/Header';
import * as s from './styles';

import React from 'react';

function Layout({ children, setSearchKeyword, filterMode, setFilterMode }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <Header
                    filterMode={filterMode}
                    setFilterMode={setFilterMode}
                    setSearchKeyword={setSearchKeyword}></Header>
                {children}
            </div>
        </div>
    );
}

export default Layout;
