import CoreValue from "./components/coreValue";
import HistorySection from "./components/history";
import VisionMission from "./components/vision-mission/missionVision";

const AboutUs = () => {
	return (
		<div>
			<VisionMission />
			<HistorySection />
			<CoreValue />
		</div>
	);
};

export default AboutUs;
