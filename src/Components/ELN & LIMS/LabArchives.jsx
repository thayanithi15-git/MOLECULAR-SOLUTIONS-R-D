import React, { useState, useRef, useEffect } from "react";
import "./ELN_LIMS.css";
import { Dialog } from "@mui/material";
import LabarchivesImg from "../../assets/labarchives-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function LabArchives() {
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
          src={LabarchivesImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
        </div>
      </div>
      <div className="title-name">LabArchives</div>
      <div className="subtitle-name">
        The Easy-to-use Electronic Lab Notebook
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          LabArchives is a powerful suite of SaaS applications designed for research data management, enabling scientists to securely document, manage, and protect their research.<br/><br/>Serving over 750,000 users across academic, non-profit, and commercial organizations, it acts as a central hub for lab operations.<br/><br/>LabArchives enhances data capture, fosters secure collaboration, and streamlines workflows to boost lab efficiency.<br/><br/>It offers the highest level of data security with features like comprehensive audit trails, access controls, and data encryption. Compliant with SOC2, ISO 27001, HIPAA, and GDPR standards, it ensures the protection of intellectual property and regulatory adherence.
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
      <div className="bronchure-t" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt" style={{ display: "flex" }}>
            <img src={YtIcon} className="yt-img" />
            <p className="presentation">Video Presentation</p>
          </div>
        </div>

        <Dialog
      className="yt-dialog"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
          <div 
        className="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jnGX0Lh4-Fg?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            </div>
        </Dialog>
      </div>
    </div>
  );
}
