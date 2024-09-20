import React, { useState, useRef, useEffect } from "react";
import "./VirtualReality.css";
import { Dialog } from "@mui/material";
import NanomeImg from "../../assets/nanome-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function Nanome() {
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

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Nanome_Flyer.pdf";
    link.download = "Nanome_Flyer.pdf";
    link.click();
  };

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
          src={NanomeImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
        </div>
      </div>
      <div className="title-name">Nanome</div>

      <div className="subtitle-name">
        Molecular Design and Mixed Virtual Reality tool
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          Nanome is a mixed virtual reality
          software that revolutionizes the way scientists, researchers, and
          educators interact with molecular structures on an atomic level.<br/><br/>It
          offers a 3D immersive environment where users can visualize and
          interact with molecular formations intuitively.<br/><br/>Designed for
          collaboration, Nanome integrates seamlessly with other software and
          databases, allowing global teams to work together in real time.<br/><br/>This
          platform accelerates discovery and development by making molecular
          design more accessible and interactive.
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

      <div className="bottom-buttons">
      <div className="button-containers" onClick={downloadPDF}>
          <a href="/brochure.pdf" download className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>BROCHURE</div>
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
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
            src="https://www.youtube.com/embed/p8yt_7he3mU?origin=https://yourdomain.com"
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
