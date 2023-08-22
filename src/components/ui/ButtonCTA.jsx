import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ButtonCTA = ({bgColor, textColor, path, text}) => {
  return (
    <Fragment>
        <Link to={path ? `/${path}`: "/"} className="px-6 py-[10px] bg-[#7691B9] rounded-[100px] w-full lg:w-fit text-center font-medium" style={{backgroundColor: `${bgColor}`}}><span className='text-xl font-normal text-white' style={{color: `${textColor}`}}>{text}</span></Link>
    </Fragment>
  )
}

export default ButtonCTA