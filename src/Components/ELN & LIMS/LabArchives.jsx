import React, { useState } from "react";
import "./ELN_LIMS.css";
import { Dialog } from "@mui/material";
import YtIcon from "../../assets/yt.svg";

export default function LabArchives() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const handleClickOpenVideoDialog = () => {
    setOpenVideoDialog(true);
  };

  const handleCloseVideoDialog = () => {
    setOpenVideoDialog(false);
  };

  return (
    <div className="right-sub-contents">
    <div className="title-productspage">
      <div className="title-subtitle">
        <div className="title-name">
                LabArchives
              </div>
              <div
              className="subtitle-name">
              The Easy-to-use Electronic Lab Notebook
            </div>
            </div>
          </div>
          <div className="card-subdatas">
        <div className="brief-contents">
            GeneELN electronically capture / document all the research,
            experiments, calculations and procedures performed in laboratory
            setup.
          </div>
</div>
<div style={{ display: "flex", alignItems: "center" }}>
        <div className="bronchurewithoutdownload" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt">
            <img src={YtIcon} style={{ width: "2.5vw" }} />
          </div>
        </div>


          <Dialog
            open={openVideoDialog}
            onClose={() => setOpenVideoDialog(false)}
            fullScreen
            PaperProps={{
              style: {
                margin: "16.2%",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}>
           <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jnGX0Lh4-Fg?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          </Dialog>
          </div>
        </div>
  );
}
