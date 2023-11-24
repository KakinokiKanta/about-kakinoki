"use client";

import styles from "./Model.module.css";
import { Document, Page } from "react-pdf";

export const Model = () => {
  return (
    <div>
      <Document file="/robocon/ADV_063_KatLab.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
