import React from 'react'

export default function Button({color,text,hoverColor,size}) {
  return (
    <div>
      <button className={`${color} text-white p-2 px-4 cursor-pointer ${size}
        ${hoverColor} rounded-md `}>{text}</button>
    </div>
  )
}
