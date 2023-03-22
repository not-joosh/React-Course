import './App.css';
import { Person } from './components/Person';
/*
  Type Safety through Typescript Lesson
  npm install prop-types
*/
function App() {
  return (
    <div className="App">
      <Person 
        name = "Josh Ratificar"
        email = "notjoosh@gmail.com"
        age = {21}
        isMarried = {false}
        friends = {["Mohan", "Ben", "Holchi", "Rodjean"]}
      />
    </div>
  );
}

export default App;
