import React, { useEffect } from 'react';

function LifeCycle({ count }) {
    console.log('자식 컴포넌트 렌더링');

    useEffect(() => {
        console.log('마운트 됨', count);
        return () => {
            console.log('언마운트 됨', count);
        };
    }, []);
    return (
        <div>
            <h1>자식 컴포넌트</h1>
            <p>부모가 준 카운트 : {count}</p>
        </div>
    );
}

export default LifeCycle;
