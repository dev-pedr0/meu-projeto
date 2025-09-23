import React from 'react'

type Props = {
    title: String;
}

const Title = ({title}: Props) => {
  return (
    <div className='mt-3 mb-3 text-center font-semibold'>{title.toUpperCase()}</div>
  )
}

export default Title;