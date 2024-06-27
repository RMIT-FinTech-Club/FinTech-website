"use client";
import { useState } from "react";
import NavigateSection from "./components/NavigateSection";
import PodcastFooter from "./components/PodcastFooter";
import { DisabledButtonContextProvider } from "./components/context/DisableButtonContext";
import { PodcastDataContextProvider } from "./components/context/PodcastContext";
import { IndexContext } from "./components/context/IndexContext";
import PodcastDataTab from "./components/podcastTab/PodcastDataTab";
import ReviewPodcastDataTab from "./components/podcastTab/ReviewPodcastTab";
import UploadPodcastFilesTab from "./components/podcastTab/UploadPodcastFilesTab";
const PodcastForm = () => {
  const [focusIndex, setFocusIndex] = useState<number>(1);
  return (
    <>
      <IndexContext.Provider value={{ focusIndex, setFocusIndex }}>
        <NavigateSection />
        <section className="w-3/5 mx-auto">
          <PodcastDataContextProvider>
            <DisabledButtonContextProvider>
              <PodcastDataTab isShow={focusIndex === 1} />
              <UploadPodcastFilesTab isShow={focusIndex === 2} />
              <ReviewPodcastDataTab isShow={focusIndex === 3} />
              <PodcastFooter />
            </DisabledButtonContextProvider>
          </PodcastDataContextProvider>
        </section>
      </IndexContext.Provider>
    </>
  );
};
export default PodcastForm;
