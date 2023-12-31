"use client";

import styles from "./Model.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorkerSrc from "@/../pdf-worker";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

export const Model = () => {
  const [numPages, setNumPages] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <h3 className={styles.h3} id="model">
        KatLab設計書(モデル)
      </h3>
      <div className={styles.flame}>
        <Document
          file="/robocon/ADV_063_KatLab.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={1100}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};
