import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommanderImg from "../../assets/commander-img.jpg"
import "./Genomics.css";

export default function Commander() {
  const [isHover, setisHover] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Commander.pdf";
    link.download = "Commander.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src={CommanderImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 4), transparent)',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    color: 'white'
  }}>
          <div className="title-name" >Commander</div>
          <div className="subtitle-name" >NGS data analysis</div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMMANDER is a user-friendly software for NGS data analysis,
          generating professional reports on sequence quality, quantity,
          coverage, mutations, and variants. It features a GUI-based interface
          that eliminates the need for command-line scripting, making complex
          analyses accessible with a click. Compatible with major NGS platforms
          like Oxford Nanopore, Illumina, Thermo Fisher Scientific, and PacBio,
          it supports rapid data interpretation and insights. Ideal for small
          labs, it streamlines research processes and enhances productivity.
        </div>
      </div>
      <button
        className="bronchurewithoutyt"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        onClick={downloadPDF}>
        <div style={{ fontSize: "0.9rem", padding: "2% 2% 3% 15%" }}>
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
