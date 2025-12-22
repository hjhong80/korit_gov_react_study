/** @jsxImportSource @emotion/react */
import { IoSearch } from 'react-icons/io5';
import * as s from './styles';

import React from 'react';

function Header() {
    return (
        <>
            <div css={s.container}>
                <input
                    css={s.searchInput}
                    type="text"
                    placeholder="검색어를 입력해주세요"
                />
                <button css={s.searchButton}>
                    <IoSearch />
                </button>
            </div>
            <div css={s.filterContainer}>
                <input type="radio" id="all" name="filter" />
                <label htmlFor="all">전체</label>
                <input type="radio" id="complete" name="filter" />
                <label htmlFor="complete">완료</label>
                <input type="radio" id="incomplete" name="filter"></input>
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
    );
}

export default Header;
