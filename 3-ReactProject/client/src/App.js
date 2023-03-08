import './App.css'
import {Task} from './Task.js'
import {useState} from 'react'

function App() {
  const [toDoList, setToDoList] = useState([])
  const [inputText, setInputText] = useState("")
  const [color, setColor] = useState("red")
  const addTask = (event) => {
    const task = {
      name: inputText,
      id: toDoList.length === 0? 1 : toDoList[toDoList.length - 1].id + 1,
      isCompleted: false
    }
    toDoList.push(task)
    setToDoList(toDoList)
  }
  const completeTask = (taskID) => {
    setToDoList(
      toDoList.map((task, key) => {
        if(taskID === task.id) {
          return {...task, completed: true}
        } else {
          return task
        }
      })
    )
  }
  const deleteTask = (taskID) => {
    // const temp = toDoList.filter((task) => {
    //   console.log(task)
    //   console.log("ID: "+ task.id)
    //   if(task.id === taskID)
    //     return false
    //   else return true
    // })
    setToDoList(toDoList.filter((task) => task.id !== taskID))
  }
  return (
    <div className = "App">
      <div className = "addTask">
        <input className = "input-field" type = "text" onChange = {(event) => {
          setInputText(event.target.value)
        }}/>
        <button className = "add-btn" onClick = {addTask}>Add Task</button>
      </div>
      <div className = "list">
        {toDoList.map((taskItem, key) => {
          // console.log(taskItem.name)
          return <Task name = {taskItem.name} id = {taskItem.id} deleteTask = {deleteTask} completeTask = {completeTask} isCompleted = {taskItem.isCompleted}/>
        })}
      </div>
    </div>
  )
}
export default App;


// import {Planet} from './Planets.js'
// import {User} from './User.js'
// import moe from './images/mohan.png';
// function App() {
//   const people = [
//     {name: "Josh", age: 21},
//     {name: "Mohan", age: 23},
//     {name: "Holchi", age: 20}
//   ]
//   return (
//     <div className="App">
//       {people.map((person, key) => {
//         return (
//           <User key = {key} name = {person.name} age = {person.age}/>
//         )
//       })}
//     </div>
//   )
// }
// import {useState} from 'react'

// function App() {
//   const [text, setText] = useState("")
//   const handleInputChange = (event) => {
//     setText(event.target.value)
//   }
//   return (
//     <div className = "App">
//       <input type = "test" onChange={handleInputChange}></input>
//       <div>
//         {text}
//       </div>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className = "App">
//       <button onClick = {() => {
//         setCount(count + 1)
//       }}>Increase</button>
//       <button onClick = {() => {
//         setCount(count - 1)
//       }}>Decrease</button>
//       <button onClick = {() => {
//         setCount(0)
//       }}>Reset</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }