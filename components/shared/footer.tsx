import React from "react";
import { Mail, BrandFacebook, BrandInstagram, BrandTiktok } from "tabler-icons-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="md:h-fit w-full bg-ft-primary-blue flex flex-col justify-center items-center">
            <div className="mx-auto md:w-[90%] h-fit mt-[62px] mb-[20px] flex flex-col md:flex-row justify-center">
                <div className="md:w-1/3 w-full">
                    <div className="mt-[20px] flex flex-col-reverse items-center md:block">
                        <div className="flex flex-col items-center md:block mb-[40px] md:mb-0 w-[90%] md:w-full">
                            <h5 className="text-ft-text-bright">About Us</h5>
                            <p className="text-ft-text-bright text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut bibendum lacus. Etiam eleifend nisl mi, vitae dignissim lectus elementum eu. </p>
                        </div>
                        <img className="w-[125px] h-[125px] mt-[20px] mb-[40px] md:mb-0" src="/whiteLogo.png" alt="White logo" />
                    </div>
                </div>
                <div className="md:w-1/3 w-full flex justify-end mb-[40px] md:mb-0">
                    <ul className="mt-[20px] mx-auto text-center md:text-left">
                        <h5 className="text-ft-text-bright">Important Links</h5>
                        <li><a href="#" className="block mb-2"><p className="text-ft-text-bright">Home</p></a></li>
                        <li><a href="#" className="block mb-2"><p className="text-ft-text-bright">About Us</p></a></li>
                        <li><a href="#" className="block mb-2"><p className="text-ft-text-bright">Events</p></a></li>
                        <li><a href="#" className="block mb-2"><p className="text-ft-text-bright">Projects</p></a></li>
                        <li><a href="#" className="block"><p className="text-ft-text-bright">Join Us</p></a></li>
                    </ul>
                </div>
                <div className="md:w-1/3 w-full mb-[40px] md:mb-0 flex justify-end">
                    <div className="mt-[20px] w-fit flex mx-auto items-center flex-col md:block">
                        <h5 className="ft-heading-1 text-ft-text-bright w-fit">Contact Info</h5>
                        <div className="flex items-center w-fit mt-[12px]">
                            <a href="#"><Mail className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]" /> </a>
                            <a href="#"><BrandFacebook className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]" /></a>
                            <a href="#"><BrandInstagram className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]" /></a>
                            <a href="#"><BrandTiktok className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[90%] h-[3px] bg-ft-secondary-yellow rounded-full"></div>
            <div className="mx-auto my-[13px]">
                <p className="text-ft-text-bright text-center md:text-left w-[90%] md:w-full mx-auto">Copyright ©2024 All rights reserved | This website is designed and built by RMIT FinTech Club </p>
            </div>
        </footer>
    )
}

export default Footer;