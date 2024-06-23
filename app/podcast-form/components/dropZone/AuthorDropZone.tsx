import React, { useContext, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PodcastDataContext } from "../context/PodcastContext";
import { MdUpload } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import readFile from "../../functions/readFile";

const AuthorDropZone: React.FC<{ currentAuthorIndex: number }> = ({
  currentAuthorIndex,
}) => {
  const { authorFiles, setAuthorFiles } = useContext(PodcastDataContext);
  const [onHover, setOnHover] = useState(false);
  const previewImageRef = useRef<any>(null);

  function removeImage(){
    authorFiles[currentAuthorIndex - 1] = null;
    setAuthorFiles([...authorFiles]);
  }
  useEffect(() => {
   readFile(previewImageRef, authorFiles[currentAuthorIndex - 1]) 
  }, [authorFiles, currentAuthorIndex]);
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
      "image/webp": [],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 5,
    onDropAccepted: (file) => {
      authorFiles[currentAuthorIndex - 1] = file[0];
      setAuthorFiles([...authorFiles]);
    },
    onDropRejected: () => {
      acceptedFiles.length = 0;
    },
  });
  return (
    <div
      className="w-full h-full overflow-hidden relative flex justify-center items-center cursor-pointer"
      {...getRootProps()}
    >
      {!authorFiles[currentAuthorIndex - 1] && (
        <div className="w-[50px] h-[50px] rounded-full bg-ft-primary-yellow-600 text-white text-3xl flex justify-center items-center">
          <MdUpload />
        </div>
      )}
      {authorFiles[currentAuthorIndex - 1] && (
        <div
          onMouseEnter={(e) => {
            setOnHover(true);
          }}
          onMouseLeave={(e) => {
            setOnHover(false);
          }}
          className="w-full h-full cursor-default flex justify-center items-center relative"
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
            <div onClick={removeImage} className="cursor-pointer text-white text-6xl">
              <FaRegTrashAlt />
            </div>
          </div>
          <img ref={previewImageRef} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};
export default AuthorDropZone;
