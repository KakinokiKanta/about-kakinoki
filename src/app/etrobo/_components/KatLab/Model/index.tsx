"use client";

import styles from "./Model.module.css";
import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorkerSrc from "@/../pdf-worker";
import { useState } from "react";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url,
).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;

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
          file="/robocon/KatLab_2024.pdf"
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
