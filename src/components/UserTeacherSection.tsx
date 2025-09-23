import React from 'react'
import Title from './Title';
import Rates from './Rates';
import ProfileCard from './ProfileCard';
import Testimonial from './Testimonial';

const UserTeacherSection = () => {

    const rates = [
         { name: "Flex & Grid Layout", score: 9 },
         { name: "Media Query", score: 9 },
         { name: "Estilização React", score: 9 },
         { name: "Material UI", score: 4 },
    ];

    const ratesTeacher = [
        { name: "Didática", score: 10 },
        { name: "Domínio", score: 10 },
    ];

  return (
    <div>
        <ProfileCard/>
        <div>
            <Title title={"minha auto avaliação"}/>
            <Rates rates={rates}/>
        </div>
        <div>
            <Title title={"avaliação do professor"}/>
            <Rates rates={ratesTeacher}/>
            <p className='text-center text-xs italic'>Nota: Estou sendo honesto, eu juro</p>
        </div>
        <Testimonial/>
    </div>
  )
}

export default UserTeacherSection;