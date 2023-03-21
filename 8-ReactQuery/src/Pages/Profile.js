import { ChangeProfile } from '../Components/ChangeProfile.js'
import { AppContext } from '../Components/MainContent.js'
import { useContext } from 'react'
export const Profile = () => {
    const {userName} = useContext(AppContext)
    return (
        <div>
            <h1> Testing Profile </h1>
            <div>
                <ChangeProfile />
                {userName}
            </div>
        </div>
    )
}