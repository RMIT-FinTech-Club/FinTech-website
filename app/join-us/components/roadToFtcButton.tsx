import React from "react";
import { Button } from "@nextui-org/react";

interface RoadToFtcButtonProps {
    text: string;
    color: string;
}

const RoadToFtcButton = ({ text, color }: RoadToFtcButtonProps) => {
    return (
        <Button className={`mx-8 my-2 py-2 px-4 ${color} text-white font-bold rounded-xl w-96 h-24 text-4xl`}>
            {text}
        </Button>
    );
};

export default RoadToFtcButton;