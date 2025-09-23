import React from 'react'
import Title from './Title';
import Rates from './Rates';

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
        <div className='flex justify-between layout items-center gap-2'>
            <div className='flex-1'>
                <img src="photo.jpg" alt="" className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 object-cover rounded-full"/>
            </div>
            <div className='flex-2'>
                <p className='font-bold italic'>Pedro</p>
                <p className='text-xs sm:text-xl'>Meu trabalho é transformar conceitos em interfaces funcionais e impactantes</p>
            </div>
        </div>
        <div>
            <Title title={"minha auto avaliação"}/>
            <Rates rates={rates}/>
        </div>
        <div>
            <Title title={"avaliação do professor"}/>
            <Rates rates={ratesTeacher}/>
            <p className='text-center text-xs italic'>Nota: Estou sendo honesto, eu juro</p>
        </div>
        <div>
            <Title title={"meu depoimento"}/>
            <p className='layout !rounded-4xl text-justify p-2 text-sm sm:text-lg'>Apesar de já estar um tanto avançado nos meus conhecimentos de front-end a matéria de Mobile First me ajudou tanto a consolidar alguns conhecimentos como me mostrar outros itens que podem ser explorados. Espero que na continuação do trimestre possamos ver um pouco do Next.js que venho utilizando já em alguns projetos ou outras tecnologias como o Angular ou Vue. Acredito que a área de front-end seja a que pretendo seguir e me aprofundar. Ao professor eu agradeço o esforço e a didática que ajudou muito a simplificar conceitos complexos. Espero um dia trabalhar junto com o senhor.</p>
        </div>
    </div>
  )
}

export default UserTeacherSection;