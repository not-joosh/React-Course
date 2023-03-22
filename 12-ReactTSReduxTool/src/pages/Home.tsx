import {} from 'react-redux'
import { useSelector } from 'react-redux';
export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);
    return (
        <div>
            <h1>HOME PAGE</h1>
            {username && <h1>Welcome back {username}!</h1>}
        </div>
    )
}