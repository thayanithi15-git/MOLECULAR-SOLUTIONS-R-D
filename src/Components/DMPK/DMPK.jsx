import React from "react";
import GastroPlus from "./GastroPlus";
import ILDsym from "./ILDsym";
import "./DMPK.css";

export default function DMPK() {
  return (
    <div className="genomics-main">
      <div className="products-contents">
        <div className="card-container">
          <GastroPlus />
        </div>
        <div className="card-container">
          <ILDsym />
        </div>
      </div>
    </div>
  );
}
