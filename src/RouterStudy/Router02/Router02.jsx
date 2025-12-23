import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Page1() {
    return (
        <>
            <div>
                <h1>Page</h1>
                <Routes>
                    <Route path="/page1" element={<h1>페이지 1 입니다.</h1>} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
            </div>
        </>
    );
}

function Page2() {
    return (
        <>
            <div>
                <h1>페이지 2 입니다.</h1>
            </div>
        </>
    );
}

function Router02() {
    return (
        <div>
            <header>
                <Link to={'/page/page1'}>page1</Link>
                <Link to={'/page/page2'}>page2</Link>
                <Link to={'/name/name1'}>name1</Link>
                <Link to={'/name/name2'}>name2</Link>
            </header>
            <Routes>
                <Route path="/page/*" element={<Page1 />}></Route>
                <Route
                    path="/name/*"
                    element={
                        <Routes>
                            <Route path="/name1" element={<h1>이동윤</h1>} />
                            <Route path="/name2" element={<h1>삼동윤</h1>} />
                        </Routes>
                    }
                />
            </Routes>
        </div>
    );
}

export default Router02;
