import './UserHomeStyle.css'
import SearchButton from '../../assets/icons/SearchButton.png';
import ReturnButton from '../../assets/icons/Return_Button.png';
import { UserHomeDecorations } from './UserHomeDecorations'
import { useNavigate } from 'react-router-dom';

export const UserHome = () => {
    const navigate = useNavigate();
    return (
        <div className = "user-home-wrapper">
           <form className = "user-home-form1">
                <input type = "text" className = "user-home-input" placeholder='track a parcel'/>
                <input type = "submit" className = "user-home-submit"/>
                <img src = { SearchButton } className = "user-home-search-icon" onClick={() => {
                    // Do Something with Searching For Parcel Logic...
                }}/>
           </form>
           <button className ="user-home-Login-btn" onClick={() => {
                navigate("/Login");
           }}>Login</button>
           <UserHomeDecorations />
           <img src = { ReturnButton } className ="user-home-Return-btn" onClick={() => {
                navigate("/");
           }}/>
        </div>
    )
}