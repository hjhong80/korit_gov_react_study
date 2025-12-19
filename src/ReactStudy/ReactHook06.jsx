import React, { useState } from 'react';

/*

실습문제
input 하나를 만들고 입력된 이름과 일치하는 나이를 h2 tag 형식으로 출력하시오
만약 일치하는 이름이 없으면 "값 없음" 을 출력

*/

// 리액트는 일괄 처리
// 상태 업데이트 요청이 들어오면 모아서 한번에 처리
// set 함수가 즉시 실행이라면 작은 변화에도 컴포넌트를 다시 렌더링 하기 때문에 느려진다.
// changehandler에서 set 함수로 정해진 변수를 find 메소드에 가져다 쓴다면 의도하지 않은 결과 출력됨

function ReactHook06() {
    const [foundValue, setfoundValue] = useState('값 없음');
    const profiles = [
        { name: '박윤호', age: 25 },
        { name: '배찬익', age: 23 },
        { name: '정희원', age: 31 },
        { name: '남영석', age: 27 },
    ];

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const foundProfile = profiles.find((profile) => profile.name === value);
        setfoundValue(!foundProfile ? '값 없음' : foundProfile.age);
        // Optional Chaining : foundProfile?.age -> 
        // foundProfile이 존재한다면(undefined나 empty가 아니라면) age 속성을 출력해라!!
    };

    return (
        <div>
            <h2> 나이 : {foundValue} </h2>
            <input type="text" onChange={onChangeHandler} />
        </div>
    );
}

export default ReactHook06;
