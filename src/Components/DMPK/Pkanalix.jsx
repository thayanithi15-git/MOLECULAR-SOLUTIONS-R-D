import React, { useState, useRef, useEffect } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import PKanalixImg from "../../assets/PKanalix-img.jpg";
import YtIcon from "../../assets/yt.svg";
import { IoVideocam } from "react-icons/io5";

export default function PKanalix() {
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
          src="https://molecularsolutions.co.in/products/assets/PKanalix-img-DcabRxp-.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">PKanalix</div>
      <div className="subtitle-name">
        Compartmental and non-compartmental analysis (NCA) tool
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          PKanalix is a powerful pharmacokinetic analysis software designed to
          streamline and simplify the analysis of drug concentration data.
          <br />
          <br /> It provides users with a comprehensive platform for performing
          both Non-compartmental Analysis (NCA) and Compartmental Analysis,
          offering flexibility through a user-friendly graphical interface and
          advanced scripting capabilities via R.
          <br />
          <br /> PKanalix stands out by offering industry-standard methods for
          calculating key pharmacokinetic parameters, automatically generating
          visualizations, and ensuring reliable, reproducible results.
          <br />
          <br /> Its seamless integration with Monolix also enables easy
          transition to population modeling, making it an ideal solution for
          researchers and scientists looking to gain clear insights into drug
          behavior and pharmacokinetic profiles.
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
              <IoVideocam style={{ width: "2vw", textAlign: "center" }} />
              <div className="wave-animation"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
          className="button-container"
          style={{ marginLeft: "3%" }}
          onClick={downloadPDF}>
          <a href="/brochure.pdf" download className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>Brochure</div>
            <i className="fa-solid fa-download" id="download-icon"></i>
            <div className="wave-animation"></div>
          </a>
        </div> */}

      <Dialog
        className="yt-dialog"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/j5YJ8nh7uaA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Dialog>
    </div>
  );
}
