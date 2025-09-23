import React from 'react'

type Props = {
    index: number;
    rate: {
        name: string;
        score: number;
    };
}

const SkillCard= ({ index, rate }: Props) => {
  return (
    <div key={index} className='flex flex-col items-center'>
        <span className='text-xs sm:text-lg'>{rate.name}</span>
        <span className='text-lg sm:text-2xl'><strong className='text-2xl'>{rate.score}</strong> de 10</span>
    </div>
  )
}

export default SkillCard