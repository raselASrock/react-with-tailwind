import React from 'react';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'Free', price: 1200},
        {id:2, name: 'Medium', price: 2400},
        {id:3, name: 'Premium', price: 3600},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>The best Deal.</h2>
        </div>
    );
};

export default Pricing;