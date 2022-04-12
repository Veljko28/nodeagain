import { useRouter } from 'next/router';
import React from 'react'
import { TweetDisplayMap } from '../component/General/TweetDisplayMap';
import ProfileHead from '../component/ProfileHead';
import TitleChange from '../component/TitleChange';

const ProfilePage = () => {

  const router = useRouter()
  const id = router.query['id'];
  
  return (
    <>
      <TitleChange title={id as string}/>
      <ProfileHead/>
      <TweetDisplayMap/>
    </>
  )
}

export default ProfilePage