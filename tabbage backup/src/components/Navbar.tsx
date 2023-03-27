/*
    This is a universal component which can vary on the type of user we are
    dealing with...
*/
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className = "navbar">
            <Link to = "/User-Main-Page">Home</Link>
        </div>
    )
}
