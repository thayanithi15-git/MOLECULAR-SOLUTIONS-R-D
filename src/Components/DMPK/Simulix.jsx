import React, { useState, useRef, useEffect } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import SimulxImg from "../../assets/Simulx-img.jpg";
import YtIcon from "../../assets/yt.svg";
import { IoVideocam } from "react-icons/io5";

export default function Simulx() {
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
    link.href = "/ILDsym_Flyer.pdf";
    link.download = "ILDsym_Flyer.pdf";
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
          src="https://molecularsolutions.co.in/products/assets/Simulx-img-3e65wHJ0.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">Simulx</div>
      <div className="subtitle-name">Clinical trial simulations tool</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          Simulx is a powerful clinical trial simulation tool that helps
          pharmaceutical companies make informed decisions. <br/><br/>It allows users to
          explore dosing regimens and model parameters interactively while
          generating real-time predictions. <br/><br/>Simulx can quickly simulate large
          populations, enabling researchers to anticipate trial outcomes, saving
          time and resources.<br/><br/> Its flexible setup and post-processing tools allow
          users to focus on analysis rather than implementation. <br/><br/>Simulx is
          widely used to compare dosing regimens, assess safety, calculate study
          power, and optimize trial designs across phases.
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
        className="yt-dialog"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/j5YJ8nh7uaA?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Dialog>
    </div>
  );
}
