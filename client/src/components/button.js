import React from 'react'

const Button = ({ type, styles, title, path }) => {
  return (
    <a type={(type) ? type : 'button'} className={`py-4 px-4 bg-blue-gradient cursor-pointer font-manrope font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`} href={path}>
      { title }
    </a>
  )
}

export default Button
