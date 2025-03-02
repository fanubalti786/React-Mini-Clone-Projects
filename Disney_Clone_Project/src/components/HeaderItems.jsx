import React from 'react'

export default function HeaderItems({name, Icon}) {
  return (
    <div className=' flex items-center gap-2 text-[14px] font-semibold cursor-pointer hover:underline underline-offset-8  '>
      <Icon className="w-4 h-4" />
      <h2 className=''>{name}</h2>
    </div>
  )
}
