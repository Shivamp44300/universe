import React from 'react'

export default function Button({colorClass,padding,children}) {
  return (
    <button className={`px-6 py-3 outline-none cursor-pointer text-lg font-semibold
      rounded-lg transition-all duration-300 ${padding} ${colorClass}`}>
      {children}
    </button>
  )
}
