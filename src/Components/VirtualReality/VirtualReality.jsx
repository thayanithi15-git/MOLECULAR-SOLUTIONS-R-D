import React from "react";
import Nanome from "./Nanome";
import "./VirtualReality.css";

export default function VirtualRealityMain() {
  return (
    <div className="genomics-main"  id="vr-main">
      <div className="products-contents-individual">
        <div className="card-container">
          <Nanome />
        </div>
      </div>
    </div>
  );
}
