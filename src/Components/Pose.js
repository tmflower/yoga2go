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
        <div>
          <iframe width="500" 
                    height="280"
                    title="demonstration of pose" 
                    src={`https://www.youtube.com/embed/${video}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
          </iframe>
        </div>

      </div>
    </>
  );
}
