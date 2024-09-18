import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import Search from "../../assets/search.svg";
import Send from "../../assets/send.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "../../Lotties/Animation - 1725598060160.json";
import Productgenomics from "../../assets/productgenomics4.svg";
import GenomicsOval from "../../assets/GenomicsOval.svg";
import Commander from "./Commander";
import "./Genomics.css";

export default function GenomicsMain({ handleCommander }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (item, index) => {
    if (item.title === "Commander") {
      handleCommander();
    }
  };

  const products = [
    {
      image: Productgenomics,
      title: "Commander",
      content: "NGS data analysis",
    },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isHover, setisHover] = useState(false);

  // Download PDF function
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Commander.pdf";
    link.download = "Commander.pdf";
    link.click();
  };

  return (
    <div className="genomics-main">
      {/* <div style={{ display: "flex", width: "100%" , gap: "2.5rem"}} > */}
        {/* <div style={{display: "flex"}} className="genomic-container">
          <div
            style={{ fontSize: "25px", fontWeight: "600",width: "100%" }}
            >
            Genomics R & D
          </div>
       
        <Player
          autoplay
          loop
          src={Lottie}
          // style={{marginTop: "-20px"}}
          className="dna-lottie">
        </Player>
      </div> */}
      {/* <img src={GenomicsOval} className="ovalshape"/> */}
      <div className="card-container">
        <Commander/>
      </div>
      {/* <div className="card-container">hi</div> */}
      {/* </div> */}
    </div>
  );
}
