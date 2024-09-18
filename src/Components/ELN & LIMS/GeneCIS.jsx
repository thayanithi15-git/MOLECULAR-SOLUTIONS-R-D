import React, { useState } from "react";
import GeneCISImg from "../../assets/geneCIS-img.jpg";
import "./ELN_LIMS.css";

export default function GeneCIS() {
  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
      <img src={GeneCISImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">GeneCIS</div>
          <div className="subtitle-name">Chemical Inventory System</div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gene CIS optimizes chemical inventory management by digitizing legacy
          data, enabling chemists to seamlessly integrate and utilize historical
          chemicals. It tracks the lifecycle of chemicals, including
          procurement, storage, handling, usage, cleanup, and disposal. The
          system provides detailed insights into chemical usage, expiry dates,
          and inventory status through its dashboard and MIS reports, enhancing
          accuracy and operational efficiency.
        </div>
      </div>
    </div>
  );
}
