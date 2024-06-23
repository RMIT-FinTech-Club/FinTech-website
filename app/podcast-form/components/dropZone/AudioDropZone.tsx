import React, { useContext, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PodcastDataContext } from "../context/PodcastContext";
import readFile from "../../functions/readFile";
import { MdUpload } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const AudioDropZone: React.FC<{}> = () => {
  const { audioFile, setAudioFile } = useContext(PodcastDataContext);
  const [onHover, setOnHover] = useState(false);
  const previewAudioRef = useRef<any>();
  function removeAudio() {
    setAudioFile(null);
  }
  useEffect(() => {
    if (previewAudioRef.current) {
      readFile(previewAudioRef, audioFile);
    }
  }, [audioFile]);
  readFile(previewAudioRef, audioFile);
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
      "audio/mpeg": [],
      "audio/wav": [],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 1024 * 5,
    onDropAccepted: (file) => {
      setAudioFile(file[0]);
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
      {!(audioFile instanceof File) && (
        <div className="w-[50px] h-[50px] rounded-full bg-ft-primary-yellow-600 text-white text-3xl flex justify-center items-center">
          <MdUpload />
        </div>
      )}
      {audioFile instanceof File && (
        <div
          className="w-full h-full bg-ft-primary-blue-600 cursor-default flex justify-center items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <audio
            onClick={(e) => {
              e.stopPropagation();
            }}
            ref={previewAudioRef}
            src=""
            className="w-2/3 "
            controls
          />
          <div
            onClick={removeAudio}
            className="cursor-pointer text-white text-6xl"
          >
            <FaRegTrashAlt />
          </div>
        </div>
      )}
    </div>
  );
};
export default AudioDropZone;
