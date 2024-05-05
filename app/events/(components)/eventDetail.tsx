// eventDetail.tsx
import React, { lazy, Suspense } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../styles/eventDetail/events-detail.css";
import eventData from "./eventsData";

const LazyCard = lazy(() => import("./card"));

export default function EventDetail() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
	};

	const eventCards = eventData.map((event) => (
		<Suspense key={event.id} fallback={<div>...</div>}>
			<LazyCard
				title={event.title}
				description={event.description}
				date={event.date}
				imageUrl={event.imageUrl as string}
			/>
		</Suspense>
	));

	return (
		<div className="flex justify-center items-center min-h-screen w-full px-side-margin events">
			<div className="py-8 ">
				<h2 className="text-ft-heading-5 font-bold mb-10 text-ft-primary-blue-500">
					Other events that you might be interested
				</h2>
				<Slider {...settings} className="slider">
					{eventCards}
				</Slider>
			</div>
		</div>
	);
}
