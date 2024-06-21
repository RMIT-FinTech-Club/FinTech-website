import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from "@nextui-org/react";
import React from "react";
import './styles.css';

const ManagementBoard = () => {
	const imageUrl = "HallOfFame-Background.svg";
	return (
		<section className=" relative bg-ft-primary-yellow-500 bg-cover bg-center h-full -mx-side-margin-mobile md:-mx-side-margin">
			<main className=" mx-side-margin-mobile mt-0  md:mx-side-margin">
				<div className=" grid grid-cols-2 gap-8 md:grid-cols-4 my-16">
					<Card
						className="py-4 -px-2 bg-transparent"
						radius="none"
						shadow="none"
					>
						<CardHeader className="py-2 px-5 flex flex-col justify-items-center">
							<div className="bg-white rounded-full relative overflow-visible">
								<Image
									alt="Card background"
									className="object-cover rounded-full bg-transparent management-card-image"
									src="ExecuteBoard/VicePresident.svg"
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible py-2 text-center">
							<h6 className="font-bold text-large text-ft-primary-blue-500">
								TRUONG MINH NGOC
							</h6>
							<h6 className="text-ft-primary-blue-500 text-tiny">Head of Business Department</h6>
						</CardBody>
					</Card>
					<Card
						className="py-4 -px-2 bg-transparent"
						radius="none"
						shadow="none"
					>
						<CardHeader className="py-2 px-5 flex-col items-center">
							<div className="bg-white rounded-full relative overflow-visible">
								<Image
									alt="Card background"
									className="object-cover rounded-full bg-transparent management-card-image"
									src="ExecuteBoard/President.svg"
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible py-2 text-center">
							<h6 className="font-bold text-large text-ft-primary-blue-500">
								NGUYEN BAO NGOC
							</h6>
							<h6 className="text-ft-primary-blue-500 text-tiny">Head of Human Resources Department</h6>
						</CardBody>
					</Card>
					<Card
						className="py-4 -px-4 bg-transparent"
						radius="none"
						shadow="none"
					>
						<CardHeader className="py-2 px-5 flex-col items-center">
							<div className="bg-white rounded-full relative overflow-visible">
								<Image
									alt="Card background"
									className="object-cover rounded-full bg-transparent management-card-image"
									src="ExecuteBoard/CFO.svg"
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible py-2 text-center">
							<h6 className="font-bold text-large text-ft-primary-blue-500">
								NGUYEN TRAN HOANG ANH
							</h6>
							<h6 className="text-ft-primary-blue-500 text-tiny">Head of Marketing Department</h6>
						</CardBody>
					</Card>
					<Card
						className="py-4 -px-2 bg-transparent"
						radius="none"
						shadow="none"
					>
						<CardHeader className="py-2 px-5 flex flex-col justify-items-center">
							<div className="bg-white rounded-full relative overflow-visible">
								<Image
									alt="Card background"
									className="object-cover rounded-full bg-transparent management-card-image"
									src="ExecuteBoard/VicePresident.svg"
									shadow="none"
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible py-2 text-center">
							<h6 className="font-bold text-large text-ft-primary-blue-500">
								HUYNH LE DIEM QUI
							</h6>
							<h6 className="text-ft-primary-blue-500 text-tiny">Head of Technology Department</h6>
						</CardBody>
					</Card>
				</div>
				<div className=" grid gap-2 md:grid-cols-1 md:gap-2 text-center mb-5">
					<h4 className=" text-ft-primary-blue-500">
						MEET OUR <strong>MANAGEMENT BOARD</strong>
					</h4>
					<p className=" text-ft-primary-blue-500 w-full md:w-4/6 mx-auto">
						Cras eu dignissim mauris. Duis imperdiet erat sapien,
						molestie aliquet arcu tincidunt id. Mauris sit amet quam
						mi. Duis porttitor lectus quis turpis malesuada, eu
						luctus elit dignissim.
					</p>
				</div>
			</main>
		</section>
	);
};
export default ManagementBoard;
