import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  createRef,
} from "react";
import { PodcastDataContext } from "../context/PodcastContext";
import readFile from "../../functions/readFile";
import { cursorTo } from "readline";

const ReviewPodcastDataTab: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const { podcastDetail, authorFiles, audioFile, thumnailFile } =
    useContext(PodcastDataContext);
  const previewPodcastAudioRef = useRef<any>(null);
  const previewThumnailImageRef = useRef<any>(null);
  const previewAuthorImageRefs = useRef<any>([]);

  readFile(previewThumnailImageRef, thumnailFile);
  readFile(previewPodcastAudioRef, audioFile);

  useEffect(() => {
    previewAuthorImageRefs.current = previewAuthorImageRefs.current.slice(
      0,
      authorFiles.length
    );
    for (let i = 0; i < authorFiles.length; ++i) {
      console.log("useEffect run in rewivew tab");
      if (previewAuthorImageRefs.current[i]) {
        console.log("in set");
        console.log(previewAuthorImageRefs.current[i]);
        console.log(authorFiles[i]);
        if (authorFiles[i] instanceof Blob) {
          const reader = new FileReader();
            previewAuthorImageRefs.current[i].src = URL.createObjectURL(authorFiles[i]);
        }
      }
    }
  }, [authorFiles, podcastDetail.authors, isShow]);

  if (isShow) {
    return (
      <section className="w-full">
        <h5 className="mt-10 mb-5">Let’s review your podcast</h5>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full bg-ft-primary-blue-600 rounded-md p-5">
            <div className="w-full p-3 flex justify-between gap-3 ">
              <div className="h-[120px] w-[120px] flex justify-center items-center overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover object-center"
                  ref={previewThumnailImageRef}
                  src=""
                />
              </div>

              <div className="w-full">
                <p className="text-white text-4xl font-semibold">
                  {podcastDetail.title}
                </p>
                <div className="flex ps-10 w-2/3 mt-3 relative">
                  {podcastDetail.authors.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="w-[40px] h-[40px] rounded-full overflow-hidden absolute"
                      style={{ zIndex: `${index + 1}`, left:`${index * 30}px` }}
                    >
                      <img
                        ref={(el) => {
                          previewAuthorImageRefs.current[index] = el;
                        }}
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <audio
              ref={previewPodcastAudioRef}
              src=""
              className="w-full"
              controls
            ></audio>
          </div>

          <div className="my-5 flex flex-col gap-10 justify-between">
            <div>
              <p className="text-2xl font-semibold">Title</p>
              <p>{podcastDetail.title}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Description</p>
              <p>{podcastDetail.description}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Publisher</p>
              <p>{podcastDetail.publisher}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Publication Date</p>
              <p>{podcastDetail.publicationDate}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Language</p>
              <p>{podcastDetail.language}</p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};
export default ReviewPodcastDataTab;
