import {Link} from 'react-router-dom'
export const NavBar = () => {
    return (
        <div>
            <Link className = "route-name" to ="/">Home</Link>
            <Link className = "route-name" to ="/profile">Profile</Link>
            <Link className = "route-name" to ="/contact">Contact</Link>
        </div>
    )
}