import React, { useState } from "react";
import "./Chemistry.css";
import FrameLine from "../../assets/frameline.svg";
import ChemAIRSImg from "../../assets/ChemAIRS.png";

export default function ChemAIRS() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/ChemAIRS-Bronchure.pdf";
    link.download = "ChemAIRS.pdf";
    link.click();
  };

  return (
    <div className="right-contents-products">
      <div className="right-sub-contents">
        <div>
          <div style={{ display: "flex", marginTop: "0%" }}>
            <div
              className="title-productspage">
              {/* <img src={ChemAIRSImg} style={{width: "3vw",marginTop: "5%"}}/> */}
              <div style={{ marginTop: "0%", marginLeft: "0%" }}>ChemAIRS </div>
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
              Most advanced AI/ML/ Knowledge & Data driven retrosynthetic
              software
            </div>
            <div className="brief-contents">
            SARvision | Biologics is a desktop application designed to transform
            biologics informatics. With its intuitive smart interface, it
            enables users to read, organize, and analyze data on peptides,
            proteins, nucleic acids, chemically modified residues, and unnatural
            amino acids. The software has advanced visualization tools like
            mutation cliffs, sequence maps, graphs and efficient sequence
            alignments for large datasets. Actively filter data based on
            chemotype, scaffold, data range and properties. Users can seamlessly
            export their analysis to Excel and leverage advanced search
            capabilities for efficient data retrieval. SARvision | Biologics
            enhances research workflow by providing deeper insights and
            streamlining data management for more impactful discoveries
          </div>
          </div>

          <button
            className="bronchure"
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
            onClick={downloadPDF} // Trigger download on click
          >
            <div style={{ fontSize: "14px", padding: "2% 2% 3% 15%" }}>
              Brochure
            </div>
            <div
              className="icon-container"
              >
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
            <iframe
              className="ytvideo"
              width="50%"
              height="250"
              src="https://www.youtube.com/embed/diU-ppGqnqI?origin=https://yourdomain.com

"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <img src={FrameLine} alt="frameline" style={{ width: "8vw" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
