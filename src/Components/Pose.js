// TODO: add video
import "../styles/Pose.css";

export function Pose({ sanskritName, englishName, diagram, video }) {
  return (
    <>
      <div className="yoga-pose">
        <p className="pose-info">
          This pose is{" "}
          <div className="sanskrit-pose">
            <em>{sanskritName}</em>
          </div>{" "}
          commonly referred to as{" "}
          <div className="pose-name">{englishName} Pose</div>
        </p>{" "}
        <img src={diagram} alt="Yoga pose example" className="pose-icon"></img>
      </div>
    </>
  );
}
