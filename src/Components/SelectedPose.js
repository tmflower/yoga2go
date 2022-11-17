import axios from "axios";
import { useState, useEffect } from "react";
import { Pose } from "./Pose";


export function SelectedPose({id}) {

    const [pose, setPose] = useState(null);

    useEffect(() => {
        async function getPose() {
            // const res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses/33`)
            const res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses/:${id}`)
            .then((res) => {
                setPose(res.data);
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getPose()
    }, []);

    return (
        <>
        {pose ? 
        <Pose sanskritName={pose.sanskrit_name} englishName={pose.english_name} diagram={pose.img_url}/>    
        : "Loading..."}
        </>
    )
}