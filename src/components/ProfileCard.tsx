import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex justify-between layout items-center gap-2'>
        <div className='flex-1'>
            <img src="photo.jpg" alt="" className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 object-cover rounded-full"/>
        </div>
        <div className='flex-2'>
            <p className='font-bold italic'>Pedro</p>
            <p className='text-xs sm:text-xl'>Meu trabalho é transformar conceitos em interfaces funcionais e impactantes</p>
        </div>
    </div>
  )
}

export default ProfileCard