import React, { ChangeEvent, FC, useState } from 'react'
import './App.css'
import { ITasks } from './interfaces'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITasks[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task'){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  }
  const addTask= (): void =>{
    const newTask = { taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }
  return (
    <div className='App'>
      <div className="header">
        <div className="inputs">
          <input type="text" value={task} name='task' placeholder='Tasks..' onChange={handleChange} />
          <input type="number" value={deadline} onChange={handleChange} name='deadline' placeholder='Deadline (in days)' />
        </div>

        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITasks, key:number)=>{
          return <TodoTask key={key} task={task}/>
        })}
      </div>
    </div>
  )
}

export default App
