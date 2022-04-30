import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { useEffect } from 'react';
import Example from '../components/example';
import Inside from '../components/inside';
import Axios from '../utils/axios';
import Event from './event';

const Home: NextPage = ({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // useEffect(() => {
  //     Axios.post('http://localhost:8080/user/create', {
  //       user: {
  //         email: 'andr@gmail.com',
  //         displayName: 'and gr',
  //         firstName: 'an',
  //         lastName: 'gr',
  //         image: 'https://twitter.com'
  //       }
  //     })
  //       .then(res => console.log(res.data))
  //       .catch(err => console.log(err))
  // }, []);

  console.log(events);
  return <Example {...events} />;
  // return <Inside />
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await Axios.get('http://localhost:8080/event/findAll');
  const events = res.data;

  return { props: { events } };
};

export default Home;
