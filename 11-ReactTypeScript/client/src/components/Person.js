import Proptypes from 'prop-types'
export const Person = (props) => {
    return (
        <div>
            <ul>
                <li>Hi, this is {props.name}.</li>
                <li>{props.name} is {props.isMarried? "Married. " : "not Married. "}</li>
                <li>{props.name} is {props.age} years young. </li>
                Here are {props.name}'s friends:
                {props.friends.map((friend) => {
                    return (
                        <li><h1>{friend}</h1></li>
                    )
                })}
                <li>You can contact {props.name} via {props.email}.</li>
            </ul>
        </div>
    )
}

Person.propTypes = {
    name: Proptypes.string,
    email: Proptypes.string,
    age: Proptypes.number,
    isMarried: Proptypes.bool,
    friends: Proptypes.arrayOf(Proptypes.string)
}