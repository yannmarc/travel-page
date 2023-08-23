import React, { Fragment } from 'react'

const SliderButton = ({children, bgColor}) => {
  return (
    <Fragment>
        <button className="shadow-lg rounded-full h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] flex justify-center items-center" style={{backgroundColor: `${bgColor}`}}>
            {children}
        </button>
    </Fragment>
  )
}

export default SliderButton