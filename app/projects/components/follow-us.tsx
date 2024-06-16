import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import React from "react";

const FollowUs = () => {
    return (
        <div className="flex">
            {/* Laptop view */}
            <div className="lg:flex py-2 px-4 hidden">
                <div className="">
                    <h5 className="text-ft-text-bright">
                        Follow Us:
                    </h5>
                </div>
                <div className="flex">
                    <IconBrandFacebook
                        className="mx-2 cursor-pointer"
                        size={50}
                        color="#dcb968"
                    />
                    <IconBrandInstagram
                        className="mx-2 cursor-pointer"
                        size={50}
                        color="#dcb968"
                    />
                    <IconBrandYoutube
                        className="mx-2 cursor-pointer"
                        size={50}
                        color="#dcb968"
                    />
                </div>
            </div>
            {/* Mobile view */}
            <div className="flex lg:hidden py-1 px-2 items-center">
                <div className="">
                    <h5 className="text-ft-text-bright">
                        Follow Us:
                    </h5>
                </div>
                <div className="flex">
                    <IconBrandFacebook
                        className="mx-2 cursor-pointer"
                        size={30}
                        color="#ebebeb"
                    />
                    <IconBrandInstagram
                        className="mx-2 cursor-pointer"
                        size={30}
                        color="#ebebeb"
                    />
                    <IconBrandYoutube
                        className="mx-2 cursor-pointer"
                        size={30}
                        color="#ebebeb"
                    />
                </div>
            </div>
        </div>
    )
}

export default FollowUs;