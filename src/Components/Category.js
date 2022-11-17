// TODO: change onClick function so that it takes user to poseslist for selected category

export function Category({name, description, id}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            <button onClick={()=> alert(`you clicked me! I am ${id}`)}>Show me the poses!</button>
        </>
    )
}