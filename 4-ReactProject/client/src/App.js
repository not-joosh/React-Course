import {MainContent} from './components/MainContent.js'
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  useEffect(() => { //  This is for when component is at life cycle: mounted
    console.log(
      `
      This only happens when the component has been mounted.
      why would we want to do this? Example scenario involves when we
      want to fetch data when a page is mounted. Then display the data immediately.
      Works best for synchronous scripts. 

      The stages include:
        - Mounting <-- adding the element into the page
        - Unmounting <--- removing the element from the page
      `
    )
    // I wa nt to fetch links from data base.
    // firebase returns a promise.
    // Parse through that firebase promise until I get the object i am looking for. 

    // In order to fetch data from an API, it is recommended to use fetch(url)
    /*
      for promises, we want to use the .then operator. 
      Promises returns jsons, but we need to conevert it to an object
    */
    // fetch("www.google.com").then((res) => res.json().then(data))
    return () => {
      console.log("UNMOUNTED THE OBJECT")
    }
  }, []) // adding the array specifies what props or stage changes we want to trigger useEffect
  // Execute an action once, then add the [], if you want to specify, then add the 
  // element into the array.
  // We can return a function using useEffect

  // Importance of useEffects;
  // useEffect calls are useful when it comes to calling API requests. 


  return (
    <div className="App">
      <MainContent />
    </div>
  );
}

export default App;