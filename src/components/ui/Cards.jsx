import React, { Fragment } from 'react'
import { cardUI1, iconStart } from '../../constants/images'

const Cards = ({placeHolder, location, price, rating, country}) => {
  return (
    <Fragment>
        <div className="max-w-[294px] shadow-2xl rounded-[24px]">
            <div className="">
                <img src={placeHolder} alt="man sailing on the paradise beach" />
            </div>
            <div className="p-8 flex flex-col gap-y-8">
                <div className="flex justify-between">
                    <h5 className="font-bold text-[15px]">{location}</h5>
                    <span className="block text-xl text-[#5C8D96]">{price}</span>
                </div>
                <span className="block">{country}</span>
                <span className="flex items-center gap-1">
                    <span className="block font-bold text-[#EBA24C]">{rating}</span>
                    <span className="block"><img src={iconStart} alt="a start icon to demonstrate teh number of reviews" /></span>
                </span>
            </div>
        </div>
    </Fragment>
  )
}

export default Cards