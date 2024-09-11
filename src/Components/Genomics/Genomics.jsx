import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import Search from "../../assets/search.svg";
import Send from "../../assets/send.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "../../Lotties/Animation - 1725598060160.json";
import Productgenomics from "../../assets/productgenomics4.svg";
import "./Genomics.css";

export default function GenomicsMain({handleCommander}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (item, index) => {
    if (index === 0) {
      handleCommander();
    }
  }

  const products = [
    {
      image: Productgenomics,
      title: "Commander",
      content: "NGS data analysis",
    },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="genomics-main">
      <div style={{ display: "flex", width: "100%" }}>
        <div>
          <div
            style={{ color: "#4773E1", fontSize: "25px", fontWeight: "600" }}>
            Genomics R & D
          </div>
            <div className="brief-contents" style={{marginTop: "5%",width: "90%",fontSize: "16px"}}>
          Software for genomic data analysis is crucial in decoding complex
            genetic information, driving breakthroughs in drug discovery. By
            analyzing vast genomic datasets, this software enables precise
            identification of genetic targets, paving the way for personalized
            medicine and innovative treatments.
          </div>
        </div>
        <Player
          autoplay
          loop
          src={Lottie}
          className="dna-lottie">
        </Player>
      </div>

      <div className="input-container">
        <TextField
          variant="outlined"
          placeholder="Search..."
          className="search-bar-genomics"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Handle search query input
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Search} alt="search icon" style={{ width: 20 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src={Send} alt="send icon" style={{ width: 25 }} />
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              textAlign: "left",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4621DD',
            },
              "& input::placeholder": {
                color: "grey",
                marginLeft: "5%",
              },
              '&.Mui-focused': {
              borderColor: '#4621DD',
              boxShadow: '0 0 3px #4621DD',
            },
            },
          }}
        />
      </div>
      <div className="products-grid">
        {filteredProducts.map((item, index) => (
          <div className="products" key={index} onClick={() => handleItemClick(item, index)}>
            <img src={item.image} className="img-genomics" alt="img" />
            <div>
              <div className="title-nav">{item.title}</div>
              <div className="content-nav">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
