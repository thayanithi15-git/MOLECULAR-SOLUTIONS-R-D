import React, { useState, useRef, useEffect } from "react";
import GeneBISImg from "../../assets/geneBIS-img.jpg";
import "./ELN_LIMS.css";

export default function GeneBIS() {
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
    fetch("https://molecularsolutions.co.in/products/GeneBIS.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "GeneBIS.pdf"); 
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
          src="https://molecularsolutions.co.in/products/assets/geneBIS-img-B3dykO5Q.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
        </div>
      </div>
      <div className="title-name">GeneBIS</div>
      <div className="subtitle-name">
        Chemical and Biology material Inventory Management system
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          Gene BIS is an Inventory
          Management System for chemical and biologics materials that
          streamlines management with advanced features.<br/><br/>It includes a barcode
          mechanism for labeling, printing, and storing materials in specified
          locations.<br/><br/>The system automates expiry material report generation with
          weekly email notifications and displays stock availability by store
          location.<br/><br/>Comprehensive MIS reports and dashboards provide insights
          into material receipt, requests, issues, zero inventory, and
          fast-moving materials, enhancing overall inventory optimization.
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
