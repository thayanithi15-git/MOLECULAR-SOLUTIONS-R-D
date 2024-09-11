import React, { useState } from "react";
import "./ELN_LIMS.css";
import FrameLine from "../../assets/frameline.svg";

export default function DotmaticsELN() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/SARVision Chemistry Flyer.pdf";
    link.download = "SARVision Chemistry Flyer.pdf";
    link.click();
  };

  return (
    <div className="right-contents-products" style={{alignItems: "center"}}>
      <div className="right-sub-contents">
        <div>
          <div style={{ display: "flex", marginTop: "2%" }}>
            <div
              className="title-productspage">
              Dotmatics ELN
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
              Simplify Scientific Discovery with a Powerful Online ELN
            </div>
            <div className="brief-contents">
            Dotmatics ELN enables seamless collaborative research by capturing
            and securely storing experimental data in a unified digital
            notebook. With flexible templates for chemistry, biologics, and
            materials science, it supports diverse scientific workflows. Its
            integrated system ensures smooth data flow between experiment
            registration, screening, and decision support, optimizing the
            innovation process.
          </div>
          </div>

          {/* <button
          style={{
            display: "flex",
            borderRadius: "20px",
            padding: "0.3%",
            border: "none",
            backgroundColor: "#565ADD",
            color: "white",
            height: "5.5vh",
            width: "9vw",
            alignItems: "center",
            marginLeft: "83%",
            marginTop: "2%",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          onClick={downloadPDF} // Trigger download on click
        >
          <div style={{ fontSize: "14px", padding: "2% 2% 3% 15%" }}>
            Brochure
          </div>
          <div
            className="icon-container"
            style={{
              marginLeft: "10%",
              borderRadius: "50%",
              padding: "4%",
              width: "20vw",
              height: "65%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}>
            {!isHover && (
              <i
                className="fa-solid fa-arrow-right"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "50%",
                  padding: "4%",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  opacity: isHover ? 0 : 1,
                  transform: isHover ? "rotate(360deg)" : "rotate(0deg)",
                }}></i>
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
        </button> */}
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
