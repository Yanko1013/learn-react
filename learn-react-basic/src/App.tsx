import { useState } from 'react';
import './App.css';
import Profile from './components/Profile.jsx'
import {TodoList} from './components/TodoList.jsx'

const cusMessage = {
  // message: {
    fir: 'hello',
    sec: '123',
  // }
}



const App = () => {
  // 哦原来 useState 第一个参数是count默认值
  const [count, setCount] = useState(0)
  // 每次渲染都触发了更新
  // state 改变，触发了重新渲染
  // 不用 handleClick 包裹就会无限渲染触发

  // 0 0 1 1 2 2
  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
    console.log(count);
  };

  /*
  0（第一次渲染）
  0（第二轮开始前打印）
  1（第二轮渲染）
  1（第三轮开始前打印）
  */
  return (
    <div>
      <button onClick={handleClick}>12321312</button>

      <Profile message={cusMessage}></Profile>
      <Profile message={cusMessage}></Profile>
      <Profile></Profile>

      <TodoList></TodoList>
    </div>
  );
};

export default App;
