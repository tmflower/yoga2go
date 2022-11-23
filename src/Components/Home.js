// TODO: Add function to request YouTube video

import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";
import "../styles/Home.css";
import background from "./Images/background.png";
import { NavLink } from "react-router-dom";
import videos from "./utils";

export function Home() {
  const [pose, setPose] = useState(null);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 47));
  const [poseName, setPoseName] = useState(null);
  const [video, setVideo] = useState("AB3Y-4a3ZrU");

  useEffect(() => {
    async function getPose() {
      const res = await axios
        .get("https://lightning-yoga-api.herokuapp.com/yoga_poses")
        .then((res) => {
          setPose(res.data.items[randomNum]);
          setPoseName(res.data.items[randomNum].sanskrit_name);
        })
        .catch((error) => {
          console.error(error);
        });
      }
    getPose();
    setVideo(videos[poseName]);
  }, [randomNum, pose]);

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <h1 className="welcome">
        Welcome to your spot for a daily dose of yoga!
      </h1>{" "}
      <h3>Daily Yoga Pose</h3>
      {pose ? (
        <span>
          {poseName === null ? "Loading..." :
          (
          <Pose
            sanskritName={pose.sanskrit_name}
            englishName={pose.english_name}
            diagram={pose.img_url}
            video={video}
          />)}
        </span>)
       : (
        "Loading..."
      )}
      <hr className="divide" />
      <div className="extra-links">
        <NavLink exact="true" to="/explore" className="explore-link">
          Explore more poses
        </NavLink>
        <NavLink exact="true" to="/about" className="about-link">
          About the creators
        </NavLink>
      </div>
    </div>
  );
}
