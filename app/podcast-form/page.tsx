"use client";
import { useState } from "react";
import NavigateSection from "./components/NavigateSection";
import PodcastFooter from "./components/PodcastFooter";
import { DisabledButtonContextProvider } from "./components/context/DisableButtonContext";
import { PodcastDataContextProvider } from "./components/context/PodcastContext";
import PodcastDataTab from "./components/podcastTab/PodcastDataTab";
import ReviewPodcastDataTab from "./components/podcastTab/ReviewPodcastTab";
import UploadPodcastFilesTab from "./components/podcastTab/UploadPodcastFilesTab";
const PodcastForm = () => {
	const [focusIndex, setFocusIndex] = useState<number>(1);
	return (
		<>
			<NavigateSection focusIndex={focusIndex} />
			<section className="w-3/5 mx-auto">
				<PodcastDataContextProvider>
					<DisabledButtonContextProvider>
						<PodcastDataTab isShow={focusIndex === 1} />
						<UploadPodcastFilesTab isShow={focusIndex === 2} />
						<ReviewPodcastDataTab isShow={focusIndex === 3} />
						<PodcastFooter
							focusIndex={focusIndex}
							setFocusIndex={setFocusIndex}
						/>
					</DisabledButtonContextProvider>
				</PodcastDataContextProvider>
			</section>
		</>
	);
};
export default PodcastForm;
