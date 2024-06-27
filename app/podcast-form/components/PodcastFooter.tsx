import { Button } from "@nextui-org/react";
import axios from "axios";
import FormData from "form-data";
import { useContext, useEffect, useState } from "react";
import { DisabledButtonContext } from "./context/DisableButtonContext";
import { IndexContext } from "./context/IndexContext";
import { PodcastDataContext } from "./context/PodcastContext";

const PodcastFooter = () => {
	const { focusIndex, setFocusIndex } = useContext(IndexContext);
	const { isDisabled, setIsDisabled } = useContext(DisabledButtonContext);
	const { podcastDetail, authorFiles, audioFile, thumnailFile } =
		useContext(PodcastDataContext);
	const {
		title,
		description,
		authors,
		publisher,
		publicationDate,
		language,
	} = podcastDetail;
	function handleCancel() {}
	function handleBack() {
		setFocusIndex(focusIndex - 1);
		setIsDisabled(true);
	}
	async function handleSubmit() {
		// console.log(
		//   `title: ${title}\ndescription: ${description}\npublisher: ${publisher}\n publicationDate: ${publicationDate}\n language: ${language}\n authors: ${authors}\n\n\n`
		// );
		let verifiedStatus = true;

		if (!(authorFiles.length === authors.length)) {
			verifiedStatus = false;
		}
		for (let i = 0; i < authors.length; ++i) {
			if (
				!(
					authorFiles[i] instanceof File &&
					authors[i].name.length > 0 &&
					authors[i].title.length > 0
				)
			) {
				verifiedStatus = false;
			}
		}
		if (
			!(
				title.length > 0 &&
				description.length > 0 &&
				publicationDate.length > 0 &&
				publisher.length > 0 &&
				language.length > 0 &&
				audioFile instanceof File
			)
		) {
			verifiedStatus = false;
		}
		if (verifiedStatus) {
			const formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			formData.append("publicationDate", publicationDate);
			formData.append("publisher", publisher);
			formData.append("language", language);
			formData.append("audioFile", audioFile);
			formData.append("thumnailFile", thumnailFile);
			for (let i = 0; i < authors.length; ++i) {
				formData.append("authors[]", JSON.stringify(authors[i]));
				formData.append("authorFiles[]", authorFiles[i]);
			}
			try {
				await axios.post("/api/v1/podcast", formData);
			} catch (error: any) {
				console.error(error.message);
			}
			console.log("done upload");
		} else {
		}
	}
	function handleContinue() {
		setFocusIndex(focusIndex + 1);
		setIsDisabled(true);
	}
	return (
		<section className="w-full py-10 flex justify-end gap-2 mt-20 border-t-1 border-gray-300">
			<Button
				onClick={focusIndex === 1 ? handleCancel : handleBack}
				className="bg-white border-1 border-black px-10"
			>
				{focusIndex === 1 ? "Cancel" : "Back"}
			</Button>
			<Button
				onClick={focusIndex == 3 ? handleSubmit : handleContinue}
				className="bg-ft-primary-blue-600 text-white px-10"
				isDisabled={isDisabled}
			>
				{focusIndex === 3 ? "Submit" : "Continue"}
			</Button>
		</section>
	);
};
export default PodcastFooter;
