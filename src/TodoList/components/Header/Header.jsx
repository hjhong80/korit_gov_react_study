/** @jsxImportSource @emotion/react */
import { IoSearch } from 'react-icons/io5';
import * as s from './styles';

function Header({ setSearchKeyword, filterMode, setFilterMode }) {
    const searchInputOnChangeHandler = (e) => {
        setSearchKeyword(e.target.value);
        // setSearchValue(e.target.value);
    };

    const filterModeOnChangeHandler = (e) => {
        setFilterMode(e.target.id);
    };

    return (
        <>
            <div css={s.container}>
                <input
                    css={s.searchInput}
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    onChange={searchInputOnChangeHandler}
                />
            </div>
            <div css={s.filterContainer}>
                <input
                    type="radio"
                    id="all"
                    name="filter"
                    checked={filterMode === 'all'}
                    onChange={filterModeOnChangeHandler}
                />
                <label htmlFor="all">전체</label>
                <input
                    type="radio"
                    id="complete"
                    name="filter"
                    checked={filterMode === 'complete'}
                    onChange={filterModeOnChangeHandler}
                />
                <label htmlFor="complete">완료</label>
                <input
                    type="radio"
                    id="incomplete"
                    name="filter"
                    checked={filterMode === 'incomplete'}
                    onChange={filterModeOnChangeHandler}></input>
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
    );
}

export default Header;
