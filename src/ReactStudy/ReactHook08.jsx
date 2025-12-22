import React, { useEffect, useRef } from 'react';

// useRef() -> Dom 객체에 직접 접근하기 위해 사용하는 Hook
// document.selectQuery()와 유사한 기능 / 용법
// 값을 저장하되 값이 바뀌어도 재렌더링을 발생시키지 않는 상태
// (렌더링이 일어나지 않아서 UI 업데이트도 없다)
function ReactHook08() {
    const inputRef = useRef();
    const intervalValueRef = useRef();
    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();

        intervalValueRef.current = setInterval(() => {
            console.log("인터벌 테스트")
        }, 1000);
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default ReactHook08;
