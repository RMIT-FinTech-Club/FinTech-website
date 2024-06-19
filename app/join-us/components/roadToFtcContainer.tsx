import React from "react";

interface RoadToFtcContainerProps {
    header: string;
    text: string;
    className?: string;
}

const RoadToFtcContainer: React.FC<RoadToFtcContainerProps> = ({ header, text, className }) => {
    return (
        <div className={className}>
            <div className="rounded-2xl bg-gradient-to-r from-ft-primary-blue-200 to-ft-primary-blue-500 p-2">
                <div className="flex flex-col items-center px-4 py-2 rounded-[calc(1rem-0.25rem)] bg-white w-full">
                    <h5 className="py-2 px-2">{header}</h5>
                    <p className="py-2 px-2 text-center leading-normal w-4/5">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default RoadToFtcContainer;