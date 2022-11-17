// TODO: write code that makes a request to yoga API and YouTube API and renders a list of the names of all the poses as links that return the user to the Pose route for the pose they click on

// TODO: Add function to request YouTube video

import axios from "axios";
import { useState, useEffect } from "react";

export function PosesList() {

    const [allPoses, setAllPoses] = useState([]);
    const [categories, setCategories] = useState([]);

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

    useEffect(() => {
        async function getCategories() {
            const res = await axios.get("https://lightning-yoga-api.herokuapp.com/yoga_categories")
            .then((res) => {
                setCategories(res.data.items);
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getCategories()
    }, []);

    return (
        <>
        <h1>Choose a Pose</h1>
        {allPoses ? 
        categories.map((category, i) => <p key={i}>{category.name}: {category.description}</p>)            
        : "Loading..."}
        </>
    )
}
