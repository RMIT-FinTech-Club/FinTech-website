import React from 'react';
import Image from 'next/image';

const Author = () => {
    return (
        <div className='hidden lg:flex lg:flex-col my-2 px-4'>
            <h4 className='text-ft-text-bright py-4'>Authors</h4>
            <div className='flex'>
                <div className='mx-2 flex flex-col items-center mx-2'>
                    <Image
                        src={'/author.png'}
                        alt='Author'
                        width={75}
                        height={75}
                    />
                    <p className='text-ft-text-bright'>
                        Hoang Minh
                    </p>
                </div>
                <div className='mx-2 flex flex-col items-center mx-2'>
                    <Image
                        src={'/author.png'}
                        alt='Author'
                        width={75}
                        height={75}
                    />
                    <p className='text-ft-text-bright'>
                        Hoang Minh
                    </p>
                </div>
            </div>
            </div>
    )
}

export default Author;