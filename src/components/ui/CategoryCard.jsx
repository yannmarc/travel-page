import React, { Fragment } from 'react'

const CategoryCard = ({icon, heading, desc}) => {
  return (
    <Fragment>
        <div className="p-8 lg:p-16 bg-white hover:shadow-xl transition-all ease-in-out rounded-xl lg:rounded-3xl md:max-w-[350px]">
            <div className="flex justify-center"><img src={icon} alt="" /></div>
            <div className="mt-[25px] lg:mt-[50px] text-center">
                <h5 className="capitalize text-2xl font-normal">{heading}</h5>
                <p className="mt-8">{desc}</p>
            </div>
        </div>
    </Fragment>
  )
}

export default CategoryCard