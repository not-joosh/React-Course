import React from 'react';
import './App.css';
import { Person, Country } from './components/Person'
import {useState} from 'react'
/*
  TYPE SCRIPT TUTORIAL THROUGH REACT
    npx create-react-app tsclient --template typescript
*/
function App() {
  const [name, setName] = useState<string>("")
  const getAge = (name: string): number => {
    return 21;
  }
  return (
    <div className="App">
      <Person
       name = "Josh"
       email = "notjoosh@gmail.com"
       age = {21}
       isMarried = {false}
       friends = {["Ben", "Moe", "Holchi", "Rodjean"]}
       country = {Country.Brazil}
       />
    </div>
  );
}

export default App;
