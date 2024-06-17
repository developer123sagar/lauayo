import DefaultLayout from '@/Dashboard/layout/DefaultLayout'
import { EditInput } from '@/components/ui/EditInput'
import { useAppSelector } from '@/redux/store';
import React, { useState } from 'react'

export const ViewUser = () => {
    const selectedItem=useAppSelector(state=>state.auth.selectedItem);
    const [form]=useState(selectedItem || {});

  return (
    <DefaultLayout>
    <div className="mt-6">
      <form className="w-full max-w-4xl shadow px-10 py-4 mx-auto" >
        <div className='flex justify-center items-center mt-6'>
      <h1 className='text-black font-bold border-b border-blue-600 mb-10'>View User Detail</h1>
      </div>
        <div className="flex flex-wrap gap-6 mt">
          <EditInput
            label="Name"
            value={form.name}
            className='w-full lg:w-1/3'
          />
          <EditInput
            label="Email"
            value={form.email}
            className='w-full lg:w-1/3'
            basis={20}
          />
          <EditInput
            label="Mobile Num"
            value={form.mobile}
            className='w-full lg:w-1/3'
            basis={20}
          />    
           <EditInput
            label="Isgooglelinked "
            value={form.isgooglelinked}
            className='w-full lg:w-1/3'
            basis={20}
          />  
          <EditInput
            label="Isapplelinked "
            value={form.isapplelinked}
            className='w-full lg:w-1/3'
            basis={20}
          />   
          <EditInput
            label="Username"
            value={form.username}
            className='w-full lg:w-1/3'
            basis={20}
          />   
          <EditInput
            label="Active "
            value={form.active}
            className='w-full lg:w-1/3'
            basis={20}
          />   
          <EditInput
            label="Suspended "
            value={form.suspended}
            className='w-full lg:w-1/3'
            basis={20}
          />   
          <EditInput
            label="IsDeactivate "
            value={form.isDeactivate}
            className='w-full lg:w-1/3'
            basis={20}
          />   
          <EditInput
            label="Level"
            value={form.level}
            className='w-full lg:w-1/3'
            basis={20}
          />   
            <EditInput
            label="honey_drops"
            value={form.honey_drops}
            className='w-full lg:w-1/3'
            basis={20}
          />   
            <EditInput
            label="honey_bits"
            value={form.honey_bits}
            className='w-full lg:w-1/3'
            basis={20}
          />   
            <EditInput
            label="user_ranks"
            value={form.user_ranks}
            className='w-full lg:w-1/3'
            basis={20}
          />   
            <EditInput
            label="streak "
            value={form.streak}
            className='w-full lg:w-1/3'
            basis={20}
          />   
            <EditInput
            label="gifts_sent"
            value={form.gifts_sent}
            className='w-full lg:w-1/3'
            basis={20}
          />    
            <EditInput
            label="gifts_received"
            value={form.gifts_received}
            className='w-full lg:w-1/3'
            basis={20}
          /> 
            <EditInput
            label="followers"
            value={form.followers}
            className='w-full lg:w-1/3'
            basis={20}
          /> 
            <EditInput
            label="following"
            value={form.following}
            className='w-full lg:w-1/3'
            basis={20}
          /> 
            <EditInput
            label="Buzzs"
            value={form.buzzs}
            className='w-full lg:w-1/3'
            basis={20}
          /> 
            <EditInput
            label="officialMark"
            value={form.officialMark}
            className='w-full lg:w-1/3'
            basis={20}
          />  
            <EditInput
            label="is_premium_member"
            value={form.is_premium_member}
            className='w-full lg:w-1/3'
            basis={20}
          />  
            <EditInput
            label="is_vip_member"
            value={form.is_vip_member}
            className='w-full lg:w-1/3'
            basis={20}
          />  
            <EditInput
            label="is_staff"
            value={form.is_staff}
            className='w-full lg:w-1/3'
            basis={20}
          />  
            <EditInput
            label="is_admin"
            value={form.is_admin}
            className='w-full lg:w-1/3'
            basis={20}
          />  
          <EditInput
            label="freinds"
            value={form.freinds}
            className='w-full lg:w-1/3'
            basis={20}
          />  
          <EditInput
            label="foreign_user"
            value={form.foreign_user}
            className='w-full lg:w-1/3'
            basis={20}
          />  
          <EditInput
            label="blocked_users"
            value={form.blocked_users}
            className='w-full lg:w-1/3'
            basis={20}
          />  
          <div className=''>
            <label>Profile Picture</label>
            <img src={form.profile_picture} alt="profile_pic" className="w-60 h-60 object-cover"  />
          </div>
        </div>

      </form>
    </div>
    </DefaultLayout>
  )
}
