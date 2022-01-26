import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export default function BookName() {
  return (
    <>
      <div>
        <h3>Beyond Entrepreneurship</h3>
        <p>Jim Collins {"&"} Billy lazier</p>
        <p id="book-name-minute-read">
          <AccessTimeIcon fontSize="small" />
          <span id="minute"> 13 minute read</span>
        </p>
        <p id="book-name-dots">
          <MoreHorizIcon fontSize="large" />
        </p>
        <div id="show-off"></div>
      </div>
    </>
  );
}
