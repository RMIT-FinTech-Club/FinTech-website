import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
  } from "@nextui-org/react";
  import React from "react";
  import './styles.css';
  
  const ExecuteBoard = () => {
	return (
	  <section className="relative bg-ft-primary-yellow-500 bg-cover bg-center h-full -mx-side-margin-mobile md:-mx-side-margin">
		<main className="mx-side-margin-mobile mt-0 md:mx-side-margin">
		  <div className="grid grid-cols-1 gap-8 md:grid-cols-4 my-16">
			<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
			  <CardHeader className="py-2 px-5 flex flex-col justify-items-center">
				<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible">
				  <Image
					alt="Card background"
					className="object-cover rounded-2xl bg-transparent text-center team-card-image"
					src="ExecuteBoard/VicePresident.svg"
				  />
				</div>
			  </CardHeader>
			  <CardBody className="overflow-visible py-2 text-center">
				<h6 className="font-bold text-large text-ft-primary-blue-500">
				  Hoang Nguyen Nhat Minh
				</h6>
				<h6 className="text-tiny text-ft-primary-blue-500">Vice President</h6>
			  </CardBody>
			</Card>
			<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
			  <CardHeader className="py-2 px-5 flex-col items-center">
				<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible">
				  <Image
					alt="Card background"
					className="object-cover rounded-2xl bg-transparent text-center team-card-image"
					src="ExecuteBoard/President.svg"
				  />
				</div>
			  </CardHeader>
			  <CardBody className="overflow-visible py-2 text-center">
				<h6 className="font-bold text-large text-ft-primary-blue-500">
				  Nguyen Minh Dung
				</h6>
				<h6 className="text-tiny text-ft-primary-blue-500">President</h6>
			  </CardBody>
			</Card>
			<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
			  <CardHeader className="py-2 px-5 flex-col items-center">
				<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible">
				  <Image
					alt="Card background"
					className="object-cover rounded-2xl bg-transparent text-center team-card-image"
					src="ExecuteBoard/CFO.svg"
				  />
				</div>
			  </CardHeader>
			  <CardBody className="overflow-visible py-2 text-center">
				<h6 className="font-bold text-large text-ft-primary-blue-500">
				  Nguyen Minh Phuong
				</h6>
				<h6 className="text-tiny text-ft-primary-blue-500">CFO</h6>
			  </CardBody>
			</Card>
			<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
			  <CardHeader className="py-2 px-5 flex-col items-center">
				<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible">
				  <Image
					alt="Card background"
					className="object-cover rounded-2xl bg-transparent text-center team-card-image"
					src="ExecuteBoard/CFO.svg"
				  />
				</div>
			  </CardHeader>
			  <CardBody className="overflow-visible py-2 text-center">
				<h6 className="font-bold text-large text-ft-primary-blue-500">
				  Nguyen Minh Phuong
				</h6>
				<h6 className="text-tiny text-ft-primary-blue-500">CFO</h6>
			  </CardBody>
			</Card>
		  </div>
		  <div className="grid gap-2 md:grid-cols-1 md:gap-2 text-center mb-5">
			<h4 className="text-ft-primary-blue-500">
			  MEET OUR <strong>EXECUTIVE BOARD</strong>
			</h4>
			<p className="text-ft-primary-blue-500 w-full md:w-4/6 mx-auto">
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
  
  export default ExecuteBoard;
  