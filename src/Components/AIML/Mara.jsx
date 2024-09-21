import React, { useState, useRef, useEffect } from "react";
import "./AIML.css";
import { Dialog } from "@mui/material";
import MaraImg from "../../assets/mara-img.jpg";
import YtIcon from "../../assets/yt.svg";
import { IoVideocam } from "react-icons/io5";

// import Video from "https://molecularsolutions.co.in/products/assets/MARA-BQoUcnH0.mp4";

export default function Mara() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  const handleClickOpenVideoDialog = () => {
    setOpenVideoDialog(true);
  };

  const handleCloseVideoDialog = () => {
    setOpenVideoDialog(false);
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src="https://molecularsolutions.co.in/products/assets/mara-img-C-swd0ES.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">MARA</div>
      <div className="subtitle-name">Your Scientific Discovery Co-pilot</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          MARA is an advanced AI
          system designed for Scientific Informatics, acting as a co-pilot for
          your research and analysis needs.
          <br/>
            It enables seamless tool
          and workflow integration, allowing your team to easily create, access,
          and integrate internal databases and tasks. <br />
          <br />
          MARA’s Natural Language Data Engine simplifies data management,
          enabling users to curate, manipulate, and expand datasets. <br />
          <br />
          It ensures privacy and security by running entirely behind your IT
          firewall, supporting secure access through SSO-based logins and
          monitoring via key usage. <br />
          <br />
          MARA is compatible with models like LLAMA 3 or privately-hosted GPT-4
          on Azure, ensuring a flexible and secure AI experience tailored to
          your organization.
        </div>
        <div>
          {isOverflowing && (
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="view-button">
              {isExpanded ? "" : "View More"}
            </div>
          )}
        </div>
      </div>

      <div className="bottom-buttons-yt">
      <div className="bronchure-t" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt" style={{ display: "flex" }}>
            {/* <img src={YtIcon} className="yt-img" /> */}
            <div className="refined-animated-button-yt">
            <p className="presentation">VIDEO</p>
            <IoVideocam style={{width: "2vw",textAlign: "center"}}/>
            <div className="wave-animation"></div>
</div>
            
          </div>
        </div>
      </div>

      <Dialog
      style={{backgroundColor: "black"}}
        className="yt-dialog-mara"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
        <div className="youtube-video-mara">
          <video
            className="ytvideo"
            controls
            src="https://molecularsolutions.co.in/products/assets/MARA-BQoUcnH0.mp4"
            title="Local video player">
            Your browser does not support the video tag.
          </video>
        </div>
      </Dialog>
    </div>
  );
}
