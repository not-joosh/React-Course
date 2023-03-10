export const Person = (props) => {
    console.log(props)
    return (
        <div>
            <img className = "profile-icon" src = {props.content}></img>
            <p className = "prop-name">{props.name}</p>
        </div>
    )
}