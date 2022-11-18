import { defaultForBio } from "../Components/Images/defaultForBio.jpg";

export function Dev({ name, bio="All around awesome human!", photo={defaultForBio}}) {
    return (
        <div>
            <img src={photo}></img>
            <p>{name}</p>
            <p>{bio}</p>            
        </div>
    )
}