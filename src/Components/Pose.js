// TODO: add video
import "../styles/Pose.css";

export function Pose({ sanskritName, englishName, diagram, video }) {
  return (
    <>
      <div className="yoga-pose">
        <p className="pose-info">
          {/* This pose is{" "} */}
          <div className="sanskrit-pose">
            <em>{sanskritName}</em>
          </div>{" "}
          <iframe width="280" 
                  height="158"
                  title="demonstration of pose" 
                  src={`https://www.youtube.com/embed/${video}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
          </iframe>
          {/* commonly referred to as{" "} */}
          <div className="pose-name">{englishName} Pose</div>
        </p>
        <img src={diagram} className="pose-icon"></img>
      </div>
    </>
  );
}
