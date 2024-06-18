import CoreValue from "./components/coreValue";
import HistorySection from "./components/history";
import Members from "./components/members";
import VisionMission from "./components/vision-mission/missionVision";

const AboutUs = () => {
	return (
		<div>
			<HistorySection />
			<VisionMission />
			<Members />
			<CoreValue />
		</div>
	);
};

export default AboutUs;
