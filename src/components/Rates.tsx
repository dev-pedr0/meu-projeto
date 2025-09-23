import React from 'react'
import SkillCard from './SkillCard';

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
            <SkillCard index={index} rate={rate}/>
        ))}
    </div>
  )
}

export default Rates;