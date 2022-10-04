import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'Free', price: 1200, features: [
            'Awesome Features',
            'Extra Service',
            "More Channel",
            "Ad Block Features",
            "Useless Feature",
            "Royal Feature"
        ]
    },
        {id:2, name: 'Medium', price: 2400, features: [
            'Every Thing on free',
            'Extra Service',
            "More Channel",
            "Ad Block Features",
            "Useless Feature",
            "Royal Feature"
        ]},
        {id:3, name: 'Premium', price: 3600, features: [
            'Every thing on premium',
            'Extra Service',
            "More Channel",
            "Ad Block Features",
            "Useless Feature",
            "Royal Feature"
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>The best Deal.</h2>
            <div className="grid md:grid-cols-3 gap-3">
            {
                pricingOptions.map( option => <PriceOption
                key={option.id}
                option = {option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;