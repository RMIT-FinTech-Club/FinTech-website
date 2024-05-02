import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const ExecuteBoard = () => {
	return (
		<section className=" relative bg-ft-primary-yellow-500 h-screen w-full">
			<section className="grid grid-cols-3 gap-12 w-full  mt-10 -mx-side-margin">
				<div>
					<Card className="py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<Image
								alt="Card background"
								className="object-cover rounded-xl bg-ft-primary-yellow-500"
								src="ExecuteBoard/VicePresident.svg"
								width={270}
							/>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<p className="text-tiny uppercase font-bold">
								Daily Mix
							</p>
							<small className="text-default-500">
								12 Tracks
							</small>
							<h4 className="font-bold text-large">
								Frontend Radio
							</h4>
						</CardBody>
					</Card>
				</div>
                <div>
					<Card className="py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<Image
								alt="Card background"
								className="object-cover rounded-xl bg-ft-primary-yellow-500"
								src="ExecuteBoard/President.svg"
								width={270}
							/>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<h6 className="">
								Hoang Nguyen Nhat Minh
							</h6>
							<p>VicePresident</p>
						</CardBody>
					</Card>
				</div>
                <div>
					<Card className="py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<Image
								alt="Card background"
								className="object-cover rounded-xl bg-ft-primary-yellow-500"
								src="ExecuteBoard/CFO.svg"
								width={270}
							/>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<p className="text-tiny uppercase font-bold">
								Daily Mix
							</p>
							<small className="text-default-500">
								12 Tracks
							</small>
							<h4 className="font-bold text-large">
								Frontend Radio
							</h4>
						</CardBody>
					</Card>
				</div>
			</section>
		</section>
	);
};
export default ExecuteBoard;
