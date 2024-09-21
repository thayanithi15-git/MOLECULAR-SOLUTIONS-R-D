import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CommanderImg from "../../assets/commander-img.jpg";
import "./Genomics.css";

export default function Commander() {
  const [isHover, setisHover] = useState(false);
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
    fetch("https://molecularsolutions.co.in/products/Commander.pdf")
      .then(response => response.blob()) // Convert response to a blob
      .then(blob => {
        const url = window.URL.createObjectURL(blob); // Create a URL for the blob
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Commander.pdf"); // Set the download attribute
        document.body.appendChild(link);
        link.click(); // Simulate click to trigger download
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up
      })
      .catch(err => console.error("Error downloading PDF:", err));
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src="https://molecularsolutions.co.in/products/assets/commander-img-SwXbBybO.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
        </div>
      </div>
      <div className="title-name">Commander</div>
      <div className="subtitle-name">NGS data analysis</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          style={{ textAlign: "justify" }}
          ref={textRef}>
          COMMANDER is a user-friendly
          software for NGS data analysis, generating professional reports on
          sequence quality, quantity, coverage, mutations, and variants. It
          features a GUI-based interface that eliminates the need for
          command-line scripting, making complex analyses accessible with a
          click. <br/><br/>Compatible with major NGS platforms like Oxford Nanopore,
          Illumina, Thermo Fisher Scientific, and PacBio, it supports rapid data
          interpretation and insights. Ideal for small labs, it streamlines
          research processes and enhances productivity.
        </div>
        <div>
          {isOverflowing && (
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="view-button" >
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
