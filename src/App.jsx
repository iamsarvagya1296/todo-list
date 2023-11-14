import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import TodoList from './components/TodoList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/signup" element ={<Signup/>}/>
      <Route path = "/todolist" element ={<TodoList/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
