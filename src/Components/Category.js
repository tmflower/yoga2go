// TODO: change onClick function so that it takes user to poseslist for selected category
import "../styles/Category.css";

export function Category({name, description}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
        </>
    )
}