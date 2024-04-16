import type React from "react";
import { useEffect, useState } from "react";
import { CaretDown } from "tabler-icons-react";
// import { useNavigate } from "react-router-dom";

type MemberFilterProps = {
	departments: string[];
	onFilterChange: (department: string | null) => void;
};

const MemberFilter: React.FC<MemberFilterProps> = ({
	departments,
	onFilterChange,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
		null,
	);
	// const generalMemberPage = useNavigate();

	const toogleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleDepartmentChange = (department: string) => {
		if (selectedDepartment === department) {
			// If the same department is clicked again, reset the selected department
			setSelectedDepartment(null);
			onFilterChange(null); // Notify parent component that no department is selected
		} else {
			setSelectedDepartment(department);
			onFilterChange(department);
			// generalMemberPage("/members");
		}
		setIsDropdownOpen(false);
	};

	// useEffect(() => {
	// 	if (selectedDepartment == null) {
	// 		generalMemberPage("/members");
	// 	}
	// }, [selectedDepartment, generalMemberPage]);

	return (
		<div className="w-full flex justify-center">
			<div className="relative">
				<button className="flex items-center px-4 py-2 bg-ft-primary-blue-500 rounded-lg min-w-max">
					<span className="text-white">
						{selectedDepartment || "Department"}
					</span>
					<CaretDown
						color="white"
						className={`flex items-center transition-transform fill-white ${
							isDropdownOpen ? "transform rotate-180" : ""
						}`}
						onClick={toogleDropdown}
					/>
				</button>
			</div>
			{isDropdownOpen && (
				<div className="absolute z-10 mt-2 border bg-white border-gray-300 rounded-lg w-auto left-1/2 transform -translate-x-1/2">
					<ul>
						{departments.map((department) => (
							<li
								key={department}
								className={`p-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer ${
									selectedDepartment === department
										? "bg-gray-200"
										: ""
								}`}
								onClick={() =>
									handleDepartmentChange(department)
								}
							>
								{department}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default MemberFilter;
