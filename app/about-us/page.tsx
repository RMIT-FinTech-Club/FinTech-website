import CoreValue from "./components/coreValue";
import ExecuteBoard from "./components/execute-board/executeBoard";
import ManagementBoard from "./components/execute-board/managementBoard";
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
			<ExecuteBoard />
			<ManagementBoard />
			<Members />
			{/* <CoreValue /> */}
		</div>
	);
};

export default AboutUs;
