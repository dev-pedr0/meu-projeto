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
                <img src="https://placehold.co/400x400" alt="" className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full"/>
            </div>
            <div className='flex-2'>
                <p className='font-bold italic'>Pedro</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error</p>
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
            <p className='layout !rounded-4xl text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt ut quibusdam distinctio, nisi non ullam delectus, provident et iste dignissimos repellat libero tenetur quidem pariatur atque totam id quia?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quaerat quis nam earum, quod ipsum consequuntur fuga! Officiis soluta nisi ipsam expedita provident? Cupiditate deleniti mollitia vel quis similiq. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita error officiis cumque at hic ipsum tenetur ducimus eveniet. Ipsum illum tempore, quaerat adipisci quae suscipit possimus vel nihil quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem sequi corrupti saepe repudiandae veniam quasi incidunt harum? Ullam consequatur quisquam veniam neque quos eos dolores illum doloremque tempore iure.</p>
        </div>
    </div>
  )
}

export default UserTeacherSection;