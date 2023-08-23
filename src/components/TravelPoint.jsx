import React, { Fragment } from 'react'
import Headline from './ui/Headline'
import { travelStats } from '../constants/data'
import { travelingGirl } from '../constants/images'

const TravelPoint = () => {
  return (
   <Fragment>
    <section className='relative'>
        <div className="lg:max-w-[1100px] lg:mx-auto px-6 xl:px-0 flex justify-between lg:flex-row flex-col gap-y-[50px]">
            <div className="img">
                <span className="absolute left-0 top-0 w-full h-[500px] lg:w-[659px] 2xl:w-[1200px] lg:h-[567px] bg-[#7691B9] rounded-tr-[500px] rounded-br-[500px]"></span>
                <img className="relative z-10 mt-[72px]" src={travelingGirl} alt="girl siting down with a yellow bag by her left" />
            </div>
            <div className="text">
                <Headline 
                subHeading={"Travel Point"}
                heading={"We helping you find your dream location"}
                descText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
                <div className="my-10 grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-[40px] lg:gap-x-[124px]">
                    {travelStats.map((stat) => (
                        <div className="p-6 my-6" key={stat.id}>
                            <h3 className="text-orange-500 font-bold text-xl">{stat.stat}</h3>
                            <p>{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
   </Fragment>
  )
}

export default TravelPoint