// import Header from './Header.js'
function Header() {
    return (
        <header>
            <header>
                <nav className = "nav">
                    <img src="image.png" className = "nav-image"></img>
                    <ul className = "nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </header>
    )
}
function Footer() {
    return(
        <footer>
            <small>&copy; Ratificar. All rights reserved.</small>
        </footer>
    )
}
function MainContent() {
    return(
        <div>
            <h1>Reasons Why I'm excited to learn React</h1>
            <ol>
                <li>Makes me cooler.</li>
                <li>Makes me attractive.</li>
                <li>Confidence boost.</li>
                <li>Makes me straight.</li>
            </ol>
        </div>
    )
}
function App() {
    return (
        <div>
            <Header/>
            <MainContent />
            <Footer />
        </div>
    )
}
// ReactDOM.render(<Header />, document.querySelector("#root"))
ReactDOM.render(<App />, document.querySelector("#root"))