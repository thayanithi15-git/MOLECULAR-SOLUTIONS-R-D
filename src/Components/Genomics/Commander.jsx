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
        <div>
          <div style={{ display: "flex", marginTop: "0%" }}>
            <div
              className="title-productspage">
              {/* <img src={CommanderImg} style={{width: "5vw",marginTop: "0%"}}/> */}
              <div style={{ marginTop: "0%", marginLeft: "0%" }}>Commander</div>
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
          <div style={{ color: "#667085", fontSize: "14px", marginTop: "2%" }}>
            <div
              className="subtitle-productspage">
              NGS data analysis
            </div>
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
            <div
              className="icon-container">
              {!isHover && (
                <i
                  className="fa-solid fa-arrow-right"
                  id="start-icons"></i>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {/* <iframe
              className="ytvideo"
              width="50%"
              height="250"
              src="https://www.youtube.com/embed/QFaFIcGhPoM?origin=https://yourdomain.com"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <img src={FrameLine} alt="frameline" style={{ width: "8vw" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
