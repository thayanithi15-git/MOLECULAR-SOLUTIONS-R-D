import React, { useState, useRef, useEffect } from "react";
import GeneCISImg from "../../assets/geneCIS-img.jpg";
import "./ELN_LIMS.css";

export default function GeneCIS() {
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
          src={GeneCISImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
        </div>
      </div>
      <div className="title-name">GeneCIS</div>
      <div className="subtitle-name">Chemical Inventory System</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          Gene CIS optimizes chemical
          inventory management by digitizing legacy data, enabling chemists to
          seamlessly integrate and utilize historical chemicals. It tracks the
          lifecycle of chemicals, including procurement, storage, handling,
          usage, cleanup, and disposal. The system provides detailed insights
          into chemical usage, expiry dates, and inventory status through its
          dashboard and MIS reports, enhancing accuracy and operational
          efficiency.
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
    </div>
  );
}
