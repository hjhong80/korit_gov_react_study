import React from 'react';

function React03({ name, age, ...other }) {
    console.log(other);
    return (
        <div>
            <div>이름 : {name}</div>
            <div>나이 : {age}</div>
        </div>
    );
}

export default React03;
