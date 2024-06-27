"use client";
import Link from 'next/link'
import ProjectCardSkeletonLoading from "./ProjectCardSkeletonLoading";
import { fontSans } from "@/config/fonts";
import {
    IconBroadcast,
    IconCalendarMonth,
    IconUser,
} from "@tabler/icons-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { ChevronDown, Filter } from "tabler-icons-react";
import axios from 'axios';

type ResearchPaper = {
    _id: string,
    title: string;
    author: string;
    publicationDate: string;
    description: string;
    fileURL: string;
};

async function getProjects() {
    return axios
        .get("/api/projects")
        .then((res) => res.data)
        .catch((err) => {
            return Promise.reject(new Error(err.response.data.message));
        });
}

export default function ProjectGeneralPage() {
    return (
        <>
            <div className="w-full md:px-16 px-5">
                <div className="grid grid-cols-12 md:py-10 items-center">
                    <div className="hidden col-span-4 md:inline-flex h-[4px] bg-black items-center">
                        <div className=" w-6 h-6 bg-black rounded-full" />
                    </div>
                    <div
                        className={`w-full text-center text-orange-300 text-[56px] font-bold ${fontSans} mx-auto md:col-span-4 col-span-full`}
                    >
                        PROJECTS
                    </div>
                    <div className="hidden col-span-4 md:inline-flex h-[4px] bg-black flex-row-reverse items-center">
                        <div className="w-6 h-6 bg-black rounded-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-3 md:mt-10 md:mb-44 w-full md:px-0">
                    <div className="flex flex-col gap-4 items-center md:col-span-2 md:order-first order-last">
                        <Suspense fallback={<ProjectCardSkeletonLoading />}>
                            {/* <ProjectsSection /> */}
                        </Suspense>
                    </div>
                    {/* projects filter  */}
                    <ProjectsFilter />
                </div>
            </div>
        </>
    );
}

function ProjectGeneralCard({ project }: { project: ResearchPaper }) {
    return (
        <>
            <div className="grid md:grid-cols-2 bg-ft-background shadow-lg rounded-lg p-4 w-fit">
                <div className="flex-shrink-0 mx-auto md:my-0 my-7 md:px-0 px-3 md:rounded-none rounded-full">
                    <img
                        className="md:w-[406px] md:h-[267px] w-full rounded-lg"
                        alt="Fintech Forum"
                        src="https://ik.imagekit.io/mbrrji2rk/ProjectGeneralImage.png?updatedAt=1715686577329"
                    />
                </div>
                <div className="md:ml-6 flex flex-col justify-between">
                    <div>
                        <h6 className="md:text-2xl text-xl font-bold text-black text-center">
                            {project.title}
                        </h6>
                        <div className="grid md:grid-cols-3 items-center mt-4 text-gray-600 md:gap-0 gap-2">
                            <div className="flex items-center mr-4">
                                <IconCalendarMonth className="w-6 h-6 mr-1 text-orange-300" />
                                <span>{project.publicationDate}</span>
                            </div>
                            <div className="flex items-center mr-4">
                                <IconUser className="w-6 h-6 mr-1 text-orange-300" />
                                <span>{project.author}</span>
                            </div>
                            <div className="flex items-center">
                                <IconBroadcast className="w-6 h-6 mr-1 text-orange-300" />
                                <span>Research</span>
                            </div>
                        </div>
                        <article className="text-wrapper mt-4 text-gray-700">
                            <p className="leading-relaxed">
                                {project.description}
                            </p>
                        </article>
                    </div>
                    <Link
                        href={`/projects/${project._id}`}
                        className="mt-4 items-center bg-orange-300 hover:bg-orange-400 active:bg-orange-500 text-white py-2 px-4 rounded-full self-end md:w-fit w-full text-center"
                    >
                        More detail
                    </Link>
                </div>
            </div>
        </>
    );
}

function ProjectsFilter() {
    const [isOpen, setIsOpen] = useState(false);
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

    return (
        <div className="md:flex md:flex-col gap-4 md:pl-16 justify-self-start md:w-fit w-full">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-fit px-4 py-2 rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-ft-primary-blue"
                placeholder="Search Projects"
            />
            <div className="flex mt-4 md:hidden rounded-lg">
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-ft-primary-blue text-sm font-medium text-white focus:outline-none"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Newest
                            <ChevronDown className="w-5 h-5 ml-2 -mr-1" />
                        </button>
                    </div>
                    {isOpen && (
                        <div
                            className={`origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-transform transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <div className="py-1" role="none">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Newest
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Oldest
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Default
                                </a>
                            </div>
                        </div>
                    )}
                </div>
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
                        className={`mr-2 md:px-4 px-2 py-[4px] md:py-2 rounded-lg ${filters.research
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
                        className={`md:px-4 px-2 py-[4px] md:py-2  rounded-lg ${filters.podcast
                            ? "md:bg-ft-primary-yellow bg-ft-primary-blue text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        Article
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
                            className={`mr-2 w-6 h-6 rounded ${filters.newest
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
                            className={`mr-2 w-6 h-6 rounded ${filters.oldest
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
        </div>
    )
}

async function ProjectsSection() {
    const {
        data: projects,
    } = useSuspenseQuery<ResearchPaper[]>({
        queryKey: ["projects"],
        queryFn: () => getProjects(),
    })
    return (
        <>
            {projects.map((project) => (
                <ProjectGeneralCard key={project._id} project={project} />
            ))}
        </>
    )
}
