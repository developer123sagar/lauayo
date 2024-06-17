import React from 'react'
import Footer from '../Footer'
import Forms from './Contactform'
import Navbar from '../Navbar'

export const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="r-2xl:pt-0 ">
    <div className="relative flex items-center justify-center   mt-10 sm:mt-6">
      <img
    src="/ContactUs.png"
        alt="contact"
        className="w-full md:h-[28rem] h-[12rem] object-cover  "
      />
    </div>
    <Forms />
    <Footer />
    </div>
    </>
  )
}
