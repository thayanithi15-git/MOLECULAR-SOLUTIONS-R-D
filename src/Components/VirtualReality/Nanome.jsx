import React, { useState } from "react";
import "./VirtualReality.css";
import FrameLine from "../../assets/frameline.svg";
import NanomeImg from "../../assets/Nanome_Logo.png";

export default function Nanome() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Nanome_Flyer.pdf";
    link.download = "Nanome_Flyer.pdf";
    link.click();
  };

  return (
    <div className="right-contents-products">
      <div className="right-sub-contents">
        <div>
          <div style={{ display: "flex", marginTop: "0%" }}>
            <div
              className="title-productspage">
              {/* <img src={NanomeImg} style={{width: "8vw",marginTop: "5%"}}/> */}
              <div
                style={{ marginTop: "0%", marginLeft: "0%", width: "20vw" }}>
                Nanome
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
              CMolecular Design and Mixed Virtual Reality tool
            </div>
            <div className="brief-contents">
            Nanome is a mixed virtual reality software that revolutionizes the
            way scientists, researchers, and educators interact with molecular
            structures on an atomic level. It offers a 3D immersive environment
            where users can visualize and interact with molecular formations
            intuitively. Designed for collaboration, Nanome integrates
            seamlessly with other software and databases, allowing global teams
            to work together in real time. This platform accelerates discovery
            and development by making molecular design more accessible and
            interactive.
          </div>
          </div>

          <button
            className="bronchure"
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
            onClick={downloadPDF} 
          >
            <div style={{ fontSize: "14px", padding: "2% 2% 3% 15%" }}>
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
            <iframe
              className="ytvideo"
              width="50%"
              height="250"
              src="https://www.youtube.com/embed/p8yt_7he3mU?origin=https://yourdomain.com



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
