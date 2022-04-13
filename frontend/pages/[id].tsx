import { useRouter } from 'next/router';
import React from 'react'
import { TweetDisplayMap } from '../component/General/TweetDisplayMap';
import ProfileHead from '../component/ProfileHead';
import TitleChange from '../component/TitleChange';

const ProfilePage = () => {

  const router = useRouter()
  const id = router.query['id'];

  const user =  {
    username: id as string,
    at : id as string,
    image: ""
  }
  
  return (
    <>
      <TitleChange title={id as string}/>
      <ProfileHead user={user} />
      <TweetDisplayMap/>
    </>
  )
}

export default ProfilePage