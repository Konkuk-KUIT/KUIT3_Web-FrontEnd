import React from "react";
import todoData from './todoData.json';
import Todo from "./Todo";

// 비구조화 할당을 사용한 경우에 해당함 ('(props)'로 작성하지 않고 '({title})'로 작성했음)
const Header = ({ title }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

const App = () => {
    const title = 'Todo List';

    // props를 통해 Header에다가 값 전달
    return (
        <>
            <Header title={title} />

            <div>실습</div>
            {todoData.todos.map((value, index) => (
                <Todo
                    key={value.id}
                    id={value.id}
                    task={value.task}
                    completed={value.completed}
                    priority={value.priority}
                />
            ))}

            <div>미션1: completed가 true인 값만 map으로 출력하기</div>

            {todoData.todos.map((value, index) => (
                value.completed ?
                    <Todo
                        key={value.id}
                        id={value.id}
                        task={value.task}
                        completed={value.completed}
                        priority={value.priority}
                    /> : null
            ))}

            <div>미션2: priority 5 이상인 값만 map으로 출력하기</div>
            
            {todoData.todos.map((value, index) => (
                value.priority >= 5 ?
                    <Todo
                        key={value.id}
                        id={value.id}
                        task={value.task}
                        completed={value.completed}
                        priority={value.priority}
                    /> : null
            ))}

        </>
    );
};

// 컴포넌트를 외부로 보내는 방법 1
export default App;

// 컴포넌트를 외부로 보내는 방법 2
// export { App };