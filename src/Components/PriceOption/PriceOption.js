import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className="bg-indigo-300 m-6 rounded-md p-6">
            <div>
                <p><span className='text-7xl  text-white font-bold'>{option.price}</span>
                <span className='text-2xl text-gray-100'>/Month</span>
                </p>
                <h3 className='text-3xl font-semibold my-4 text-yellow-400'>{option.name}</h3>
            </div>
            {
                features.map( (feature, idx) => <Feature
                key={idx} 
                feature = {feature}
                ></Feature>)
            }
            <button className='bg-blue-600 text-white text-2xl font-semibold p-2 mt-5 rounded-md w-full'>Buy Now</button>
        </div>
    );
};

export default PriceOption;