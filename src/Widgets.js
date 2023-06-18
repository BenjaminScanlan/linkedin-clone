import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Midterm Elections are here!", "Will the youth turn out?")}
      {newsArticle("Elon Musk Buys Twitter", "Whos on the chopping board?")}
      {newsArticle("Remote work becoming more available", "A blessing!")}
      {newsArticle(
        "More people are opting out of college",
        "Crisis, or innovation?"
      )}
      {newsArticle("Cable news is dying", "Internet is king")}
      {newsArticle("Less is more", "Or is more more?")}
    </div>
  );
}

export default Widgets;
