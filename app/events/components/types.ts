export interface Event {
	id: number;
	name: string;
	date: string;
	time: string;
	dateTime: string;
	type: "Offline" | "Online" | "Hybrid";
	location: string;
	imageUrl: string;
}
