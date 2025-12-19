import React from 'react';

function CountButton({ onClickHandler, text }) {
    console.log('CountButton 렌더링 됨');
    return <button onClick={onClickHandler}>{text}</button>;
}

export default CountButton;
