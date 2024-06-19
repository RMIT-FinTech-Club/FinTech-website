import React from "react";

interface RoadToFtcContainerMobileLeftProps {
    header: string;
    text: string;
    containerMobileLeftClassName?: string;
}

const RoadToFtcContainerMobileLeft: React.FC<RoadToFtcContainerMobileLeftProps> = ({header, text, containerMobileLeftClassName}) => {
    return (
        <div className={containerMobileLeftClassName}>
            <div className="rounded-2xl bg-gradient-to-r from-ft-primary-blue-200 to-ft-primary-blue-500 p-1 w-4/5">
                <div className="flex flex-col items-end px-2 py-1 rounded-[calc(1rem-0.25rem)] bg-white">
                    <h5 className="py-1">{header}</h5>
                    <p className="py-1 text-sm text-right leading-normal">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default RoadToFtcContainerMobileLeft;