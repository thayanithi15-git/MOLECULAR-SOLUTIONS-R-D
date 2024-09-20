import React, { useState, useRef, useEffect } from "react";
import "./AIML.css";
import { Dialog } from "@mui/material";
import MaraImg from "../../assets/mara-img.jpg";
import YtIcon from "../../assets/yt.svg";
import Video from "../../assets/MARA.mp4";

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
          src={MaraImg}
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
          MARA (Molecular Analysis and Reasoning Assistant) is an advanced AI
          system designed for Scientific Informatics, acting as a co-pilot for
          your research and analysis needs.<br/> Operating entirely behind your IT
          firewall, MARA enables seamless tool and workflow integration,
          allowing your team to easily create, access, and integrate internal
          databases and tasks. MARA’s Natural Language Data Engine simplifies
          data management, enabling users to curate, manipulate, and expand
          datasets. It ensures privacy and security by running entirely behind
          your IT firewall, supporting secure access through SSO-based logins
          and monitoring via key usage. MARA is compatible with models like
          LLAMA 3 or privately-hosted GPT-4 on Azure, ensuring a flexible and
          secure AI experience tailored to your organization.
        </div>
        <div style={{ height: "2vh" }}>
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
        <div
          className="bronchurewithoutdownload"
          onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt">
            <img src={YtIcon} className="yt-img" />
          </div>
        </div>
      </div>

      <Dialog
        className="yt-dialog-mara"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
        <div className="youtube-video-mara">
          <video
            className="ytvideo"
            width="100%"
            height="90%"
            controls
            src={Video}
            title="Local video player">
            Your browser does not support the video tag.
          </video>
        </div>
      </Dialog>
    </div>
  );
}
