import React, { useState, useRef, useEffect } from "react";
import MedchemImg from "../../assets/medchem-img.jpg";
import "./Chemistry.css";

export default function Medchem_Designer() {
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
    link.href = "/Medchem_Designer_Flyer.pdf";
    link.download = "Medchem_Designer_Flyer.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src={MedchemImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">Medchem Designer</div>
      <div className="subtitle-name">
      Model Based Drug Development tool
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          Monolix Suite is the most advanced and simple solution for non-linear
          mixed-effects modeling (NLME), designed specifically for
          pharmacometrics. It uses SAEM algorithm, which provides robust, global
          convergence even for complex PK/PD models. Monolix is widely used for
          preclinical and clinical population PK/PD modeling, as well as for
          Systems Pharmacology, offering unmatched capabilities in model-based
          drug development. Its intuitive interface allows for easy parameter
          estimation, model diagnosis, and graphical representation, making it
          ideal for both beginners and experts. Monolix Suite delivers reliable
          results in population analysis, streamlining the modeling and
          simulation process for pharmacokinetics, pharmacodynamics, and
          clinical trial simulations.
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
          style={{ marginLeft: "3%", marginTop: "2%" }}
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
