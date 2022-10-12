import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../Header/Header';

const Chart = () => {
    const data = [
        {
            name: 'React',
            total: 8,
           
        },
        {
            name: 'Javascript',
            total: 9,
           
        },
        {
            name: 'CSS',
            total: 8,
           
        },
        {
            name: 'Git',
            total: 11,
            
        },
        
    ];


    return (
        <div className='bg-slate-200 mt-16 ml-32 mr-32 p-10'>
         
           <LineChart width={800} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
           </LineChart>
            
        </div>
    );
};

export default Chart;