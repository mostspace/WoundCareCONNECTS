import React from 'react'

const Button = ({ type, styles, title, path }) => {
  return (
    <a type={(type) ? type : 'button'} className={`py-[15px] px-[30px] bg-blue-gradient cursor-pointer font-manrope font-medium text-[18px] text-center text-white outline-none ${styles} rounded-[10px]`} href={path}>
      { title }
    </a>
  )
}

export default Button
