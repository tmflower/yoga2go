import defaultForBio from "../Components/Images/defaultForBio.jpg";
import "../styles/Dev.css";

export function Dev({ 
    name, 
    bio, 
    photo=defaultForBio, 
    link="https://unsplash.com/photos/klH-f7mw2Ws?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"}) {
    return (
        <div>
            <a href={link} target="_blank"><button>Connect with Me!</button> </a> 
            <div>
                <p>{name}</p>
                <img src={photo} width="200"></img>               
                <p>{bio}</p>
            </div>                     
        </div>
    )
}