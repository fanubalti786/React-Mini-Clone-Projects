import React from 'react'

export default function HeaderItems({name,Icon}) {

  return (
    <div className='flex gap-1'>
      <Icon className="mt-[5px] text-white "/>
      <li className="hover:underline underline-offset-8 cursor-pointer
      text-white list-none">{name}</li>

    </div>
  )
}
