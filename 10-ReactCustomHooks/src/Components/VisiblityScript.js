
import { useToggle } from '../Hooks/useToggle.js'
export const VisiblityScript = () => {
    const [isVisible, toggle] = useToggle()
    return (
        <div>
            <button onClick = {(toggle)}>{isVisible? "HIDE" : "SHOW"}</button>
            <div>{isVisible && "SECRET TEXT"}</div>
        </div>
    )
}