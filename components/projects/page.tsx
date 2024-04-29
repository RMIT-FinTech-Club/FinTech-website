import React from "react";
import {Avatar, AvatarIcon} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const Project = () => {
    return(
        <section className=" mt-16 flex flex-col justify-start">
            <header>
                <h1>Global trading</h1>
            </header>
            <main className="x mt-6">
                <div className="flex flex-row my-8 gap-6">
                    <div className=" my-auto" ><Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg"/></div>
                    <div>
                    <h6 className=" font-bold">Lorem ipsum dolor sit amet</h6>
                    <h6 className="">Lorem ipsum dolor sit amet</h6>
                </div>

                </div>
                <Card className=" max-w-full">
                <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
                </Card>
                <p>The FinTech Forum 2024 is set to be the most dynamic student driven FinTech event, with a mission to educate and immerse students into the various aspects of the FinTech Universe! As we begin to officially launch the event, we would like to acknowledge the contributions made by our esteemed Sponsors that have made our event possible.</p>
                <Divider className="my-6 bg-black" />
                <div className=" grid grid-cols-2">
                    <div><h5>Lorem ipsum dolor sit amet</h5></div>
                    <div className=" grid grid-cols-2 grid-rows-2 text-center gap-6">
                        <div className="flex flex-row">
                        <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <p className=" ml-3">lorem</p>
                        </div>
                        <div className="flex flex-row">
                        <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <p className=" ml-3">lorem</p>
                        </div>
                        <div className="flex flex-row">
                        <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <p className=" ml-3">lorem</p>
                        </div>
                        <div className="flex flex-row">
                        <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <p className=" ml-3">lorem</p>
                        </div>
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Project;