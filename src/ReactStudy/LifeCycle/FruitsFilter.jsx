import React, { useEffect, useState } from 'react';

function FruitsFilter() {
    const fruits = [
        'Apple',
        'Banana',
        'Cherry',
        'Grape',
        'Orange',
        'Strawberry',
        'Watermelon',
    ];

    const [result, setResult] = useState(fruits);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const newResult = fruits.filter((fruit) =>
            fruit.toLowerCase().includes(inputValue.toLowerCase())
        );
        setResult(newResult);

        console.log('마운트 됨');
        return () => {
            console.log('언마운트 됨');
        };
    }, [inputValue]);

    return (
        <div>
            <input
                type=""
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                placeholder="과일 이름을 입력하세요"
            />
            <ul>
                {result.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitsFilter;
