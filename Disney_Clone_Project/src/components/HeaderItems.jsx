import React from 'react'

export default function HeaderItems({name, Icon}) {
  return (
    <div className='text-white flex gap-1 hover:underline underline-offset-8
    text-[17px] font-semibold cursor-pointer items-center mb-2'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}
