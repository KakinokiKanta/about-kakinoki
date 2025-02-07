if (process.env.NODE_ENV === "production") {
  module.exports = require("pdfjs-dist/build/pdf.worker.min.mjs");
} else {
  module.exports = require("pdfjs-dist/build/pdf.worker.mjs");
}
