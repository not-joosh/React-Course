import { useNavigate } from 'react-router-dom';
import { LandingPageDecorations } from './LandingPageDecorations';
import './LandingPageStyle.css';
export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className = "landing-page">
            <h1 className = "landing-page-text-tab">Tab<span className ="landing-page-text-bage">bage</span></h1>
            <button className ="landing-page-Getstarted-btn" onClick = {() => {
                navigate("/User-Main-Page")}}>Get Started</button>
            <LandingPageDecorations />
        </div>
    )
}