import React, { useContext, useEffect, useState } from "react";
import AuthorUpload from "../AuthorUpload";
import { PodcastDataContext } from "../context/PodcastContext";
import { DisabledButtonContext } from "../context/DisableButtonContext";

const inputStyle = "w-full p-2 border-1 border-ft-primary-blue-600 rounded-md";
const PodcastDataTab: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const { podcastDetail, setPodcastDetail, authorFiles } =
    useContext(PodcastDataContext);
  const { isDisabled, setIsDisabled } = useContext(DisabledButtonContext);
  useEffect(() => {
    if (isShow) {
      let authorUploadStatus = true;
      for (let i = 0; i < podcastDetail.authors.length; ++i) {
        if (
          podcastDetail.authors[i].name.length === 0 ||
          podcastDetail.authors[i].title.length === 0 ||
          !authorFiles[i]
        ) {
          authorUploadStatus = false;
        }
      }
      if (
        podcastDetail.title.length > 0 &&
        podcastDetail.description.length > 0 &&
        podcastDetail.publisher.length > 0 &&
        podcastDetail.publicationDate.length > 0 &&
        podcastDetail.language.length > 0 &&
        authorUploadStatus
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [podcastDetail, authorFiles, isShow]);
  if (isShow) {
    return (
      <section className="w-full">
        <h5 className="mt-10 mb-5">Podcast details</h5>
        <div className="w-full flex flex-col gap-3">
          <label>
            Title<span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              podcastDetail.title = e.target.value;
              setPodcastDetail({ ...podcastDetail });
            }}
            className={inputStyle}
            value={podcastDetail.title}
          />
          <label>
            Description<span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              podcastDetail.description = e.target.value;
              setPodcastDetail({ ...podcastDetail });
            }}
            className={inputStyle}
            value={podcastDetail.description}
          />
          <AuthorUpload />
          <label>
            Publisher<span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              podcastDetail.publisher = e.target.value;
              setPodcastDetail({ ...podcastDetail });
            }}
            className={inputStyle}
            value={podcastDetail.publisher}
          />
          <label>
            Publication Date<span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              podcastDetail.publicationDate = e.target.value;
              setPodcastDetail({ ...podcastDetail });
            }}
            className={inputStyle}
            value={podcastDetail.publicationDate}
          />
          <label>
            Language<span className="text-red-600">*</span>
          </label>
          <div className={inputStyle}>
            <select
              onChange={(e) => {
                podcastDetail.language = e.target.value;
                setPodcastDetail({ ...podcastDetail });
              }}
              className="w-full"
              name="Language"
              value={podcastDetail.language}
            >
              <option value="Vietnamese">Vietnamese</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};
export default PodcastDataTab;
