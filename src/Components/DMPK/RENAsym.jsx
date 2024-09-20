import React, { useState, useRef, useEffect } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import MonolixImg from "../../assets/Monolix-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function RENAsym() {
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
          src={MonolixImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          <div className="title-name">RENAsym</div>
        </div>
      </div>
      <div className="subtitle-name">Renal disease modeling</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          &nbsp;&nbsp;Quantitative systems toxicology
          (QST) software for predicting and understand drug-induced kidney
          injury
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
    </div>
  );
}
