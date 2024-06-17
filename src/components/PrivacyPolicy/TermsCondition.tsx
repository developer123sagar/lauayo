import {  GET_TERMS } from '@/constants/API';
import { useGetApiQuery } from '@/redux/api/AuthApi';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
export const TermsCondition = () => {
  const {data,isError,isLoading}=useGetApiQuery({api:GET_TERMS});

  if(isLoading){
    return <div>Loading......</div>
  }
  if(isError){
    return <div>{isError}</div>;
  }
  return (
    <>
    <Navbar/>
    <div className='mb-[2rem] md:mb-[7rem]'> 
         <div className="relative flex items-center justify-center mt-16">
          <img
            src="https://t4.ftcdn.net/jpg/05/16/31/55/360_F_516315574_QVHjedFRyaKTvRwwVlwKalSVmXAvh4ED.jpg"
            alt="terms"
            className="w-full md:h-[25rem] h-[12rem] object-cover"
          />
          <div className="absolute pt-20">
            <span className="flex w-[120px] h-[2px]  bg-[#e1e1e1]  mx-auto mb-4">
              <em className="w-[60px] h-[2px] bg-[#e54350] mx-auto" />
            </span>
            <h1 className="w-fit mx-auto font-bold md:text-3xl text-2xl text-black mb-2">
              TermsCondition
            </h1>
          </div>
        </div>
        <div className='md:mx-[6rem] '>
          <div className="mt-10 mx-4 lg:mx-10">
            <h1 className="font-bold text-[20px]">{data && data.title}</h1>
          <h1 className="md:text-[18px] text-[16px] text-gray-800  text-justify" dangerouslySetInnerHTML={{ __html: data && data.body }}></h1>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
