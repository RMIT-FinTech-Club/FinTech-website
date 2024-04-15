import React from "react";
import { Mail, BrandFacebook, BrandInstagram, BrandTiktok  } from "tabler-icons-react";

const Footer = () => {
    return (
        <footer className="h-[475px] w-full bg-ft-primary-blue flex flex-col">
            <div className="mx-auto w-[1652px] h-[350px] mt-[62px] flex">
                <div className="w-1/3 mr-[32px]">
                    <div className="mt-[20px]">
                        <h1 className="text-ft-text-bright text-[36px] font-semibold">About Us</h1>
                        <p className="mt-[4px] mr-[32px] text-ft-text-bright text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut bibendum lacus. Etiam eleifend nisl mi, vitae dignissim lectus elementum eu. </p>
                        <img className="w-[125px] h-[125px] mt-[20px]" src="/whiteLogo.png" alt="White logo" />
                    </div>
                </div>
                <div className="w-1/3 mr-[32px]">
                    <div className="mt-[20px]">
                        <h1 className="text-ft-text-bright text-[36px] font-semibold">Important Links</h1>
                        <p className="mt-[4px] text-ft-text-bright text-[18px]">Home</p>
                        <p className="mt-[4px] text-ft-text-bright text-[18px]">About Us</p>
                        <p className="mt-[4px] text-ft-text-bright text-[18px]">Events</p>
                        <p className="mt-[4px] text-ft-text-bright text-[18px]">Projects</p>
                        <p className="mt-[4px] text-ft-text-bright text-[18px]">Join Us</p>
                    </div>
                </div>
                <div className="w-1/3 mr-[32px]">
                    <div className="mt-[20px]">
                        <h1 className="ft-heading-1 text-ft-text-bright text-[36px] font-semibold">Contact Info</h1>
                        <div className="flex items-center mt-[12px]">
                            <Mail className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]"/>                                                                  
                            <BrandFacebook className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]"/>                                                  
                            <BrandInstagram className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]"/>                                      
                            <BrandTiktok className="w-[30px] h-[30px] text-ft-text-bright mr-[16px]"/>                           
                        </div>
                    </div>
                </div>
            </div>
			<div className="mx-auto w-[1652px] h-[3px] bg-ft-secondary-yellow rounded-full"></div>
			<div className="mx-auto my-[13px]">
			    <p className="text-ft-text-bright text-[18px]">Copyright ©2024 All rights reserved | This website is designed and built by RMIT FinTech Club </p>
			</div>
        </footer>
    )
}

export default Footer;