import React, { useEffect, useState } from 'react';

/* 

마운드  업데이트    언마운트
(생성   변경        소멸)
(선언               return)

*/

function ReactHook07() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [h1Name, setH1Name] = useState('');
    const [h1Age, setH1Age] = useState('');

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    };

    const ageOnChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const nameOnClickHandler = () => {
        setH1Name(name);
    };

    const ageOnClickHandler = () => {
        setH1Age(age);
    };

    // useEffect => 렌더링 이후 실행되는 사이드 이펙트(부수 효과)를 다루기 위한 훅

    useEffect(() => {
        // 렌더링 이후 실행할 작업
        console.log('마운트 됨', name, age);
        return () => {
            // clean-up 함수 : 컴포넌트가 언마운트 될 때 실행할 작업
            console.log('언마운트 됨', name, age);
        };
        // input 창에서 키를 누르면?
        // return 호출(언마운트 + 이전 상태 출력) -> 재렌더링(마운트 + 현재 상태 출력)
    }, [name, age]);
    // 의존성 배열 => 상태에 의존하게 해 상태값이 바뀔때 마다 이펙트 발생

    return (
        <div>
            <h1>{h1Name}</h1>
            <h1>{h1Age}</h1>
            <input type="text" onChange={nameOnChangeHandler} />
            <button onClick={nameOnClickHandler}>이름 확인</button>
            <input type="text" onChange={ageOnChangeHandler} />
            <button onClick={ageOnClickHandler}>나이 확인</button>
        </div>
    );
}

export default ReactHook07;
