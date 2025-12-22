import React, { useState } from 'react';

function Render() {
    console.log('Render 컴포넌트 렌더링');
    const [count, setCount] = useState(0);

    const onClickHandler = () => {
        setCount(count + 1);
    };

    // 렌더링이라는 것은 해당 컴포넌트 내용물(상태)이 새로운 상태값으로 교체되어 다시 보여지게 되는것을 의미

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClickHandler}>+1</button>
        </div>
    );
}

export default Render;
