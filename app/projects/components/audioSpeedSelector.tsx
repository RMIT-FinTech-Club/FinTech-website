import { Button } from "@nextui-org/react";
import { CaretDown } from "tabler-icons-react";
import { useState } from "react";

type SpeedSelectorProps = {
    onSpeedChange: (speed: number) => void;
};

const SpeedSelector: React.FC<SpeedSelectorProps> = ({ onSpeedChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedSpeed, setSelectedSpeed] = useState<number>(1);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSpeedChange = (speed: number) => {
        setSelectedSpeed(speed);
        onSpeedChange(speed);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative flex">
            <p className="text-ft-text-bright font-bold bg-ft-primary-blue-500 px-4 rounded-lg">
                Speed
            </p>
            <Button
                className="flex items-center justify-around px-4 py-4 bg-ft-primary-yellow-500 rounded-lg w-24"
                onClick={toggleDropdown}
            >
                <span className="text-ft-text-bright font-bold">
                    {selectedSpeed}x
                </span>
                <CaretDown
                    color="white"
                    className={`flex items-center transition-transform fill-white ${
                        isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    onClick={toggleDropdown}
                />
            </Button>
            {isDropdownOpen && (
                <div className="absolute z-10 my-2 bg-lightgrey border border-gray-300 rounded-lg w-auto left-1/2 transform translate-y-1/4">
                    <ul className="w-20 bg-ft-text-bright rounded-lg">
                        {[0.5, 1, 1.5, 2].map((speed) => (
                            <li
                                key={speed}
                                className={`p-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer ${
                                    selectedSpeed === speed ? "bg-gray-200" : ""
                                }`}
                                onClick={() => {
                                    setSelectedSpeed(speed);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                <span className="text-ft-text-dark">{speed}x</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SpeedSelector;