export const Task = (props) => {
    return (
        <div className = "task-container">
            <button className = "complete-btn" onClick={() => props.completeTask(props.id)}>COMPLETE</button>
            <button className = "delete-btn" onClick = {() => props.deleteTask(props.id)}>X</button>
            <span style = {{ color: props.isCompleted ?  "green" : "red"}} >{props.name}</span>
        </div>
    )
}