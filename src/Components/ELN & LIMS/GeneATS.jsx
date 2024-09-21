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
    fetch("https://molecularsolutions.co.in/products/GeneATS.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "GeneATS.pdf"); 
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
          src="https://molecularsolutions.co.in/products/assets/geneATS-img-Dod5WgKs.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
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
      <div className="title-name">GeneATS</div>
      <div className="subtitle-name">Analytical Ticketing System</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
         Gene ATS optimizes the workflow
          for analytical sample processing by facilitating seamless ticket
          generation and management.<br/><br/>It ensures that sample analysis requests
          are efficiently tracked and processed, enhancing communication and
          coordination among team members.<br/><br/>The system integrates robust features
          that reduce turnaround time and improve overall efficiency.<br/><br/>By
          streamlining the entire process, Gene ATS supports better resource
          allocation and timely completion of analytical tasks, ultimately
          boosting productivity and operational efficiency in laboratory
          environments.
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
            <i class="fa-solid fa-file"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
    </div>
  );
}
