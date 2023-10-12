import React from "react";
import "./header.css";

function PDFHeader() {
  return (
    <>
      <div className="main-header-div mt-3 p-2">
        <div className="header">
          <i class="fa-solid fa-messages" />
          <h4>RealAssit.AI</h4>
        </div>
        <div className="address">
          <h6>123 Main Street, Dover, NH 03820-4667</h6>
        </div>
      </div>
      <div className="blue-bar-header"></div>
    </>
  );
}

function PDFFooter() {
  return (
    <>
      <div className="blue-bar-header mt-5"></div>
      <div className="main-footer-div">
        <div className="footer">
          <i class="fa-regular fa-messages"></i>
          <h6 style={{ color: "#0F85FF" }}>
            Report Generated on September 26, 2023
          </h6>
        </div>
        <div className="address">
          <h6>RealAssist Property Report | Page 1 of 25</h6>
        </div>
      </div>
    </>
  );
}

export { PDFHeader, PDFFooter };
