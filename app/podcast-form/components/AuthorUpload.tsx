import { Button } from "@nextui-org/react";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { PodcastDataContext } from "./context/PodcastContext";
import AuthorDropZone from "./dropZone/AuthorDropZone";

const inputStyle = "w-full bg-gray-100 rounded-md p-2";
const buttonStyle = "bg-ft-primary-blue-600 text-xl text-white h-[30px]";
const AuthorUpload = () => {
	const { podcastDetail, setPodcastDetail, authorFiles, setAuthorFiles } =
		useContext(PodcastDataContext);
	const [currentAuthorIndex, setCurrentAuthorIndex] = useState<number>(1);
	function handleAddAuthor() {
		podcastDetail.authors.push({ name: "", title: "" });
		setPodcastDetail({ ...podcastDetail });
		setCurrentAuthorIndex(currentAuthorIndex + 1);
	}
	function handleAuthorName(event: React.ChangeEvent<HTMLInputElement>) {
		podcastDetail.authors[currentAuthorIndex - 1].name = event.target.value;
		setPodcastDetail({ ...podcastDetail });
	}
	function handleAuthorTitle(event: React.ChangeEvent<HTMLInputElement>) {
		podcastDetail.authors[currentAuthorIndex - 1].title =
			event.target.value;
		setPodcastDetail({ ...podcastDetail });
	}
	return (
		<>
			<section className="flex flex-wrap gap-3">
				{podcastDetail.authors.map((item: any, index: number) => (
					<Button
						key={index}
						onClick={() => {
							setCurrentAuthorIndex(index + 1);
						}}
						className={buttonStyle}
					>
						Author {index + 1}
						<button
							className="py-3 z-10"
							onClick={() => {
								if (podcastDetail.authors.length > 1) {
									const modifyPodcastDetailObject =
										podcastDetail;
									const modifyAuthorFilesObject = authorFiles;
									modifyPodcastDetailObject.authors.splice(
										index,
										1,
									);
									modifyAuthorFilesObject.splice(index, 1);
									setAuthorFiles(modifyAuthorFilesObject);
									setPodcastDetail({
										...modifyPodcastDetailObject,
									});
								}
							}}
						>
							<IoClose />
						</button>
					</Button>
				))}
				<Button onClick={handleAddAuthor} className={buttonStyle}>
					+
				</Button>
			</section>
			<section className="w-full h-[150px] flex justify-center gap-4">
				<div className="h-full w-1/3 border-1 border-black border-dashed rounded-md">
					<AuthorDropZone currentAuthorIndex={currentAuthorIndex} />
				</div>
				<div className="w-2/3 flex flex-col justify-between">
					<p className="text-md font-semibold">
						Author {currentAuthorIndex}
					</p>
					<input
						onChange={handleAuthorName}
						className={inputStyle}
						placeholder="Author Name"
						value={
							podcastDetail.authors[currentAuthorIndex - 1]?.name
						}
					/>
					<input
						onChange={handleAuthorTitle}
						className={inputStyle}
						placeholder="Author Title"
						value={
							podcastDetail.authors[currentAuthorIndex - 1]?.title
						}
					/>
				</div>
			</section>
		</>
	);
};
export default AuthorUpload;
