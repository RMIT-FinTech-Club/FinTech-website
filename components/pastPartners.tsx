import { Image } from '@nextui-org/react';
import React from 'react';
import Slider from 'react-slick';

const PastPartners = () => {
    const width = 150;
    const height = 150;
    const partners = [
        {
            id: "1",
            src: "https://via.placeholder.com/" + width + "x" + height,
            alt: "Placeholder image",
        },
        {
            id: "2",
            src: "https://via.placeholder.com/" + width + "x" + height,
            alt: "Placeholder image",
        },
        {
            id: "3",
            src: "https://via.placeholder.com/" + width + "x" + height,
            alt: "Placeholder image",
        },
        {
            id: "4",
            src: "https://via.placeholder.com/" + width + "x" + height,
            alt: "Placeholder image",
        },
        {
            id: "5",
            src: "https://via.placeholder.com/" + width + "x" + height,
            alt: "Placeholder image",
        },
        {
            id: "6",
            src: "https://via.placeholder.com/" + width + "x" + height,
            alt: "Placeholder image",
        },
    ];

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div className='w-full py-6'>
            <Slider {...settings} >
                {partners.map((partner, _idx) => (
                    <div key={partner.id} className='w-1/5 h-auto'>
                        <div className='flex justify-center items-center'>
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PastPartners;