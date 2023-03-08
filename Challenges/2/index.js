// import ReactDOM from "react-dom"
// const page = (
//      <div>
//         <h1 className = "header">
//             Hello, I am new to React
//         </h1>
//         <p>I be chilling</p>
//     </div>
// )
// ReactDOM.render(
//     hello, document.querySelector("#root")
// )
// // JSX Syntax <--- Javascript that looks like HTML
// // const root = document.querySelector("#root")
// // const h1 = document.createElement("h1")
// // h1.textContent = "Hello, I am new to React :)"
// // h1.className = "header"
// // root.append(h1)
// 44:42 <---  Last Left Off
// const element = (
//     <div id="wrapper">
//         <nav>
//             <h1 id="header">Tabbage</h1>
//         </nav>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(

//     element, document.querySelector("#root")
// )

const webPage = (
    <div id= "wrapper">
        <h1 id = "header">I like chicken</h1>
        <section>
            <div >Result: </div>
            <span id = "result">0</span> 
        </section>
    </div>
)
ReactDOM.render(webPage, document.querySelector("#root"))
document.querySelector("#root").append(JSON.stringify(webPage))