import React, { useState, useRef, useEffect } from "react";
import "./AIML.css";
import { Dialog } from "@mui/material";
import MaraImg from "../../assets/mara-img.jpg";
import YtIcon from "../../assets/yt.svg";

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
        <div className="title-subtitle">
          <div className="title-name">MARA</div>
        </div>
      </div>
      <div className="subtitle-name">Your Scientific Discovery Co-pilot</div>
      <div className="card-subdatas">
      <div
        className={`brief-contents ${isExpanded ? 'expanded' : 'collapsed'}`}
        ref={textRef}
      >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MARA (Molecular Analysis and
          Reasoning Assistant) is an advanced AI-driven system designed for
          Scientific Informatics. MARA acts as a scientific co-pilot, empowering
          your team to effortlessly build custom tools and workflows that
          integrate seamlessly with internal databases and operations.
        </div>
        {isOverflowing && (
        <div onClick={() => setIsExpanded(!isExpanded)} className="view-button">
          {isExpanded ? '' : 'View More'}
        </div>
      )}
      </div>

      <div className="bottom-buttons-yt" >
        <div
          className="bronchurewithoutdownload" 
          onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt" >
            <img src={YtIcon} className="yt-img" />
          </div>
        </div>
        </div>

        <Dialog
          open={openVideoDialog}
          onClose={() => setOpenVideoDialog(false)}
          fullScreen
          PaperProps={{
            style: {
              margin: "16.2%",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}>
          <video
            className="ytvideo"
            width="100%"
            height="90%"
            controls
            src="/public/MARA.mp4"
            title="Local video player">
            Your browser does not support the video tag.
          </video>
        </Dialog>
    </div>
  );
}
