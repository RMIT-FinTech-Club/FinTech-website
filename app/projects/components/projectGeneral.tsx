"use client";

import Image from "next/image";
import { useState } from "react";
import {
	BrandApplePodcast,
	CalendarEvent,
	Filter,
	Menu2,
	ReportSearch,
	User,
} from "tabler-icons-react";

const ProjectGeneral = () => {
	type Filters = {
		research: boolean;
		podcast: boolean;
		newest: boolean;
		oldest: boolean;
	};

	const [query, setQuery] = useState<string>("");
	const [filters, setFilters] = useState<Filters>({
		research: false,
		podcast: false,
		newest: false,
		oldest: false,
	});

	const toggleFilter = (filterName: keyof Filters) => {
		setFilters((prevFilters) => {
			const newFilters = { ...prevFilters };

			// If toggling newest, disable oldest
			if (filterName === "newest") {
				newFilters.newest = !prevFilters.newest;
				if (newFilters.newest) newFilters.oldest = false;
			}

			// If toggling oldest, disable newest
			if (filterName === "oldest") {
				newFilters.oldest = !prevFilters.oldest;
				if (newFilters.oldest) newFilters.newest = false;
			}

			// Toggle other filters as usual
			if (filterName === "research") {
				newFilters.research = !prevFilters.research;
			}
			if (filterName === "podcast") {
				newFilters.podcast = !prevFilters.podcast;
			}

			return newFilters;
		});
	};

	const [selectedSort, setSelectedSort] = useState<string>(""); // State to track selected sort

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setFilters({
			...filters,
			newest: value === "newest",
			oldest: value === "oldest",
		});
		setSelectedSort(value); // Update selected sort state
	};

	const toggleSort = () => {
		// Array of available sorts
		const sortOptions = ["Default", "Newest", "Oldest"];

		// Find current index of selected sort in the options
		const currentIndex = sortOptions.findIndex(
			(option) => option === selectedSort,
		);

		// Calculate next index by cycling through options
		const nextIndex = (currentIndex + 1) % sortOptions.length;

		// Update selected sort state to next option
		setSelectedSort(sortOptions[nextIndex]);

		// Set filters based on the selected sort
		setFilters({
			research: false,
			podcast: false,
			newest: sortOptions[nextIndex] === "Newest",
			oldest: sortOptions[nextIndex] === "Oldest",
		});
	};

	return (
		<div className="flex items-center justify-center w-full mt-10">
			<div className="flex flex-col items-center justify-center w-full">
				<div className="flex items-center w-full mx-auto">
					<div className="flex items-center w-1/3">
						<div className="h-4 w-4 bg-ft-primary-blue rounded-full" />
						<div className="border-t bg-ft-primary-blue flex-grow h-1" />
					</div>
					<div className="flex w-1/3 ">
						<h2 className="text-ft-primary-yellow mx-auto">
							Projects
						</h2>
					</div>
					<div className="flex items-center w-1/3">
						<div className="border-t bg-ft-primary-blue flex-grow h-1" />
						<div className="h-4 w-4 bg-ft-primary-blue rounded-full" />
					</div>
				</div>
				<div className="flex md:flex-row flex-col-reverse w-full mt-6">
					<div className="flex flex-col items-center justify-center md:w-4/5 mr-4">
						<div className="md:flex md:flex-row flex-col md:w-[95%] bg-ft-background rounded-lg mb-8 md:p-0 p-2">
							<Image
								width={406}
								height={267}
								className="rounded-lg md:mx-4 md:my-4"
								src={"/President.jpg"}
								alt=""
							/>
							<div className="mt-4 md:w-[58%]">
								<h2 className="text-[24px] text-center md:text-left">
									This is our president
								</h2>
								<div className="flex-col md:flex md:flex-row w-full">
									<div className="flex md:justify-center items-center mr-16">
										<CalendarEvent className="text-ft-primary-yellow w-8 h-8 mr-2" />
										<p>28/10/2024</p>
									</div>
									<div className="flex md:justify-center items-center mr-16">
										<User className="text-ft-primary-yellow w-8 h-8 mr-2" />
										<p>Dao Duy</p>
									</div>
									<div className="flex md:justify-center items-center mr-16">
										<BrandApplePodcast className="text-ft-primary-yellow w-8 h-8 mr-2" />
										<p>28/10/2024</p>
									</div>
								</div>
								<div>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Cras viverra viverra
										eros, eu euismod arcu dignissim quis.
										Phasellus sollicitudin Lorem ipsum dolor
										sit amet, consectetur adipiscing elit.
										Cras viverra viverra eros, eu euismod
										arcu dignissim quis. Phasellus
										sollicitudin
									</p>
								</div>
								<div className="mt-auto flex justify-end">
									<button
										type="button"
										className="bg-ft-primary-yellow text-white rounded-lg px-4 py-2 md:mb-4 md:mr-4 md:w-fit w-full"
									>
										More details
									</button>
								</div>
							</div>
						</div>
						<div className="md:flex md:flex-row flex-col md:w-[95%] bg-ft-background rounded-lg mb-8 md:p-0 p-2">
							<Image
								width={406}
								height={267}
								className="rounded-lg md:mx-4 md:my-4"
								src={"/President.jpg"}
								alt=""
							/>
							<div className="mt-4 md:w-[58%]">
								<h2 className="text-[24px] text-center md:text-left">
									This is our president
								</h2>
								<div className="flex-col md:flex-row md:flex w-full">
									<div className="flex md:justify-center items-center mr-16">
										<CalendarEvent className="text-ft-primary-yellow w-8 h-8 mr-2" />
										<p>28/10/2024</p>
									</div>
									<div className="flex md:justify-center items-center mr-16">
										<User className="text-ft-primary-yellow w-8 h-8 mr-2" />
										<p>Dao Duy</p>
									</div>
									<div className="flex md:justify-center items-center mr-16">
										<ReportSearch className="text-ft-primary-yellow w-8 h-8 mr-2" />
										<p>28/10/2024</p>
									</div>
								</div>
								<div>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Cras viverra viverra
										eros, eu euismod arcu dignissim quis.
										Phasellus sollicitudin Lorem ipsum dolor
										sit amet, consectetur adipiscing elit.
										Cras viverra viverra eros, eu euismod
										arcu dignissim quis. Phasellus
										sollicitudin
									</p>
								</div>
								<div className="mt-auto flex justify-end">
									<button
										type="button"
										className="bg-ft-primary-yellow text-white rounded-lg px-4 py-2 md:mb-4 md:mr-4 md:w-fit w-full"
									>
										More details
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:w-1/5 mr-4">
						<div>
							<form action="">
								<input
									type="text"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									className="w-full h-fit px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-ft-primary-blue"
									placeholder="Search..."
								/>
								<div className="flex mt-4 md:hidden px-2 py-2 rounded-lg">
									<Menu2 className="text-ft-primary-blue w-8 h-8 mb-2 cursor-pointer mr-2" />
									<p className="text-[24px] text-ft-primary-blue">
										Newest
									</p>
								</div>
								<div className="mt-4 md:bg-ft-background px-2 py-2 rounded-lg">
									<p className="text-[24px] hidden md:block">
										Project filter:
									</p>
									<div className="flex items-center">
										<Filter className="md:hidden text-ft-primary-blue w-8 h-8" />
										<button
											type="button"
											onClick={() =>
												toggleFilter("research")
											}
											className={`mr-2 md:px-4 px-2 py-[4px] md:py-2 rounded-lg ${
												filters.research
													? "md:bg-ft-primary-yellow bg-ft-primary-blue text-white"
													: "bg-gray-200 text-black"
											}`}
										>
											Research
										</button>
										<button
											type="button"
											onClick={() =>
												toggleFilter("podcast")
											}
											className={`md:px-4 px-2 py-[4px] md:py-2  rounded-lg ${
												filters.podcast
													? "md:bg-ft-primary-yellow bg-ft-primary-blue text-white"
													: "bg-gray-200 text-black"
											}`}
										>
											Podcast
										</button>
									</div>
								</div>
								<div className="mt-4 bg-ft-background px-2 py-2 rounded-lg hidden md:block">
									<p className="text-[24px]">Sort by:</p>
									<div className="flex flex-col ">
										<div className="flex items-center">
											<button
												type="button"
												onClick={() =>
													toggleFilter("newest")
												}
												className={`mr-2 w-6 h-6 rounded ${
													filters.newest
														? "bg-ft-primary-yellow"
														: "bg-gray-200"
												}`}
											>
												{filters.newest && "✓"}
											</button>
											<p className="mr-4">
												Newest release date
											</p>
										</div>
										<div className="flex items-center">
											<button
												type="button"
												onClick={() =>
													toggleFilter("oldest")
												}
												className={`mr-2 w-6 h-6 rounded ${
													filters.oldest
														? "bg-ft-primary-yellow"
														: "bg-gray-200"
												}`}
											>
												{filters.oldest && "✓"}
											</button>
											<p className="mr-4">
												Oldest release date
											</p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectGeneral;
