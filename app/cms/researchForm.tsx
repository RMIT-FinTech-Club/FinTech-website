"use client";
import { fontSans } from "@/config/fonts";
import { type SubmitHandler, useForm } from "react-hook-form";

interface FormInput {
	title: string;
	author: string;
	description: string;
	publisher: string;
	publicationDate: string;
}

export default function PodcastForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();

	const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => console.log(data);

	return (
		<>
			<div className=" w-full border-b-1 border-zinc-300">
				<div
					className={`text-center text-black text-2xl font-semibold ${fontSans.style} tracking-tight m-2`}
				>
					New research
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="md:w-[600px] mx-auto mt-6 px-6 mb-8"
			>
				<div className="grid grid-flow-row auto-rows-max gap-7">
					<div
						className={` h-auto text-black text-4xl font-semibold ${fontSans.style}`}
					>
						Research details
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="px-1.5 justify-start items-center inline-flex">
							<div
								className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								Title
							</div>
							<div
								className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								*
							</div>
							{errors.title && (
								<div className={`ml-2 text-lg ${fontSans.style} text-rose-700`}>
									{errors.title.message}
								</div>
							)}
						</div>
						<input
							{...register("title", { required: "Title is required" })}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="px-1.5 justify-start items-center inline-flex">
							<div
								className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								Author
							</div>
							<div
								className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								*
							</div>
							{errors.author && (
								<div className={`ml-2 text-lg ${fontSans.style} text-rose-700`}>
									{errors.author.message}
								</div>
							)}
						</div>
						<input
							{...register("author", { required: "Author is required" })}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="px-1.5 justify-start items-center inline-flex">
							<div
								className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								Description
							</div>
							<div
								className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								*
							</div>
							{errors.description && (
								<div className={`ml-2 text-lg ${fontSans.style} text-rose-700`}>
									{errors.description.message}
								</div>
							)}
						</div>
						<textarea
							{...register("description", { required: "Description is required" })}
							className="self-stretch p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="px-1.5 justify-start items-center inline-flex">
							<div
								className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								Publisher
							</div>
							<div
								className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								*
							</div>
							{errors.description && (
								<div className={`ml-2 text-lg ${fontSans.style} text-rose-700`}>
									{errors.description.message}
								</div>
							)}
						</div>
						<input
							{...register("publisher", { required: "Publisher is required" })}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="px-1.5 justify-start items-center inline-flex">
							<div
								className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								Publication date
							</div>
							<div
								className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}
							>
								*
							</div>
							{errors.publicationDate && (
								<div className={`ml-2 text-lg ${fontSans.style} text-rose-700`}>
									{errors.publicationDate.message}
								</div>
							)}
						</div>
						<input
							{...register("publicationDate", {
								required: "Publication date is required",
								validate: (value: string) => {
									const regex = /^\d{2}-\d{2}-\d{4}$/;
									if (!regex.test(value)) {
										return "Invalid date format";
									}
									return true
								},
							})}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
							placeholder="DD-MM-YYYY"
						/>
					</div>
					<div
						className={`text-black text-4xl font-semibold ${fontSans.style}`}
					>
						Research Paper
						<p className=" leading-relaxed">
							Upload a pdf file of your research paper here to be
							downloaded by user when they visit this research
							page
						</p>
					</div>

					<div className="w-full row-span-2 p-3 rounded-lg border-2 border-gray-300 border-dashed flex-col justify-center items-center gap-3 inline-flex cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
						<label
							htmlFor="dropzone-file"
							className="flex flex-col items-center justify-center w-full rounded-lg "
						>
							<div className="flex flex-col items-center justify-center pt-2 pb-6">
								<svg
									className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
									/>
								</svg>
								<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span className="font-semibold text-[#DCB968]">
										Click
									</span>{" "}
									to browse your computer or drag pdf file to
									this area{" "}
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									(Max. File size: 25MB)
								</p>
							</div>
							<input
								id="dropzone-file"
								type="file"
								className="hidden"
							/>
						</label>
					</div>
					<div className="flex items-end gap-2 justify-end border-t border-zinc-300 pt-6">
						<button
							className="w-1/3 h-10 rounded-lg text-black font-semibold text-lg tracking-wide border border-zinc-300 hover:bg-gray-100 active:bg-gray-200"
							type="reset"
						>
							Cancel
						</button>
						<button
							className="w-1/3 h-10 rounded-lg bg-[#DCB968] hover:bg-[#DCB968]/80 active:bg-[#DCB968]/60 text-black font-semibold text-lg tracking-wide"
							type="submit"
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
