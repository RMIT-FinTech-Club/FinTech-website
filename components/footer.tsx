import React from "react";
import { fontSans } from "@/config/fonts";

const Footer = () => {
    return (
        <footer className="h-[475px] w-full bg-ft-primary-blue flex flex-col">
            <div className="mx-auto w-[1652px] h-[350px] mt-[62px] flex">
                <div className="w-1/3 mr-[32px]">
                    <div className="mt-[20px]">
                        <h1 className="text-ft-text-bright text-4xl font-semibold fontSans">About Us</h1>
                        <p className="mt-[4px] mr-[32px] text-ft-text-bright">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut bibendum lacus. Etiam eleifend nisl mi, vitae dignissim lectus elementum eu. </p>
                    </div>
                </div>
                <div className="w-1/3 mr-[32px]">
                    <div className="mt-[20px]">
                        <h1 className="text-ft-text-bright text-4xl font-semibold">Important Links</h1>
                        <p className="mt-[4px] text-ft-text-bright">Home</p>
                        <p className="mt-[4px] text-ft-text-bright">About Us</p>
                        <p className="mt-[4px] text-ft-text-bright">Events</p>
                        <p className="mt-[4px] text-ft-text-bright">Projects</p>
                        <p className="mt-[4px] text-ft-text-bright">Join Us</p>
                    </div>
                </div>
                <div className="w-1/3 mr-[32px]">
                    <div className="mt-[20px]">
                        <h1 className="ft-heading-1 text-ft-text-bright text-4xl font-semibold">Contact Info</h1>
                        <div className="flex items-center mt-[12px]">
                            <p className="text-ft-text-bright">rmitfintechclub.sgs@rmit.edu.vn</p>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <p className="text-ft-text-bright">rmitfintechclub.sgs@rmit.edu.vn</p>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <p className="text-ft-text-bright">rmitfintechclub.sgs@rmit.edu.vn</p>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <p className="text-ft-text-bright">rmitfintechclub.sgs@rmit.edu.vn</p>
                        </div>
                    </div>
                </div>
            </div>
			<div className="mx-auto w-[1652px] h-[3px] bg-ft-secondary-yellow rounded-full"></div>
			<div className="mx-auto my-[13px]">
			    <p className="text-ft-text-bright">Copyright ©2024 All rights reserved | This website is designed and built by RMIT FinTech Club </p>
			</div>
        </footer>
    )
}

export default Footer;