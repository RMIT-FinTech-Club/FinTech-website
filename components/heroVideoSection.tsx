import { IconChevronCompactDown } from '@tabler/icons-react'
import clsx from 'clsx'
import React from 'react'


const HerosectionVid: React.FC = () => {
    return (
        <div className={clsx('relative w-screen h-screen')}>
            <video autoPlay muted loop id='hero-section-bg-vid'
                className={clsx('w-full h-full', // Full screen
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', // Center the video
                    'object-cover' // Cover
                )}>
                <source src='/hero-section-bg-vid.mp4' type='video/mp4' />
            </video>
            <div className='absolute bottom-16 right-0 left-0'>
                <h2 className='text-center w-full text-ft-text-bright'>Make Fintech great again</h2>
                <br />
                <p className='text-center w-full text-ft-text-bright'>April 1st 2025, Report</p>
                <IconChevronCompactDown size={48} className='text-center w-full text-ft-text-bright' />
            </div>
        </div>
    )
}

export default HerosectionVid