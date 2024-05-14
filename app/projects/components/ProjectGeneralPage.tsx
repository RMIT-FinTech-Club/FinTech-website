import { fontSans } from "@/config/fonts";
import { IconBroadcast, IconUser, IconCalendarMonth } from '@tabler/icons-react';
export default function ProjectGeneralPage() {
    return (
        <>
            <div className="flex md:py-10 items-center">
                <div className="grow flex md:w-[250px] md:left-[100px] lg:w-[340px] h-[4px] bg-black flex items-center">
                    <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <div className={`w-[515px] text-center text-orange-300 text-[56px] font-bold ${fontSans} mx-auto`}>PROJECTS</div>
                <div className="grow flex md:w-[250px] md:right-[100px] lg:w-[340px] h-[4px] bg-black flex flex-row-reverse items-center">
                    <div className="w-6 h-6 bg-black rounded-full" />
                </div>
            </div>
            <div className="md:mb-10 grid grid-cols-3 md:mt-10 md:mb-44">
                <div className="flex flex-col gap-4 items-center col-span-2">
                    <ProjectGeneralCard />
                    <ProjectGeneralCard />
                </div>
                <div className="flex flex-col gap-4 mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search projects"
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs md:w-[252px] md:h-[62px]"
                        />
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Project filter:</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-orange-300 text-white py-1 px-3 rounded-full">Research</span>
                            <span className="bg-orange-300 text-white py-1 px-3 rounded-full">Podcast</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Sort by:</h2>
                        <div className="flex flex-col">
                            <label className="flex items-center">
                                <input type="checkbox" name="sort" className="mr-2 w-6 h-6 border-2" />
                                Newest release date
                            </label>
                            <label className="flex items-center mt-4 border-orange-300">
                                <input type="checkbox" name="sort" className="mr-2 w-6 h-6 border-2" />
                                Oldest release date
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ProjectGeneralCard() {
    return (
        <>
            <div className="flex bg-white shadow-lg rounded-lg p-6 md:w-fit">
                <div className="flex-shrink-0">
                    <img className="w-[406px] h-[267px] rounded-lg" alt="Fintech Forum" src="https://ik.imagekit.io/mbrrji2rk/ProjectGeneralImage.png?updatedAt=1715686577329" />
                </div>
                <div className="ml-10 flex flex-col justify-between">
                    <div>
                        <h6 className="text-2xl font-bold text-black">THE FINTECH FORUM 2024</h6>
                        <div className="flex items-center mt-2 text-gray-600">
                            <div className="flex items-center mr-4">
                                <IconCalendarMonth className="w-5 h-5 mr-1 text-orange-300" />
                                <span>28/10/2024</span>
                            </div>
                            <div className="flex items-center mr-4">
                                <IconUser className="w-5 h-5 mr-1 text-orange-300" />
                                <span>Duy2k5</span>
                            </div>
                            <div className="flex items-center">
                                <IconBroadcast className="w-5 h-5 mr-1 text-orange-300" />
                                <span>Research</span>
                            </div>
                        </div>
                        <article className="text-wrapper w-[560px] mt-4 text-gray-700">
                            <p className="leading-relaxed">
                                The FinTech Forum 2024 is set to be the most dynamic student driven FinTech event, with a mission to educate and
                                immerse students into the various aspects of the FinTech Universe! As we begin to officially launch the event,
                                we would like to acknowledge the contributions made by our esteemed Sponsors that have made our event possible.
                            </p>
                        </article>
                    </div>
                    <button className="mt-4 w-[175px] bg-orange-300 text-white py-2 px-4 rounded-[10px] self-end">
                        More detail
                    </button>
                </div>
            </div>
        </>
    )
}