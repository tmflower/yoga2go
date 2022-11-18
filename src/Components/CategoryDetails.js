import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Category } from "./Category";
import axios from "axios";
import "../styles/CategoryDetails.css"


export function CategoryDetails({name, description}) {
    
    const { category_name } = useParams();

    const [posesByCategory, setPosesByCategory] = useState([]);

    useEffect(() => {
        async function getPosesByCategory() {
            const res = await axios.get(`https://lightning-yoga-api.herokuapp.com/yoga_poses?yoga_category_name=${category_name}`)
            .then((res) => {
                setPosesByCategory(res.data.items);
            })
            .catch((error) => {
                console.error(error)
            })           
        }
        getPosesByCategory()
    }, []);

    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            <Category name={category_name}/>
            {posesByCategory.map((pose) => <NavLink to={`/poses/${pose.id}`} key={pose.id}><p>{pose.sanskrit_name}</p></NavLink>)}
        </>
    )
}