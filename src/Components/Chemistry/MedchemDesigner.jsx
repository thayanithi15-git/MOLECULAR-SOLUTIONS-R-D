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
      <div className="subtitle-name">Model Based Drug Development tool</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          MedChem Designer™ combines advanced molecule drawing capabilities with
          fast and accurate ADMET property prediction. <br/><br/>It provides chemists
          working in fields such as pharmaceuticals, cosmetics, industrial
          chemicals, herbicides, pesticides, and food applications with an
          intuitive interface that offers convenience features not found in
          other molecule drawing software. <br/><br/>MedChem Designer allows users to
          quickly sketch molecules while seamlessly integrating ADMET
          predictions, including logP, logD(7.4), Polar Surface Area, and
          Lipinski&#39;s Rule of 5 calculations. <br/><br/>This tool streamlines the
          design process by providing real-time insights into the properties of
          new compounds, making it an essential resource for chemical designers.
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
      <div className="button-container-brochure" onClick={downloadPDF}>
          <a href="/brochure.pdf" download className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>BROCHURE</div>
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
    </div>
  );
}
