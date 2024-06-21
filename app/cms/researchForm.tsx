'use client'
import { fontSans } from "@/config/fonts";
import { useMutation } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";
import { createResearchPaper } from "../api/research/route";
import { S3 } from "aws-sdk";
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

interface FormInput {
	title: string;
	author: string;
	description: string;
	publisher: string;
	publicationDate: string;
	file: File
}

const s3 = new S3({
	accessKeyId: process.env.ACCESS_KEY,
	secretAccessKey: process.env.SECRET_ACCESS_KEY,
	region: process.env.BUCKET_REGION,
});

export default function PodcastForm() {
	const [file, setFile] = useState<File | null>(null);
	const [fileUrl, setFileUrl] = useState<string | null>(null)
	const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);
	const progress = useMotionValue(0);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormInput>({
		defaultValues: {
			title: '',
			author: '',
			description: '',
			publisher: '',
			publicationDate: '',
		}
	});

	const mutation = useMutation({
		mutationFn: createResearchPaper,
		onSuccess: () => {
			// Handle success
			console.log("Research paper created successfully!");
			reset()
		},
		onError: (error) => {
			// Handle error
			console.error("Failed to create research paper:", error);
		}
	});

	const onSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
		handleUpload
		mutation.mutate(data);
	};

	useEffect(() => {
		return upload?.abort();
	}, []);

	useEffect(() => {
		progress.set(0);
		setUpload(null);
	}, [file]);

	const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		const file: File | null = e.target.files?.[0] ?? null
		setFile(file);

		if (fileUrl) URL.revokeObjectURL(fileUrl)

		if (file) {
			const url = URL.createObjectURL(file)
			setFileUrl(url)
		} else {
			setFileUrl(null)
		}
	};

	const handleUpload: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = async (e) => {
		e.preventDefault();
		if (!file) return;
		const bucketName = process.env.BUCKET_NAME;
		if (!bucketName) {
			console.error("Bucket name is undefined.");
			return;
		}
		const params = {
			Bucket: bucketName,
			Key: file.name,
			Body: file,
		};
		console.log(params);

		try {
			const upload = s3.upload(params);
			setUpload(upload);
			upload.on('httpUploadProgress', (p) => {
				console.log(p.loaded / p.total);
				progress.set(p.loaded / p.total);
			});
			await upload.promise();
			console.log(`File uploaded successfully: ${file.name}`);
		} catch (err) {
			console.error(err);
		}
	};

	const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		if (!upload) return;
		upload.abort();
		progress.set(0);
		setUpload(null);
	}

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
						<label htmlFor="title" className="px-1.5 justify-start items-center inline-flex">
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
						</label>
						<input
							id="title"
							{...register("title", { required: "Title is required" })}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<label htmlFor="author" className="px-1.5 justify-start items-center inline-flex">
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
						</label>
						<input
							id="author"
							{...register("author", { required: "Author is required" })}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<label htmlFor="description" className="px-1.5 justify-start items-center inline-flex">
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
						</label>
						<textarea
							id="description"
							{...register("description", { required: "Description is required" })}
							className="self-stretch p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<label htmlFor="publisher" className="px-1.5 justify-start items-center inline-flex">
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
						</label>
						<input
							id="publisher"
							{...register("publisher", { required: "Publisher is required" })}
							className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
						/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<label htmlFor="publicationDate" className="px-1.5 justify-start items-center inline-flex">
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
						</label>
						<input
							id="publicationDate"
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
							{file && fileUrl && (
								<img
									className=" object-cover"
									src={fileUrl}	
									alt={file.name}
								/>
							)}
							<div
								className="flex flex-col items-center justify-center pt-2 pb-6"
								onChange={handleFileChange}
							>
								{!file && !fileUrl && (
									<>
										<svg
											className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 16"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
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
									</>
								)}
							</div>

							{/* Preview file */}

							<input
								id="dropzone-file"
								type="file"
								className="hidden"
								onChange={handleFileChange}
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
							disabled={isSubmitting}
						>
							Save
						</button>
					</div>
				</div>
			</form>

			<div className="dark flex min-h-screen w-full items-center justify-center">
				<main>
					<form className="flex flex-col gap-4 rounded bg-stone-800 p-10 text-white shadow">
						<input type="file" onChange={handleFileChange} />
						<button
							type="button"
							className="rounded bg-green-500 p-2 shadow"
							onClick={handleUpload}>
							Upload
						</button>
						{upload && (
							<>
								<button
									type="button"
									className="rounded bg-red-500 p-2 shadow"
									onClick={handleCancel}>
									Cancel
								</button>
							</>
						)}
					</form>
				</main>
			</div>
		</>
	);
}
