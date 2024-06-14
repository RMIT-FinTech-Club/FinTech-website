'use client';

import { Button, Slider } from '@nextui-org/react';
import { IconDownload, IconPlayerPlayFilled, IconRewindBackward10, IconRewindForward10, IconShare, IconVolume, IconPlayerPauseFilled, IconVolumeOff } from '@tabler/icons-react';
import { color } from 'framer-motion';
import { useState } from 'react';
import SpeedSelector from './audioSpeedSelector';

const PodcastMainFunction = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isVolumeOn, setIsVolumeOn] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col px-24">
            <div className="py-4">
                <h5 className="text-ft-text-bright">
                    Podcast Title
                </h5>
            </div>
            <div>
                <Slider 
                    
                />
            </div>
            <div className='w-full py-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center w-1/6'>
                    {isVolumeOn ? (
                        <IconVolume 
                            size={50}
                            color='#ebebeb'
                            className='mx-2 flex-shrink-0'
                            onClick={() => setIsVolumeOn(false)}
                        />
                        ) : (
                        <IconVolumeOff 
                            size={50}
                            color='#ebebeb'
                            className='mx-2 flex-shrink-0'
                            onClick={() => setIsVolumeOn(true)}
                        />
                        )}
                        <Slider 
                            size='md'
                            className='w-full mx-2'
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <IconRewindBackward10
                            size={75}
                            color='#ebebeb'
                            className='mx-2'
                        />
                        {isPlaying ? (
                            <IconPlayerPauseFilled
                                size={125}
                                color="#ebebeb"
                                className='mx-2'
                                onClick={() => setIsPlaying(false)}
                            />
                        ) : (
                            <IconPlayerPlayFilled
                                size={125}
                                color="#ebebeb"
                                className='mx-2'
                                onClick={() => setIsPlaying(true)}
                            />
                        )}
                        <IconRewindForward10
                            size={75}
                            color="#ebebeb"
                            className='mx-2'
                        />
                    </div>
                    <div className='flex items-center'>
                        <SpeedSelector onSpeedChange={function (speed: number): void {
                            throw new Error('Function not implemented.');
                        } } />
                        <IconDownload 
                            size={50}
                            color='#ebebeb'
                            className='mx-2'
                        />
                        <IconShare 
                            size={50}
                            color='#ebebeb'
                            className='mx-2'
                        />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default PodcastMainFunction;