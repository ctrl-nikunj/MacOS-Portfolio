import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { getAssetPath } from "@/utils/helpers";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume</h2>
        <a
          href={getAssetPath("/files/NikunjGoyal_Full_Stack_MERN_PERN.pdf")}
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download size={15} className="icon" />
        </a>
      </div>
      <Document
        file={getAssetPath("/files/NikunjGoyal_Full_Stack_MERN_PERN.pdf")}
      >
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
