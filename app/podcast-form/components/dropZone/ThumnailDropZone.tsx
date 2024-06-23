import React, { useContext, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PodcastDataContext } from "../context/PodcastContext";
import readFile from "../../functions/readFile";
import { MdUpload } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const ThumnailDropZone: React.FC<{}> = () => {
  const { thumnailFile, setThumnailFile } = useContext(PodcastDataContext);
  const [onHover, setOnHover] = useState(false);
  const previewImageRef = useRef<any>(null);
  function removeImage() {
    setThumnailFile(null);
  }
  useEffect(() => {
   readFile(previewImageRef, thumnailFile);
  }, [thumnailFile]);
  readFile(previewImageRef, thumnailFile);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 5,
    onDropAccepted: (file) => {
      setThumnailFile(file[0]);
      console.log(thumnailFile);
    },
    onDropRejected: () => {
      acceptedFiles.length = 0;
    },
  });
  return (
    <div
      className="w-full h-full flex justify-center items-center cursor-pointer  overflow-hidden relative"
      {...getRootProps()}
    >
      {!(thumnailFile instanceof File) && (
        <div className="w-[50px] h-[50px] flex justify-center items-center  rounded-full bg-ft-primary-yellow-600 text-white text-3xl">
          <MdUpload />
        </div>
      )}
      {thumnailFile instanceof File && (
        <div
          onMouseEnter={(e) => {
            setOnHover(true);
          }}
          onMouseLeave={(e) => {
            setOnHover(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full h-full flex justify-center items-center cursor-default bg-ft-primary-blue-600"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={
              "w-full h-full flex justify-center items-center absolute top-0 left-0 bg-black opacity-60 " +
              (onHover ? "block" : "hidden")
            }
          >
            <div
              onClick={removeImage}
              className="cursor-pointer text-white text-6xl"
            >
              <FaRegTrashAlt />
            </div>
          </div>

          <img
            ref={previewImageRef}
            className="h-full top-0 object-contain"
          />
        </div>
      )}
    </div>
  );
};
export default ThumnailDropZone;
