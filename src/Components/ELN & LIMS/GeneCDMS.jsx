import React, { useState, useRef, useEffect } from "react";
import GeneCDMSImg from "../../assets/geneCDMS-img.jpg";
import "./ELN_LIMS.css";

export default function GeneCDMS() {
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
    link.href = "/GeneCDMS.pdf";
    link.download = "GeneCDMS.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src={GeneCDMSImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          <div className="title-name">GeneCDMS</div>
        </div>
      </div>
      <div className="subtitle-name">Compound & Data Management System</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GeneCDMS, a Compound & Data
          Management System (CDMS), is tailored to manage compound registration
          and store structural and chemical information in the database.
          Compounds undergo validation, QC, and normalization steps prior to
          registration, with resulting reports exportable to an Excel sheet.
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
        <div
          className="button-container"
          style={{ marginLeft: "3%" }}
          onClick={downloadPDF}>
          <a href="/brochure.pdf" download className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>Brochure</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              id="download-icon">
              <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm0 2c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7z" />
            </svg>
            <div className="wave-animation"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
