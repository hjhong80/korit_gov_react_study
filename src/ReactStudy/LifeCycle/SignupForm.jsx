import React, { useEffect, useState } from 'react';

/*

이메일 입력에 유효성 검사 실시
골뱅이 포함 여부에 따라서 없으면 에러 메세지로 "이메일 형식에 맞게 입력해주세요" 출력
비밀번호 인풋에 입력이 될때 유효성 검사 실시
8자리 이상인지 여부에 따라서 아니면 에러 메세지로 "비밀번호는 8자리 이상이어야 합니다" 출력
유효성 검사에 문제가 없으며 버튼 활성화, 문제가 하나라도 있으면 비활성화
가입하기 버튼을 누르면 alert("가입되었습니다") 출력

*/

function SignupForm() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        console.log(formValues);
        console.log(error);
        setIsDisabled(true);

        const newErrors = {};

        if (!formValues.email.includes('@') && formValues.email.length > 0) {
            newErrors.email = '이메일 형식이 올바르지 않습니다.';
        }
        if (formValues.password.length < 8 && formValues.password.length > 0) {
            newErrors.password = '비밀번호는 8자리 이상이어야 합니다.';
        }
        setError(newErrors);

        if (
            Object.keys(newErrors).length === 0 &&
            formValues.email &&
            formValues.password
        ) {
            setIsDisabled(false);
        }
    }, [formValues]);

    return (
        <div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            email: e.target.value,
                        });
                    }}
                />
                {error.email && <p>{error.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            password: e.target.value,
                        });
                    }}
                />
                {error.password && <p>{error.password}</p>}
            </div>
            <button
                disabled={isDisabled}
                onClick={() => alert('가입되었습니다')}>
                가입하기
            </button>
        </div>
    );
}

export default SignupForm;
