import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PriceOption = ({option}) => {
    return (
        <div className="bg-indigo-300 m-6 rounded-md p-6">
            <div>
                <p><span className='text-7xl  text-white font-bold'>{option.price}</span>
                <span className='text-2xl text-gray-100'>/Month</span>
                </p>
                <h3 className='text-3xl font-semibold my-4'>{option.name}</h3>
            </div>
            <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-blue-500"/>
            <p className='ml-2'>Awesome Feature</p>
            </div>
        </div>
    );
};

export default PriceOption;