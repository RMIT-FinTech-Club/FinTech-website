import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
type CardEventContent = {
	eventName: string;
	location: string;
	title: string;
	detail: string;
	timeOnHour: string;
	timeOnDay: string;
	timeOnMonth: string;
};
const CardEvent = ({
	eventName,
	location,
	title,
	detail,
	timeOnHour,
	timeOnDay,
	timeOnMonth,
}: CardEventContent) => {
	return (
		<Card className="flex flex-col sm:flex-col-reverse sm:w-unit-7xl mr-2">
			<CardHeader className=" text-white sm:justify-around sm:items-center sm:text-ft-primary-blue">
				<div className="bg-ft-primary-blue w-3/12 flex justify-around content-center sm:flex-col-reverse  sm:bg-transparent sm:text-ft-primary-blue">
					<h1 className="text-3xl sm:text-4xl">{timeOnDay}</h1>
					<h3 className="text-2xl sm:text-4xl">{timeOnMonth}</h3>
				</div>
				<div className="hidden  sm:block sm:w-3/5 sm:text-ft-primary-blue">
					<h1 className="text-4xl font-bold sm:font-semibold">
						{title}
					</h1>
					<p className="text-lg">{detail}</p>
				</div>
			</CardHeader>
			<CardBody className="flex text-ft-primary-blue flex-col gap-1">
				<div className="sm:hidden">
					<h2 className="text-2xl font-semibold">{eventName}</h2>
					<h3 className="text-xl font-medium">{timeOnHour}</h3>
					<p className=" text-base">{location}</p>
				</div>
				<a
					href="/"
					className="hidden w-full sm:block sm:h-unit-5xl bg-gray-50"
				>
					<img
						src=""
						alt=""
						className="relative top-0 left-0 w-full h-full"
					/>
				</a>
			</CardBody>
			<CardFooter className="sm:hidden">
				<Button className="w-full bg-ft-primary-blue text-xl text-white font-bold">
					View details
				</Button>
			</CardFooter>
		</Card>
	);
};
export default CardEvent;
