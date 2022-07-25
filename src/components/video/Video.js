import React from "react";
import "./Video.scss";
import { useParams } from "react-router-dom";

function Video() {
  //   let { id } = useParams();

  return (
    <iframe
      className="video"
      id="player"
      type="text/html"
      src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
      frameBorder="0"
    ></iframe>
  );
}

export default Video;
