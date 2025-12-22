import React, { useEffect, useState } from 'react';
const API_URL = 'https://jsonplaceholder.typicode.com/users/';

function ReactHook09() {
    const [userList, setUserList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error('data를 불러오는데 실패하였습니다.');
            }
            const responseData = await response.json();
            setUserList(responseData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (isLoading) {
        return <div>불러오는중...</div>;
    }

    if (error) {
        return <div>에러 : {error}</div>;
    }

    return (
        <div>
            {userList ? (
                userList.map((user) => (
                    <li key={user.id}>
                        <div>
                            <p>이름:{user.name}</p>
                            <p>이메일:{user.email}</p>
                            <p>전화번호:{user.phone}</p>
                        </div>
                    </li>
                ))
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default ReactHook09;
