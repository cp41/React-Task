import React, { useState } from 'react'
import './Todo.css'
// import { todos } from '../data'
const todos = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Walk the dog' },
  { id: 3, task: 'Finish project report' },
  { id: 4, task: 'Call mom' },
  { id: 5, task: 'Clean the house' },
  { id: 6, task: 'Pay bills' },
  { id: 7, task: 'Read a book' },
  { id: 8, task: 'Exercise' },
  { id: 9, task: 'Cook dinner' },
  { id: 10, task: 'Write blog post' },
]
function Todo() {
  const [tasks, setTasks] = useState(todos)
  const [task, setTask] = useState('')
  const [editId, setEditId] = useState(null)

  const deleteAll = () => setTasks([])
  // const deleteTask = (azad) => console.log(azad);
  const deleteTask = (azad) => {
    setTasks(
      tasks.filter(function (element) {
        // console.log(element.id !== azad)
        return element.id !== azad
      })
    )
  }

  const addTask = () => {
    if (task.trim() === '') return
    if (editId) {
      setTask(
        tasks.map((item) => {
          return item.id === editId ? { ...item, task } : item
        })
      )
      setEditId(null)
    } else {
      setTasks([{ id: Date.now(), task }, ...tasks])
    }

    setTask('')
  }

  const editTask = (id,text) => {
    setTask(text)
    setEditId(id)
  }
  return (
    <div className='todotask'>
    <div className='todo'>
      <h2>Todo create</h2>
      <div>
        <input
          type='text'
          placeholder='enter your todo or task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        
        <button className='addbutton' onClick={addTask}>{editId ? 'update': 'add'}</button>
        <br />
        <br />
        <button className='delbutton' onClick={deleteAll}>delete all</button>
      </div>
      <hr />
      {tasks.map((e, index) => {
        return (
          <div key={e.id}>
            <h1>{e.task}</h1>

            <button className='editbutton' onClick={() => editTask(e.id, e.task)}>edit</button>
            
            <button className='delbutton' onClick={() => deleteTask(e.id)}>delete</button>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Todo