import React, { useState } from "react";
import "./Chemistry.css";
import FrameLine from "../../assets/frameline.svg";
import MedchemImg from "../../assets/medchem_designer.png";

export default function Medchem_Designer() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Medchem_Designer_Flyer.pdf";
    link.download = "Medchem_Designer_Flyer.pdf";
    link.click();
  };

  return (
    <div className="right-contents-products" style={{alignItems: "center"}}>
      <div className="right-sub-contents">
        <div>
          <div style={{ display: "flex", marginTop: "0%" }}>
            <div
              className="title-productspage">
              {/* <img src={MedchemImg} style={{width: "3vw",marginTop: "5%"}}/> */}
              <div style={{ marginTop: "0%", marginLeft: "0%", width: "20vw" }}>
                Medchem Designer{" "}
              </div>
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
              Chemical Structure Drawing and Property Prediction tool
            </div>
            <div className="brief-contents">
            MedChem Designer is a chemical sketching tool that integrates
            advanced molecule drawing capabilities with quick and accurate ADMET
            property predictions from our top-rated ADMET Predictor software.
            These predictions include logP, logD(7.4), Polar Surface Area, and
            Lipinski's Rule of 5 calculations.
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
            {/* <iframe
            className="ytvideo"
            width="50%"
            height="250"
            src="https://www.youtube.com/embed/1Gi4Ruse2QQ?origin=https://yourdomain.com


"
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
