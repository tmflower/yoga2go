// TODO: Add function to request YouTube video

import "../styles/Pose.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";
import { useParams } from "react-router-dom";


export function PoseDetails() {
    const {pose_id} = useParams();
    const [pose, setPose] = useState(null);
    const [poseName, setPoseName] = useState(null);
    const [video, setVideo] = useState(null);
    
    const KEY="AIzaSyDy-5ptEOnMtvDUI_GyZPe5sdsE3QKxPCk"

    useEffect(() => {
        async function getPoseById() {
            const res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses/${pose_id}`)
            .then((res) => {
                setPose(res.data);
                setPoseName(res.data.sanskrit_name)
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getPoseById()
    }, [pose_id]);

    console.log(poseName);

    // useEffect(() => {
    //     async function getVideo() {
    //         const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${poseName}&maxResults=1&key=${KEY}`)
    //         .then((res) => {
    //                 setVideo(res.data.items[0].id.videoId)             
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })           
    //     }
    //     getVideo()
    // }, [poseName]);

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