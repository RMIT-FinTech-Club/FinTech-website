const GeneralProject = () => {
    return (
        <>
            <div className="mx-auto w-[806px] px-[52px] bg-white bg-opacity-0 flex-col justify-center items-center gap-4">
                <div className="absolute w-[340px] top-[120px] left-[134px] h-[4px] bg-black flex items-center">
                    <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <div className="absolute w-[340px] top-[120px] right-[134px] h-[4px] bg-black flex flex-row-reverse items-center">
                    <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <div className="flex-col justify-start items-center gap-1 flex">
                    <div
                        className={`self-stretch text-center text-slate-700 text-2xl font-semibold  tracking-tight`}
                    >
                        BACK TO TIME
                    </div>
                    <div className="self-stretch text-center">
                        <span
                            className={`text-slate-700 text-5xl font-bold `}
                        >
                            Discover the
                        </span>
                        <span
                            className={`text-zinc-800 text-5xl font-bold `}
                        >
                            {" "}
                        </span>
                        <span
                            className={`text-orange-300 text-5xl font-bold  `}
                        >
                            FINTECH CLUB
                            <br />
                        </span>
                        <span
                            className={`text-slate-400 text-5xl font-bold `}
                        >
                            Story & History
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default GeneralProject;