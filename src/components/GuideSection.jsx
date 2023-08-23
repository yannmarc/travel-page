import React, { Fragment } from 'react'
import Headline from './ui/Headline'
import { serviceContent } from '../constants/data'
import CategoryCard from './ui/CategoryCard'

const GuideSection = () => {
  return (
    <Fragment>
            <section className='lg:relative py-[80px] lg:py-[140px]'>
            <div className="main-container lg:max-w-[1100px] lg:mx-auto px-6 xl:px-0 flex flex-col lg:flex-row lg:flex xl:flex-col xl:items-start lg:items-center gap-x-8">
                <div className="text">
                    <Headline 
                    subHeading={"SERVICES"}
                    heading={"Our top value categories for you "}
                    />
                </div>
                <div className="cards-section lg:w-[1050px] lg:absolute xl:relative lg:right-[-152px] xl:right-0">
                    <div className="flex lg:justify-center flex-col items-center gap-y-8 lg:gap-y-0 lg:flex-row lg:gap-x-6">
                        {
                            serviceContent.map((service) => (
                                <CategoryCard key={service.id} heading={service.heading} icon={service.icon} desc={service.desc}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default GuideSection