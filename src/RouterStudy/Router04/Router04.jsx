import React, { useEffect } from 'react';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';

function Component1() {
    const { name } = useParams();
    return <h1>path parameter는 {decodeURI(name)}입니다</h1>;
}

function Component2() {
    // useSearchParams : 현재 search Params, params를 변경하는 함수 형태의 배열을 반환
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        // console.log(searchParams.entries);
        console.log(searchParams.get('name')); // 특정 키 값 하나를 가져 올 수 있다.
        console.log(searchParams.getAll('name')); // 같은 키의 이름으로 된 값을 배열 형태로 모두 가져올 수 있다.
    }, [searchParams]);

    const onClickHandler = () => {
        setSearchParams((prev) => {
            prev.set('address', 'busan');
            return prev;
        });
    };

    return (
        <>
            <div>
                <button onClick={onClickHandler}>
                    URI에 'address=busan' 추가/변경
                </button>
            </div>
        </>
    );
}

function Router04() {
    return (
        <div>
            <Routes>
                <Route path="/param1/:name" element={<Component1 />} />
                {/* :변수명 => path variable 형식으로 사용 가능 */}
                <Route path="/param2" element={<Component2 />} />
            </Routes>
        </div>
    );
}

export default Router04;
