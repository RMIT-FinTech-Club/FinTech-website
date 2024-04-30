import React from 'react';
import Image from 'next/image';
import EventDetail from './(components)/eventDetail';
import EventLocation from './(components)/eventLocation';

const EventDateAndLocation = () => {
    return (
        <div className='flex flex-col my-16'>
            <div className='flex'>
                <EventDetail />
                <EventLocation />
            </div>
            <div className='absolute top-1/4 right-0'>
                <Image
                    loading='lazy'
                    src='./SideFinTechBearForEventDateAndLocation.svg'
                    alt='above decoration for event date and location'
                    width={300}
                    height={300}
                />
            </div>
            <div className='flex justify-center my-4'>
                {/* Below Decoration for Event Date and Location */}
                <Image
                    loading='lazy'
                    src='./ThreeBearsAndDecorationsForEventDateAndLocation.svg'
                    alt='below decoration for event date and location'
                    width={1200}
                    height={300}
                />
            </div>
        </div>
    );
};

export default EventDateAndLocation;