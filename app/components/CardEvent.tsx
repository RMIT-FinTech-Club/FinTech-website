import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
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
        <Card className="flex flex-col mr-5 mb-6 md:w-unit-7xl">
            <CardBody className="p-0 overflow-visible">
                <Image shadow="sm"
                    radius="lg"
                    width="100%"
                    className="w-full object-cover h-[200px]"
                    alt="Card background"
                    src="/ProjectGeneralImage.png" />
            </CardBody>
            <CardFooter className=" text-white gap-2 md:text-ft-primary-blue">
                <div className="bg-ft-primary-blue w-auto rounded-lg px-4 flex justify-around content-center md:flex-col-reverse  md:bg-transparent md:text-ft-primary-blue">
                    <h1 className="text-3xl md:text-4xl">{timeOnDay}</h1>
                    <h3 className="text-2xl md:text-4xl">{timeOnMonth}</h3>
                </div>
                <div className="hidden  md:block md:w-full md:text-ft-primary-blue">
                    <h1 className="text-4xl font-bold md:font-semibold">
                        {title}
                    </h1>
                    <p className="text-lg w-full">{detail}</p>
                </div>
            </CardFooter>
            {/* For mobile */}
            <CardBody className="flex text-ft-primary-blue flex-col gap-1">
                    <div className="md:hidden">
                        <h2 className="text-2xl font-semibold">{eventName}</h2>
                        <h3 className="text-xl font-medium">{timeOnHour}</h3>
                        <p className=" text-base">{location}</p>
                    </div>
                    <a
                        href="/"
                        className="hidden w-full md:block md:h-unit-5xl bg-gray-50"
                    >
                        <img
                            src=""
                            alt=""
                            className="relative top-0 left-0 w-full h-full"
                        />
                    </a>
                </CardBody>
                <CardFooter className="md:hidden">
                    <Button className="w-full bg-ft-primary-blue text-xl text-white font-bold">
                        View details
                    </Button>
                </CardFooter>
        </Card>
    );
};
export default CardEvent;
