// TODO: Add function to request YouTube video

import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";
import "../styles/Home.css";
import background from "./Images/background.png";
import { NavLink } from "react-router-dom";

export function Home() {
  const [pose, setPose] = useState(null);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 47));

  useEffect(() => {
    async function getPose() {
      const res = await axios
        .get("https://lightning-yoga-api.herokuapp.com/yoga_poses")
        .then((res) => {
          setPose(res.data.items[randomNum]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getPose();
  }, [randomNum]);

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <h1 className="welcome">
        Welcome to your spot for a daily dose of yoga!
      </h1>{" "}
      <h3>Daily Yoga Pose</h3>
      {pose ? (
        <Pose
          sanskritName={pose.sanskrit_name}
          englishName={pose.english_name}
          diagram={pose.img_url}
        />
      ) : (
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
