import ErrorImage from '../../assets/alt-backgrounds/error-page.png';
import { useNavigate } from 'react-router-dom';
export const ErrorOccured = () => {
    const navigate = useNavigate();
    return (
        <div className = "error-page">
            <img className = "error-img" src= {ErrorImage} style = {{
                width: "100%",
                height: "110%",
                margin: "0%",
                overflow: "hidden",
                boxSizing: "border-box",
                position: "fixed",
                pointerEvents: "none",
            }}></img>
            <button className = "error-redirect-btn" onClick={() => {
                navigate("/");
            }} style = {{
                zIndex: "5",
                position: "fixed",
                height: "10000px",
                width: "10000px",
                overflow: "hidden",
                boxSizing: "border-box",
                opacity: "0%",
                cursor: "pointer",
            }}></button>
        </div>
    )
}