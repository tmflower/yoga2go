// TODO: Add function to request YouTube video

import "../styles/Pose.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";
import { useParams } from "react-router-dom";
import videos from "./utils";


export function PoseDetails() {
    const {pose_id} = useParams();
    const [pose, setPose] = useState(null);
    const [poseName, setPoseName] = useState(null);
    const [video, setVideo] = useState("AB3Y-4a3ZrU");

    useEffect(() => {
            async function getPoseById() {
                const res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses/${pose_id}`)
                .then((res) => {
                    setPose(res.data);
                    setPoseName(res.data.sanskrit_name);
                })
                .catch((error) => {
                    console.error(error)
                })           
            }
            getPoseById();
            setVideo(videos[poseName]);
    }, [pose_id, video, poseName]);

    return (
        <>
        {pose ? 
            <div>
                    {poseName === null ? "Loading..." :
                        <Pose sanskritName={pose.sanskrit_name} englishName={pose.english_name} diagram={pose.img_url} video={video}/>    
                    }
            </div>
            : "Loading..."
        }
        </>
    )
}