// TODO: Add function to request YouTube video

import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";


export function Poses() {

    const [pose, setPose] = useState(null);
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 47));

    useEffect(() => {
        async function getPose() {
            const res = await axios.get("https://lightning-yoga-api.herokuapp.com/yoga_poses")
            .then((res) => {
                setPose(res.data.items[randomNum]);
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getPose()
    }, [randomNum]);

    return (
        <>
        {pose ? 
        <Pose sanskritName={pose.sanskrit_name} englishName={pose.english_name} diagram={pose.img_url}/>    
        : "Loading..."}
        </>
    )
}