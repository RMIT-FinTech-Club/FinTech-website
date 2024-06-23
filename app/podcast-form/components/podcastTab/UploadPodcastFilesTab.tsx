import React, { useContext, useEffect } from "react";
import AudioDropZone from "../dropZone/AudioDropZone";
import ThumnailDropZone from "../dropZone/ThumnailDropZone";
import { PodcastDataContext } from "../context/PodcastContext";
import { DisabledButtonContext } from "../context/DisableButtonContext";

const UploadPodcastFilesTab: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const {audioFile, thumnailFile} = useContext(PodcastDataContext);
  const { setIsDisabled} = useContext(DisabledButtonContext);
  useEffect(()=>{
    if((audioFile instanceof Blob) && (thumnailFile instanceof Blob)){
      setIsDisabled(false);
    }else{
      setIsDisabled(true);
    }
  }, [audioFile, thumnailFile, isShow])
  if (isShow) {
    return (
      <section className="w-full">
        <h5 className="mt-10 mb-5">Upload files</h5>
        <div className="w-full flex flex-col gap-3">
          <div>
            <p className="text-2xl font-semibold">Audio</p>
            <p>Upload a podcast audio in a few simple steps</p>
            <p>Supported file types: mp3, wav</p>
            <p>Max file size: 5gb</p>
            <div className="w-full h-[250px] border-1 border-black border-dashed rounded-md">
              <AudioDropZone />
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Thumbnail</p>
            <p>Upload a podcast thumbnail to show other how your podcast looks like</p>
            <p>Supported file types: jpeg, png</p>
            <p>Max file size: 5mb</p>
            <div className="w-full h-[250px] border-1 border-black border-dashed rounded-md">
              <ThumnailDropZone/>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};
export default UploadPodcastFilesTab;
