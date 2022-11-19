import defaultForBio from "../Components/Images/defaultForBio.jpg";
import "../styles/Dev.css";


export function Dev({ 
    name, 
    bio, 
    photo=defaultForBio, 
    link="https://unsplash.com/photos/klH-f7mw2Ws", }) {
    return (
        <div className="bio-profile">
            
            <div>
                <img src={photo} width="200" alt={name}></img>  
                
                <p className="bio-name">{name}</p>
                             
                <p className="bio-text">{bio}</p>

                <a href={link} target="_blank" rel="noreferrer">
                    <button className="connect-btn">Connect with Me!</button>{" "}
                </a>
            </div>
        </div>
  );
}
