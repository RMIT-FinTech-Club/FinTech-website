import React from "react";

const EventLocation = () => {
	return (
		<div className="flex flex-col justify-between lg:w-1/2 2xl:w-2/3 mx-4 2xl:mx-16 my-4 2xl:my-8 h-full">
			<div className="py-1 2xl:py-2">
				<h4 className="py-1 2xl:py-2 text-center lg:text-left">
					Event Location
				</h4>
			</div>
			<div className="flex">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62713.703081693166!2d106.6549008613193!3d10.764783831994377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbea5fe3db1%3A0xfae94aca5709003f!2zxJDhuqFpIEjhu41jIFJNSVQgTmFtIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1714499338949!5m2!1svi!2s"
					loading="lazy"
					title="Event Location Google Map"
					className="w-full h-[360px] 2xl:h-[480px]"
				/>
			</div>
		</div>
	);
};

export default EventLocation;