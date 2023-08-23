import React, { Fragment } from 'react'
import { iconFacebook, iconTwitter, logo } from '../constants/images'

const Footer = () => {
  return (
    <Fragment>
        <footer>
            <div className="main-container lg:max-w-[1100px] lg:mx-auto px-6 xl:px-0 flex flex-col lg:flex-row lg:flex xl:flex-col xl:items-start lg:items-center gap-x-8 py-16 gap-y-8">
                <div className="flex flex-col lg:flex-row gap-y-[80px] lg:gap-y-0 lg:items-start justify-between w-full">
                    <div className="">
                        <div className=""><img src={logo} alt="travel page logo" /></div>
                        <div className="w-full my-6 lg:w-[300px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia!</div>
                        <div className="flex gap-x-4">
                            <span className='block'><img src={iconFacebook} alt="facebook icon" /></span>
                            <span className='block'><img src={iconTwitter} alt="twitter icon" /></span>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-x-8 justify-center gap-y-8 lg:flex-row lg:gap-x-[80px]">
                        <div className="">
                            <h3 className='font-bold text-xl mb-4'>Company</h3>
                            <ul className="flex flex-col gap-y-4">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Mobile</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className='font-bold text-xl mb-4'>Contact</h3>
                            <ul className="flex flex-col gap-y-4">
                                <li><a href="#">FAQS</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className='font-bold text-xl mb-4'>Meet Us</h3>
                            <ul className="flex flex-col gap-y-4">
                                <li><a href="#">+00 92 1234 56789</a></li>
                                <li><a href="#">info@travel.com</a></li>
                                <li>205.R Street, New York</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}

export default Footer