import React,{ useEffect, useRef, useState } from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary';
import Stopwatch from './components/Stopwatch';
import DownloadBar from './components/DownloadBar';

function TODO({title, done}) {
  const [doneState, setDone] = useState(done);
  
  return(
    <div className={doneState?"todo done":"todo"} onClick={() => setDone(!doneState)}>
      {title}
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      done: false
    },
    {
      title: "get hold of react",
      done: false
    },
    {
      title: "sleep all day",
      done: true
    }
  ]);
  const [inputval, setInputval] = useState("");
  let inputRef = useRef(null);

  function addTodo() {
    if(inputval===""){
      alert("Empty input field! Enter a valid task!");
      return;
    }

    setTodos([...todos,{
      title: inputval,
      done: false
    }]);
    setInputval("");
  }

  function FocusInput(params) {
    inputRef.current.focus();
    addTodo();
  }

  useEffect(() => {

    window.addEventListener('keydown', () => {
      inputRef.current.focus();
    });
  },[])

  return (
    <>
      <section className='todoSection'>
        <h1>TODOS</h1>
        <div className='addtodo'>
          <input type="text" ref={inputRef} placeholder="new todo" value={inputval} onChange={(e) => setInputval(e.target.value)} onKeyDown={(e) => {e.key === "Enter"?addTodo():""}}/>
          <button onClick={FocusInput}>Add todo</button>
        </div>
        <div className='todoscontainer'>
          {todos.map((todo,i) => <TODO key={i} title={todo.title} done={todo.done}></TODO>)}
        </div>
      </section>
      <section className='colorSection'>
        <ErrorBoundary>
          <Card1/>
        </ErrorBoundary>
      </section>
      <section className='stopwatchSection'>
        <h1>Stopwatch</h1>
        <Stopwatch/>
      </section>
      <section className='downloadSection'>
        <DownloadBar/>
      </section>
    </>
  )
}

function Card1() {
  const[color, setColor] = useState(`rgb(0,0,0)`)
  // throw new Error("hello");
  let c1,c2,c3;
  function changer(){
    c1 = Math.floor(Math.random()*255);
    c2 = Math.floor(Math.random()*255);
    c3 = Math.floor(Math.random()*255);
    setColor(`rgb(${c1},${c2},${c3})`);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changer();
    },10000)

    return () => clearInterval(interval);
  },[])

  return (
    <div className='card' onClick={changer} style={{backgroundColor: color}}></div>
  )
}

export default App