export function Pose(sanskritName, englishName, diagram, video) {
    return (
        <>
            <h1>Yoga2Go</h1>
            <h2>Welcome to your daily dose of yoga! Today's pose is <em>{sanskritName}</em></h2>
            <h3>This commonly referred to as {englishName} pose in English.</h3>
            <img src={diagram} style={{width: "400px"}}></img>
        </>
    )
}