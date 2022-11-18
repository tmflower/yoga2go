// TODO: add video
import "../styles/Pose.css";

export function Pose({ sanskritName, englishName, diagram, video }) {
  return (
    <>
      <p>
        This pose is{" "}
        <div className="sanskrit-pose">
          <em>{sanskritName}</em>
        </div>{" "}
        commonly referred to as{" "}
        <div className="pose-name">{englishName} Pose</div>
      </p>
      <img src={diagram} style={{ width: "400px" }}></img>
    </>
  );
}
