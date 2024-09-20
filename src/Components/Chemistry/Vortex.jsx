import React, { useState, useRef, useEffect } from "react";
import SarVisionImg from "../../assets/sarvision-img.png";
import "./Chemistry.css";

export default function Vortex() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src={SarVisionImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          <div className="title-name">Vortex</div>
        </div>
      </div>
      <div className="subtitle-name">
        Intuitive Data Visualization & Analysis for Chemistry Decision Support
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          &nbsp;&nbsp;VORTEX is an advanced data
          analysis and visualization module designed for managing and
          interacting with massive datasets across various data types, including
          numeric, textual, image, and chemical structures. It includes
          specialized tools for cheminformatics analyses like R-group,
          enumeration, SAR, and matched molecular pairs, while supporting
          large-scale datasets of millions of compounds or genomic sequences
        </div>
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
  );
}
