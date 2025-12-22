import React, { useEffect, useRef } from 'react';

function ReactHook08() {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef.current);
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default ReactHook08;
