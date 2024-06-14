import React from 'react';
import Image from 'next/image';
import HeaderPodcastPage from '../components/headerPodcastPage';
import Author from '../components/author';
import PodcastDescription from '../components/podcastDescription';
import FollowUs from '../components/follow-us';
import PodcastMainFunction from '../components/podcastMainFunction';

const Podcast = () => {
    return (
        <div className="w-screen flex flex-col items-center justify-around relative">
            <Image 
                className='object-cover absolute'
                src="/podcast-background.png"
                alt="Podcast background image"
                layout='fill'
                objectFit='cover'
            />
            <div className='flex flex-col z-10 h-screen justify-around'>
                <HeaderPodcastPage text="Podcast"/>
                <div className='flex'>
                    <div className='w-1/3 h-full flex justify-center py-4'>
                        <Image 
                            src={'/fintechtainment.png'}
                            alt='Fintechtainment logo'
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className='w-3/4 flex flex-col justify-around'>
                        <div className=''>
                            <Author />
                            <PodcastDescription />
                            <FollowUs />
                        </div>
                    </div>
                </div>
                <div>
                    <PodcastMainFunction />
                </div>
            </div>
        </div>
    );
}

export default Podcast;