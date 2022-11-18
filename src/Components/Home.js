// TODO: Add function to request YouTube video

import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";

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
    <>
      <h1>Daily Yoga Pose</h1>
      <h3>Welcome to your source for a daily dose of yoga!</h3>
      {pose ? (
        <Pose
          sanskritName={pose.sanskrit_name}
          englishName={pose.english_name}
          diagram={pose.img_url}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
}
