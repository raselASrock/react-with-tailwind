import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { data } from 'autoprefixer';

const PhoneBar = () => {
    const [phones,setPhones] = useState([]);
    useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(response => response.json())
        // .then(data => console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phonesData = phonesLoaded.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone
            })
            console.log(phonesData);
            setPhones(phonesData)
        })
    },[])
    return (
        <BarChart width={500} height={200} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
    );
};

export default PhoneBar;