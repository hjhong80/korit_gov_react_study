import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Emotion1 from './Emotion/Emotion1';
import FruitsFilter from './ReactStudy/LifeCycle/FruitsFilter';
import LifeCycleApp from './ReactStudy/LifeCycle/LifeCycleApp';
import Render from './ReactStudy/LifeCycle/Render';
import SignupForm from './ReactStudy/LifeCycle/SignupForm';
import React01 from './ReactStudy/React01';
import React02 from './ReactStudy/React02';
import React03 from './ReactStudy/React03';
import React04 from './ReactStudy/React04';
import ReactHook01 from './ReactStudy/ReactHook01';
import CountState from './ReactStudy/ReactHook02/CountState';
import ReactHook03 from './ReactStudy/ReactHook03';
import ReactHook04 from './ReactStudy/ReactHook04';
import ReactHook05 from './ReactStudy/ReactHook05';
import ReactHook06 from './ReactStudy/ReactHook06';
import ReactHook07 from './ReactStudy/ReactHook07';
import ReactHook08 from './ReactStudy/ReactHook08';
import ReactHook09 from './ReactStudy/ReactHook09';
import Index from './TodoList/pages/Index';
import Router01 from './RouterStudy/Router01/Router01';
import Router02 from './RouterStudy/Router02/Router02';
import Router03 from './RouterStudy/Router03/Router03';
import Router04 from './RouterStudy/Router04/Router04';

function App() {
    // const name = '이동윤';
    // const age = 27;

    return (
        <>
            <BrowserRouter>
                {/* <React01 /> */}
                {/* <React02 /> */}
                {/* <React03
                name={name}
                age={age}
                address={'부산광역시'}
                tel={'010-1234-5678'}
            /> */}
                {/* <React04>
                <h1>자식요소</h1>
            </React04> */}
                {/* <ReactHook01 /> */}
                {/* <CountState /> */}
                {/* <ReactHook03 /> */}
                {/* <ReactHook04 /> */}
                {/* <ReactHook05 /> */}
                {/* <ReactHook06 /> */}
                {/* <ReactHook07 /> */}
                {/* <Render /> */}
                {/* <LifeCycleApp /> */}
                {/* <FruitsFilter /> */}
                {/* <SignupForm /> */}
                {/* <ReactHook08 /> */}
                {/* <Emotion1 /> */}
                {/* <ReactHook09 /> */}
                {/* <Index /> */}
                {/* <Router01 /> */}
                {/* <Router02 /> */}
                {/* <Router03 /> */}
                <Router04 />
            </BrowserRouter>
            {/* Browser Router Dom - BrowserRouter 태그로 감싸진 컴포넌트들만
            Routes, Route, Link, useNavigation 같은 라우터 기능을 쓸 수 있다 */}
        </>
    );
}

export default App;
