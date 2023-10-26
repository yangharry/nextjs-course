import { useSession, getSession } from 'next-auth/react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useEffect, useState } from 'react';

function UserProfile() {
  // Redirect away if NOT auth

  //------------------------서버사이드 렌더링에서 처리-----------------------------

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false); // useSession 을 사용 할 경우 이 부분이 사라짐
  //     }
  //   });
  // }, []);

  // useState 을 이용해서 profile 페이지 로딩 화면 만들기
  // const [isLoading, setIsLoading] = useState(true);
  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  //------------------------------------------------------------------------

  // useSession 을 이용해서 profile 페이지 로딩 화면 만들기
  // const { data, status } = useSession();
  // if (status !== 'authenticated') {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
