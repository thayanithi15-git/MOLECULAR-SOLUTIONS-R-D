import React, { useState, useRef, useEffect } from "react";
import "./AIML.css";
import { Dialog } from "@mui/material";
import LumaImg from "../../assets/luma-img.jpg";
import YtIcon from "../../assets/yt.svg";
import { IoVideocam } from "react-icons/io5";

export default function Luma() {
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
    fetch("https://molecularsolutions.co.in/products/Dotmatics LUMA.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Dotmatics LUMA.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error("Error downloading PDF:", err));
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
          src="https://molecularsolutions.co.in/products/assets/luma-img-DFBqBwZp.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">LUMA</div>
      <div className="subtitle-name">
        The AI-native Multimodal Scientific Intelligence Platform
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          LUMA is a low-code laboratory informatics platform by Dotmatics
          integrating various scientific software to streamline data
          management and collaboration.
          <br /><br/>
          It offers visualization and analysis tools, enabling scientists to
          efficiently organize and share data. LUMA enhances research
          productivity by tailoring to unique scientific needs.
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

      <div className="bottom-buttons">
      <div className="button-containers" onClick={downloadPDF}>
          <a className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>BROCHURE</div>
            <i class="fa-solid fa-file"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
        <div className="bronchure-t" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt" style={{ display: "flex" }}>
          <div className="refined-animated-button-yt">
            <p className="presentation">VIDEO</p>
            <IoVideocam className="video-icon"/>
            <div className="wave-animation"></div>
</div>
          </div>
        </div>
      </div>

      <Dialog
        className="yt-dialog"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1Gi4Ruse2QQ?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Dialog>
    </div>
  );
}
