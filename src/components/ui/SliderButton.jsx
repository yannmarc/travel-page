import React, { Fragment } from 'react'

const SliderButton = ({children, bgColor}) => {
  return (
    <Fragment>
        <button className="p-6 shadow-lg rounded-full" style={{backgroundColor: `${bgColor}`}}>
            {children}
        </button>
    </Fragment>
  )
}

export default SliderButton