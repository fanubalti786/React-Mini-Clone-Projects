import React from 'react'

export default function HeaderItems({name, Icon}) {
  return (
    <div className=' flex items-center gap-3 text-[18px] font-semibold cursor-pointer '>
      <Icon className="w-6 h-6" />
      <h2>{name}</h2>
    </div>
  )
}
