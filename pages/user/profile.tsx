import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { Fragment } from 'react';
import Axios from '../../utils/axios';
import Setting from '../../components/setting';
import ProfileNavigation from '../../components/profileNavigation';
import Profile from '../../components/profile';

const profile: NextPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(user);

  return (
    <Fragment>
      <Profile {...user} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await Axios.get('http://localhost:8080/user/findById/2');
  const user = res.data;

  return { props: { user } };
};

export default profile;
