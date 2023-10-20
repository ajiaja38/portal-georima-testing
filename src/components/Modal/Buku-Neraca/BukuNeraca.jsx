import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../../../assets/doc/Buku_Neraca.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const BukuNeracaModal = ({ closeModal }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 4);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 4);
    }
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/30 z-[999999]"
      ></div>
      <div className="bg-gray-900 fixed inset-0 p-3 z-[99999999] animate__animated animate__fadeIn">
        <div
          onClick={closeModal}
          className="absolute top-3 right-3 text-yellow-500 text-2xl cursor-pointer"
        >
          <AiFillCloseSquare />
        </div>
        <h1 className="p-2 font-bold text-2xl text-yellow-400 text-center">
          Buku Neraca
        </h1>
        <div className="relative p-3 bg-white rounded mt-5 h-[33rem] w-full flex flex-col justify-between">
          <section className="flex justify-center items-center p-5 py-7">
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              <div className="w-full flex justify-between gap-5">
                <Page
                  pageNumber={pageNumber}
                  height={390}
                  renderTextLayer={false}
                />
                <Page
                  pageNumber={pageNumber + 1}
                  height={390}
                  renderTextLayer={false}
                />
                <Page
                  pageNumber={pageNumber + 2}
                  height={390}
                  renderTextLayer={false}
                />
                <Page
                  pageNumber={pageNumber + 3}
                  height={390}
                  renderTextLayer={false}
                />
              </div>
            </Document>
          </section>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={goToPreviousPage}
                disabled={pageNumber === 1}
                className="px-3 py-1 bg-yellow-400 text-white rounded focus:outline-none text-sm"
              >
                Previous
              </button>
              <button
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
                className="px-3 py-1 bg-yellow-400 text-white rounded focus:outline-none text-sm"
              >
                Next
              </button>
            </div>
            <footer className="w-full bottom-0 border-black border-t-2">
              <p className="text-xs font-bold text-center mt-1">
                Geological Resource of Indonesia Multiplatform Application
                (GeoRIMA){' '}
                <span className="font-normal">
                  © 2023 PSDMBP, Map by PPTIK ITB
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BukuNeracaModal;
