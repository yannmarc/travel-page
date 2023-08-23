import React, { Fragment } from 'react'
import Headline from './ui/Headline'
import { FeatureHero, coupons, offfer, schedule } from '../constants/images'

const KeyFeatures = () => {
  return (
    <Fragment>
        <section className='py-[100px]'>
            <div className="lg:max-w-[1100px] lg:mx-auto px-6 xl:px-0 ">
                <Headline 
                subHeading={"Key Features"}
                heading={"We offer best services"}
                descText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
                <div className="flex justify-between items-start flex-col gap-y-8 lg:flex-row lg:items-center py-[50px]">
                    <div className="space-y-[94px]">
                        <div className="flex gap-x-10">
                            <img src={offfer} alt="offer icon" className=' inline-block' />
                            <div className="">
                                <h6 className='font-bold text-xl text-[#FF8A00]'>We offer best services</h6>
                                <span className="inline-block">Lorem ipsum is not simply random text</span>
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <img src={schedule} alt="offer icon" className=' inline-block' />
                            <div className="">
                                <h6 className='font-bold text-xl text-[#BB7DC5]'>Schedule your trip</h6>
                                <span className="inline-block">Lorem ipsum is not simply random text</span>
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <img src={coupons} alt="offer icon" className=' inline-block' />
                            <div className="">
                                <h6 className='font-bold text-xl text-[#7691B9]'>Get discounted coupons</h6>
                                <span className="inline-block">Lorem ipsum is not simply random text</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={FeatureHero} alt="cool images of users surfing and beautiful landscapes" />
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default KeyFeatures