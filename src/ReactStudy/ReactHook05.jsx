import React, { useState } from 'react';

function ReactHook05() {
    const inputValueEmpty = {
        name: '',
        age: '',
        address: '',
    };
    const [inputValue, setInputValue] = useState(inputValueEmpty);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        // 함수형 업데이트
        // prev => 함수 호출 이전의 가장 최신의 값을 보장함
        // set 함수의 인자로 함수를 입력하였으므로, React에서 판단하여 prev에 최신 상태의 값이 자동으로 입력된다
        setInputValue((prev) => {
            return {
                // 이전 상태 객체를 그대로 복사해서 불변성을 지킨다.
                ...prev,
                [name]: value,
            };
        });
        console.log(name, value);
    };

    const onClickHandler = () => {
        setInputValue(inputValueEmpty);
    };

    return (
        <div>
            <h1>이름: {inputValue.name}</h1>
            <h1>나이: {inputValue.age}</h1>
            <h1>주소: {inputValue.address}</h1>
            <input
                name="name"
                value={inputValue.name}
                type="text"
                onChange={onChangeHandler}
            />
            <input
                name="age"
                value={inputValue.value}
                type="text"
                onChange={onChangeHandler}
            />
            <input
                name="address"
                value={inputValue.address}
                type="text"
                onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>리셋</button>
        </div>
    );
}

export default ReactHook05;
