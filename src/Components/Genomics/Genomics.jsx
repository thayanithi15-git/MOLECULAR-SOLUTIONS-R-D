import React from "react";
import Commander from "./Commander";
import "./Genomics.css";

export default function GenomicsMain() {
  return (
    <div className="genomics-main"  id="genomics-main">
      <div className="products-contents">
        <div className="card-container">
          <Commander />
        </div>
      </div>
    </div>
  );
}
