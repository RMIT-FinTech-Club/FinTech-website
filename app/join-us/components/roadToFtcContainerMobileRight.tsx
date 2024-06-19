import React from "react";

interface RoadToFtcContainerMobileRightProps {
    header: string;
    text: string;
    containerMobileRightClassName?: string;
}

const RoadToFtcContainerMobileRight: React.FC<RoadToFtcContainerMobileRightProps> = ({header, text, containerMobileRightClassName}) => {
    return (
        <div className={containerMobileRightClassName}>
            <div className="rounded-2xl bg-gradient-to-r from-ft-primary-blue-200 to-ft-primary-blue-500 p-1 w-4/5">
                <div className="flex flex-col items-start px-2 py-1 rounded-[calc(1rem-0.25rem)] bg-white">
                    <h5 className="py-1">{header}</h5>
                    <p className="py-1 text-left text-sm leading-normal w-4/5">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default RoadToFtcContainerMobileRight;