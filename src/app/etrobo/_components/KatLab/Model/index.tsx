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
    <div className={styles.flame}>
      <Document
        file="/robocon/ADV_063_KatLab.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className={styles.pdf}
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
};
