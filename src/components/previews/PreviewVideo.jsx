import React from "react";
import ReactPlayer from "react-player/lazy";

const PreviewVideo = (props) => {
  return (
    <div style={{ width: "100%", height: "240px" }}>
      <ReactPlayer url={props.url} />
    </div>
  );
};

export default PreviewVideo;
