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
    fetch("https://molecularsolutions.co.in/products/GeneCDMS.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "GeneCDMS.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error("Error downloading PDF:", err));
  };


  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src="https://molecularsolutions.co.in/products/assets/geneCDMS-img-DffotWZD.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
        </div>
      </div>
      <div className="title-name">GeneCDMS</div>
      <div className="subtitle-name">Compound & Data Management System</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          GeneCDMS, a Compound & Data
          Management System (CDMS), is tailored to manage compound registration
          and store structural and chemical information in the database.<br/><br/>
          Compounds undergo validation, QC, and normalization steps prior to
          registration, with resulting reports exportable to an Excel sheet.
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
      <div className="button-container-brochure" onClick={downloadPDF}>
          <a className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>BROCHURE</div>
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
    </div>
  );
}
