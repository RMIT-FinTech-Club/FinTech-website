import CoreValue from "./components/coreValue";
import HistorySection from "./components/history";
import FinTechInTheEyes from "./components/inTheEyes";
import Members from "./components/members";
import VisionMission from "./components/vision-mission/missionVision";
const AboutUs = () => {
	return (
		<div>
			<HistorySection />
			<VisionMission />
			<FinTechInTheEyes />
			<Members />
			<CoreValue />
			{/* <VisionMission /> */}
			{/* <HistorySection /> */}
			{/* <Members /> */}
			{/* <CoreValue /> */}
		</div>
	);
};

export default AboutUs;
