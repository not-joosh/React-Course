import LightSquare from '../../assets/icons/LightSquare.png';
import LightCircle from '../../assets/icons/LightCircle.png';
import LightSkinSquare from '../../assets/icons/LightSkinSquare.png';
import LightWave from '../../assets/icons/LightWave.png';
import DarkWave from '../../assets/icons/DarkWave.png';

export const UserHomeDecorations = () => {
    return (
        <div>
            <img className = "user-home-LightSquare1" src= {LightSquare} />
            <img className = "user-home-LightCircle1" src= {LightCircle} />
            <img className = "user-home-LightCircle2" src= {LightCircle} />
            <img className = "user-home-LightCircle3" src= {LightCircle} />
            <img className = "user-home-LightSkinSquare1" src= {LightSkinSquare} />
            <img className = "user-home-LightSkinSquare2" src= {LightSkinSquare} />
            <img className = "user-home-LightSkinSquare3" src= {LightSkinSquare} />
            <img className = "user-home-LightWave1" src= {LightWave} alt = "logo" />
            <img className = "user-home-DarkWave1" src= {DarkWave} />
            <img className = "user-home-LightWave2" src= {LightWave}/>
            <img className = "user-home-DarkWave2" src= {DarkWave} />
        </div>
    )
}