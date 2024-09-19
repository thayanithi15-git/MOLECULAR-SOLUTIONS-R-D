import React, { useState, useRef, useEffect } from "react";
import "./ELN_LIMS.css";
import GeneATSImg from "../../assets/geneATS-img.jpg";
import FrameLine from "../../assets/frameline.svg";

export default function GeneATS() {
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
    link.href = "/GeneATS.pdf";
    link.download = "GeneATS.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src={GeneATSImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          <div className="title-name">GeneATS</div>
        </div>
        {/* <div
            style={{
              fontSize: "20px",
              fontWeight: "550",
              color: "#E1B73E",
              marginLeft: "3%",
            }}>
            NGS data analysis
          </div> */}
      </div>
      <div className="subtitle-name">Analytical Ticketing System</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gene ATS optimizes the workflow
          for analytical sample processing by facilitating seamless ticket
          generation and management. It ensures that sample analysis requests
          are efficiently tracked and processed, enhancing communication and
          coordination among team members. The system integrates robust features
          that reduce turnaround time and improve overall efficiency. By
          streamlining the entire process, Gene ATS supports better resource
          allocation and timely completion of analytical tasks, ultimately
          boosting productivity and operational efficiency in laboratory
          environments.
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
