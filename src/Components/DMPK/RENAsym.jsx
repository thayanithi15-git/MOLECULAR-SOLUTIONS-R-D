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
          src="https://molecularsolutions.co.in/products/assets/Monolix-img-CPaKe1OD.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">RENAsym</div>
      <div className="subtitle-name">Renal disease modeling</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          RENAsym is a mechanistic, mathematical model of drug-induced kidney
          injury, in the form of computational software applied to predict
          whether new drug candidates will cause renal injury signals in
          patients and to enhance the understanding of mechanisms that
          contribute to renal safety signals already observed in the clinic.
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
    </div>
  );
}
