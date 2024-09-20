import React, { useState, useRef, useEffect } from "react";
import DotmaticsImg from "../../assets/dotmatics-img.jpg";
import "./ELN_LIMS.css";

export default function DotmaticsELN() {
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
          src={DotmaticsImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
         
        </div>
      </div>
      <div className="title-name">Dotmatics ELN</div>
      <div className="subtitle-name">
        Simplify Scientific Discovery with a Powerful Online ELN
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          Dotmatics ELN enables seamless
          collaborative research by capturing and securely storing experimental
          data in a unified digital notebook. With flexible templates for
          chemistry, biologics, and materials science, it supports diverse
          scientific workflows. Its integrated system ensures smooth data flow
          between experiment registration, screening, and decision support,
          optimizing the innovation process.
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
