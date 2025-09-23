import React from 'react'

type rate = {
    name: string;
    score: number;
}

type Props = {
    rates: rate[];
}

const Rates = ({rates}: Props) => {
  return ( 
    <div className='layout flex flex-wrap gap-6 justify-around'>
        {rates.map((rate, index) => (
            <div key={index} className='flex flex-col items-center'>
                <span className='text-xs sm:text-lg'>{rate.name}</span>
                <span className='text-lg sm:text-2xl'><strong className='text-2xl'>{rate.score}</strong> de 10</span>
            </div>
        ))}
    </div>
  )
}

export default Rates;