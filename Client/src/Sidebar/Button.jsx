import React from 'react'

function Button({onClickHandler,value,title}) {
  return (
    <button onClick={onClickHandler} value={value} className={`px-2 py-1  border text-base  hover:bg-blue-800 hover:text-white`}>
        {title}
    </button>
  )
}

export default Button