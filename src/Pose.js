// TODO: add video

export function Pose({sanskritName, englishName, diagram, video}) {
    return (
        <>
            <h1>Yoga2Go</h1>
            <p>Welcome to your daily dose of yoga! Today's pose is <em>{sanskritName}</em></p>
            <p>This commonly referred to as {englishName} pose in English.</p>
            <img src={diagram} style={{width: "400px"}}></img>
        </>
    )
}