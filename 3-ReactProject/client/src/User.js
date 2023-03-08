export const User = (props) => {
    console.log(props)
    return(
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
      </ul>
    )
}