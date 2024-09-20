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
    const link = document.createElement("a");
    link.href = "/Commander.pdf";
    link.download = "Commander.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src={CommanderImg}
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
          style={{ marginLeft: "3%", marginTop: "1%" }}
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
