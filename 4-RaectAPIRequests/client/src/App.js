import './App.css';
import {useEffect, useState} from 'react'
function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [text, setText] = useState("")
  console.log("https://api.agify.io//?name="+{name})
  const testFect = () => {
    fetch("https://api.agify.io//?name=Josh")
      .then((res) => res.json()
      .then((data) => {
        console.log(data)
      }))
  }
  const fetchPerson = () => {
    fetch(`https://api.agify.io//?name=${name}`)
      .then((res) => res.json()
      .then((data) => {
        setAge(data.age)
      }))
  }
  const setPerson = () => {
    setName(text)
  }
  useEffect(() => {
    fetchPerson()
  }, [])
  return (
    <div className="App">
      <input type="text" placeholder="Example... Mohan" onChange = {(event) => {
        setText(event.target.value)
      }}></input>
      <button onClick = {setPerson}>Set Person</button>
      <button onClick = {fetchPerson}>Fetch</button>
      <p> {name} is {age}</p>
    </div>
  );
}
export default App;
// import Axios from 'axios'
// function App() {
//   const [catFact, setCatFact] = useState("")
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json()
  //   .then((data)=> {
  //     console.log(data)
  // }))
//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//         setCatFact(res.data.fact)
//     })
//   }
//   useEffect(()=> {
//     fetchCatFact()
//   }, [])
//   return (
//     <div className="App">
//       <button onClick = {fetchCatFact}>Add Cat Fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }