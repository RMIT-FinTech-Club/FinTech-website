
import { nextuiThemeConfig } from '@/config/theme';
import { Slider } from '@nextui-org/react';
import { IconDownload, IconPlayerPlayFilled, IconRewindBackward10, IconRewindForward10, IconShare, IconVolume } from '@tabler/icons-react';

const PodcastMainFunction = () => {
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
                    <div className='flex items-center w-1/12'>
                        <IconVolume 
                            size={50}
                            color='#ebebeb'
                            className='mx-2 flex-shrink-0'
                        />
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
                        <IconPlayerPlayFilled
                            size={125}
                            color="#ebebeb"
                            className='mx-2'
                        />
                        <IconRewindForward10
                            size={75}
                            color="#ebebeb"
                            className='mx-2'
                        />
                    </div>
                    <div className='flex'>
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