import { fetchUser, fetchUsers } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image'
import {profileTabs} from '@/constants'
import ThreadsTab from '@/components/shared/ThreadsTab';
import React from 'react'
import UserCard from '@/components/cards/UserCard';
import { fetchCommunities } from '@/lib/actions/community.actions';
import CommunityCard from '@/components/cards/CommunityCard';
const page =async ()=>{
    const user=await currentUser();
    if(!user) return null;
    const userInfo=await fetchUser(user.id)
    if(!userInfo?.onboarded) redirect('/onboarding');
    const result=await fetchCommunities ({
        searchString:'',
        pageNumber:1,
        pageSize:25
    })
    return (
     <section>
        <h1 className='head-text mb-10'>Communities</h1>
        {result?.communities.length ===0 ? (
            <p className='no-result'>No users</p>
        ):(
            <>
            {result?.communities.map((community)=>(
                <CommunityCard
                key={community.id}
                id={community.id}
                name={community.name}
                username={community.username}
                imgUrl={community.image}
                bio={community.bio}
                members={community.members}
                />
            ))}
            </>
        )}
     </section>
    )
}
export default page;
