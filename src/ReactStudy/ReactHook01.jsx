import React, { useState } from 'react';

/*

    state : 컴포넌트가 가질 수 있는 상태를 의미
    state를 이용하여 컴포넌트가 렌더링 될때 데이터를 보유하고,
    이 데이터를 업데이트하여 화면을 다시 렌더링 할 수 있다.

*/

function ReactHook01() {
    const [count, setCount] = useState(0);

    const plusOnclickHandler = () => {
        setCount(count + 1);
    };

    const minusOnclickHandler = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={plusOnclickHandler}>+1</button>
            <button onClick={minusOnclickHandler}>-1</button>
        </div>
    );
}

export default ReactHook01;
