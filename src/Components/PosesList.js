// TODO: write code that makes a request to yoga API and YouTube API and renders a list of the names of all the poses as links that return the user to the Pose route for the pose they click on

// TODO: Add function to request YouTube video

import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";

export function PosesList() {

    const [allPoses, setAllPoses] = useState([]);

    useEffect(() => {
        async function getAllPoses() {
            const res = await axios.get("https://lightning-yoga-api.herokuapp.com/yoga_poses")
            .then((res) => {
                setAllPoses(res.data.items);
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getAllPoses()
    }, []);


console.log(allPoses)

    return (
        <>
        <h1>Choose a Pose</h1>
        {allPoses ? 
        // allPoses.map((pose) => <Pose key={pose.id} sanskritName={pose.sanskrit_name} englishName={pose.english_name} diagram={pose.img_url}/>)
        allPoses.map((pose) => <p key={pose.id}>{pose.sanskrit_name}</p>)            
        : "Loading..."}
        </>
    )
}
