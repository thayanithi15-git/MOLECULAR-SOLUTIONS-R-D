import React, { useState } from "react";
import "./Genomics.css";
import FrameLine from "../../assets/frameline.svg";
import CommanderImg from "../../assets/Commander.jpg";

export default function Commander() {
  const [isHover, setisHover] = useState(false);

  // Download PDF function
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Commander.pdf";
    link.download = "Commander.pdf";
    link.click();
  };

  return (
    <div className="right-contents-products" style={{alignItems: "center"}}>
      <div className="right-sub-contents">
      <div className="title-productspage">
          <div className="title-subtitle">
          <div style={{ marginTop: "0%", marginLeft: "0%" }}>Commander</div>
          <div className="subtitle-productspage">NGS data analysis</div>
          </div>
        </div>
        <div style={{ color: "#667085", fontSize: "14px", marginTop: "2%"  }} className="card-subdatas">
          
          <div className="brief-contents">
            COMMANDER is a user-friendly software for NGS data analysis,
            generating professional reports on sequence quality, quantity,
            coverage, mutations, and variants. It features a GUI-based interface
            that eliminates the need for command-line scripting, making complex
            analyses accessible with a click. Compatible with major NGS
            platforms like Oxford Nanopore, Illumina, Thermo Fisher Scientific,
            and PacBio, it supports rapid data interpretation and insights.
            Ideal for small labs, it streamlines research processes and enhances
            productivity.
          </div>
          <button
            className="bronchure"
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
            onClick={downloadPDF} // Trigger download on click
          >
            <div style={{ fontSize: "0.9rem", padding: "2% 2% 3% 15%" }}>
              Brochure
            </div>
            <div className="icon-container">
              {!isHover && (
                <i className="fa-solid fa-arrow-right" id="start-icons"></i>
              )}
              {isHover && (
                <i
                  className="fa-solid fa-download"
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    opacity: isHover ? 1 : 0,
                    transform: isHover ? "rotate(360deg)" : "rotate(0deg)",
                  }}></i>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
