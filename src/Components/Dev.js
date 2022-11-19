import defaultForBio from "../Components/Images/defaultForBio.jpg";
import "../styles/Dev.css";

export function Dev({
  name,
  bio,
  photo = defaultForBio,
  link = "https://unsplash.com/photos/klH-f7mw2Ws",
}) {
  return (
    <div className="bio-profile">
      <div>
        <img src={photo} className="bio-image" alt={name}></img>
        <div className="about-text">
          <p className="bio-name">{name}</p>
          <p className="bio-text">{bio}</p>

          <a href={link} target="_blank" rel="noreferrer" className="connect">
            Connect with Me!{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
