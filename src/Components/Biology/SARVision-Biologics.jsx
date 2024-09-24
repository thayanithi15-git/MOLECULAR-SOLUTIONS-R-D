import React, { useState, useRef, useEffect } from "react";
import "./Biology";
import { Dialog } from "@mui/material";
import SarVisionBiologyImg from "../../assets/biology-img.png";
import YtIcon from "../../assets/yt.svg";
import { IoVideocam } from "react-icons/io5";

export default function SarVision_Biologics() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  const downloadPDF = () => {
    fetch("https://molecularsolutions.co.in/products/SARvision_Biologics.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "SARvision_Biologics.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error("Error downloading PDF:", err));
  };

  const handleClickOpenVideoDialog = () => {
    setOpenVideoDialog(true);
  };

  const handleCloseVideoDialog = () => {
    setOpenVideoDialog(false);
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <img
          src="https://molecularsolutions.co.in/products/assets/biology-img-De61GI7u.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          
        </div>
      </div>
      <div className="title-name">SARvision|Biologics</div>
      <div className="subtitle-name">
        Biologics SAR data analysis for Proteins, Peptides, Antibody and PROTACS
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          SARvision|Biologics is a desktop
          application designed to transform biologics informatics. With its
          intuitive smart interface, it enables users to read, organize, and
          analyze data on peptides, proteins, nucleic acids, chemically modified
          residues, and unnatural amino acids. <br/><br/>The software has advanced
          visualization tools like mutation cliffs, sequence maps, graphs and
          efficient sequence alignments for large datasets. Actively filter data
          based on chemotype, scaffold, data range and properties. <br/><br/>Users can
          seamlessly export their analysis to Excel and leverage advanced search
          capabilities for efficient data retrieval. SARvision|Biologics
          enhances research workflow by providing deeper insights and
          streamlining data management for more impactful discoveries
        </div>
        <div>
          {isOverflowing && (
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="view-button">
              {isExpanded ? "" : "View More"}
            </div>
          )}
        </div>
      </div>

      <div className="bottom-buttons">
      <div className="button-containers" onClick={downloadPDF}>
          <a  className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>BROCHURE</div>
            <i class="fa-solid fa-file"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
        <div className="bronchure-t" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt" style={{ display: "flex" }}>
          <div className="refined-animated-button-yt">
            <p className="presentation">VIDEO</p>
            <IoVideocam className="video-icon"/>
            <div className="wave-animation"></div>
</div>
          </div>
        </div>
      
        
        

        <Dialog
      className="yt-dialog"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
          <div 
        className="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fIxwXrlUM54?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            </div>
        </Dialog>
      </div>
    </div>
  );
}
