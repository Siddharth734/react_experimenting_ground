import React,{ useEffect, useState } from 'react'
import './App.css'
import ErrorBoundary from './errorBoundary';

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

  function addTodo() {
    if(inputval===""){
      alert("Empty input field! Enter a valid task!");
      return;
    }

    setTodos([...todos,{
      title: inputval,
      done: false
    }])
  }

  return (
    <>
      <main>
        <h1>TODOS</h1>
        <div className='addtodo'>
          <input type="text" placeholder="new todo" value={inputval} onChange={(e) => setInputval(e.target.value)}/>
          <button onClick={addTodo}>Add todo</button>
        </div>
        <div className='todoscontainer'>
          {todos.map((todo,i) => <TODO key={i} title={todo.title} done={todo.done}></TODO>)}
        </div>
        <ErrorBoundary>
          <Card1/>
        </ErrorBoundary>
      </main>
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