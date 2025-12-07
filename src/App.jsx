import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import ErrorBoundary from './components/errorBoundary'
import Stopwatch from './components/Stopwatch'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card'

function TodoItem({ title, done, onToggle, onDelete }) {
  return (
    <div
      onClick={onToggle}
      className={`group cursor-pointer rounded-lg border-2 transition-all duration-200 px-4 py-3 flex items-center justify-between ${
        done
          ? 'border-accent/40 bg-accent/10 line-through text-muted-foreground'
          : 'border-border hover:border-accent/50 hover:bg-accent/5'
      }`}
    >
      <span className="text-sm font-medium">{title}</span>
      <div
        className={`w-5 h-5 rounded-md border-2 transition-colors ${
          done ? 'bg-accent border-accent' : 'border-border'
        }`}
      />
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'go to gym', done: false },
    { id: 2, title: 'get hold of react', done: false },
    { id: 3, title: 'sleep all day', done: true },
  ])
  const [inputval, setInputval] = useState('')
  const inputRef = useRef(null)

  const addTodo = () => {
    if (!inputval.trim()) return
    setTodos([...todos, { id: Date.now(), title: inputval, done: false }])
    setInputval('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-card/40">
      <div className="mx-auto max-w-2xl space-y-8 px-4 py-12">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Press <kbd className="rounded px-2 py-1 text-xs font-semibold border border-border bg-muted">/</kbd> to focus input</p>
        </div>

        {/* Todo Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your Todo List</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Add a new task..."
                value={inputval}
                onChange={(e) => setInputval(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                className="flex-1"
              />
              <Button onClick={addTodo} className="gap-2">
                Add
              </Button>
            </div>

            <div className="space-y-2">
              {todos.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  <p>No tasks yet. Add one to get started!</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id} className="flex items-center gap-2">
                    <div className="flex-1">
                      <TodoItem
                        title={todo.title}
                        done={todo.done}
                        onToggle={() => toggleTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      ✕
                    </Button>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 text-xs text-muted-foreground">
              {todos.filter(t => t.done).length} of {todos.length} completed
            </div>
          </CardContent>
        </Card>

        {/* Color Card Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Interactive Color Card</CardTitle>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <ColorCard />
            </ErrorBoundary>
          </CardContent>
        </Card>

        {/* Stopwatch Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Stopwatch</CardTitle>
          </CardHeader>
          <CardContent>
            <Stopwatch />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function ColorCard() {
  const [color, setColor] = useState('rgb(21, 177, 164)')

  const generateRandomColor = () => {
    const c1 = Math.floor(Math.random() * 255)
    const c2 = Math.floor(Math.random() * 255)
    const c3 = Math.floor(Math.random() * 255)
    setColor(`rgb(${c1},${c2},${c3})`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomColor()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-4 items-center">
      <div
        onClick={generateRandomColor}
        className="h-40 w-40 rounded-lg border-2 border-border cursor-pointer transition-transform hover:scale-105 shadow-md"
        style={{ backgroundColor: color }}
      />
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Color value</p>
        <p className="font-mono text-sm">{color}</p>
        <Button onClick={generateRandomColor} size="sm" variant="secondary">
          Change Color
        </Button>
      </div>
    </div>
  )
}

export default App