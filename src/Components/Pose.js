// TODO: add video
import "../styles/Pose.css";

export function Pose({sanskritName, englishName, diagram, video}) {
    return (
        <>
            <p>This pose is <em>{sanskritName}</em>, commonly referred to as {englishName} pose.</p>
            <img src={diagram} style={{width: "400px"}}></img>
        </>
    )
}