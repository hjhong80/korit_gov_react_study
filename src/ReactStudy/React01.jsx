import React from 'react';

function React01() {
    console.log('React01 렌더링 됨');
    const jsx1 = (
        <div>
            <p>JSX 입니다.</p>
        </div>
    );

    return <div>{jsx1}</div>;
}

export default React01;
