import React, { useState } from "react";
import "./AIML.css";
import FrameLine from "../../assets/frameline.svg";
import { ImportExport } from "@mui/icons-material";
import LumaImg from "../../assets/LUMA.jpg";

export default function Luma() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Dotmatics LUMA.pdf";
    link.download = "Dotmatics LUMA.pdf";
    link.click();
  };

  return (
    <div className="right-contents-products">
      <div className="right-sub-contents">
        <div>
          <div style={{ display: "flex", marginTop: "2%" }}>
            <div
              className="title-productspage">
              {/* <img src={LumaImg} style={{width: "3vw",marginTop: "5%"}}/> */}
              <div style={{ marginTop: "0%", marginLeft: "0%", width: "20vw" }}>
                LUMA{" "}
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
              The AI-native Multimodal Scientific Intelligence Platform
            </div>
            <div className="brief-contents">
            LUMA is a low-code laboratory informatics platform by Dotmatics that
            integrates with various scientific software to streamline data
            management and collaboration. It offers visualization and analysis
            tools, enabling scientists to efficiently organize and share data.
            LUMA enhances research productivity by tailoring to unique
            scientific needs.
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
              src="https://www.youtube.com/embed/1Gi4Ruse2QQ?origin=https://yourdomain.com


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
