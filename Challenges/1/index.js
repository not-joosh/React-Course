function MainContent() {
    return (
        <h1>I'm learning React</h1>
    )
}
ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
    </div>, document.querySelector("#root")
)