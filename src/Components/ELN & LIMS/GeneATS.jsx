import React, { useState } from "react";
import "./ELN_LIMS.css";
import FrameLine from "../../assets/frameline.svg";
import GeneATSImg from "../../assets/GeneATS.jpg";

export default function GeneATS() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/GeneATS.pdf";
    link.download = "GeneATS.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <div className="title-subtitle">
          <div className="title-name">
                GeneATS
              </div>
              <div
              className="subtitle-name">
              Analytical Ticketing System
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
          <div className="card-subdatas">
          <div className="brief-contents">
            Gene ATS optimizes the workflow for analytical sample processing by
            facilitating seamless ticket generation and management. It ensures
            that sample analysis requests are efficiently tracked and processed,
            enhancing communication and coordination among team members. The
            system integrates robust features that reduce turnaround time and
            improve overall efficiency. By streamlining the entire process, Gene
            ATS supports better resource allocation and timely completion of
            analytical tasks, ultimately boosting productivity and operational
            efficiency in laboratory environments.
          </div>
          </div>

          <button
        className="bronchurewithoutyt"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        onClick={downloadPDF}>
        <div style={{ fontSize: "14px", padding: "2% 2% 3% 15%" }}>
          Brochure
        </div>
        <div className="icon-container">
        <i
              className="fa-solid fa-download"
               id="start-icons"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}></i>
        </div>
      </button>
     
    </div>
  );
}
