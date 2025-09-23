import React from 'react'
import Title from './Title'

const Testimonial = () => {
  return (
    <div>
        <Title title={"meu depoimento"}/>
        <p className='layout !rounded-4xl text-justify p-2 text-sm sm:text-lg'>Apesar de já estar um tanto avançado nos meus conhecimentos de front-end a matéria de Mobile First me ajudou tanto a consolidar alguns conhecimentos como me mostrar outros itens que podem ser explorados. Espero que na continuação do trimestre possamos ver um pouco do Next.js que venho utilizando já em alguns projetos ou outras tecnologias como o Angular ou Vue. Acredito que a área de front-end seja a que pretendo seguir e me aprofundar. Ao professor eu agradeço o esforço e a didática que ajudou muito a simplificar conceitos complexos. Espero um dia trabalhar junto com o senhor.</p>
    </div>
  )
}

export default Testimonial