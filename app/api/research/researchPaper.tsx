import axios from "axios";

type ResearchPaper = {
	title: string;
	author: string;
	publicationDate: string;
	description: string;
	fileURL: string;
};

export async function createResearchPaper({
	title,
	author,
	publicationDate,
	description,
	fileURL,
}: ResearchPaper) {
	return axios
		.post("/api/research", {
			title,
			author,
			publicationDate,
			description,
			fileURL,
		})
		.then((res) => res.data)
		.catch((err) => {
			return Promise.reject(new Error(err.response.data.message));
		});
}
