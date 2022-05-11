import type {
    NextPage,
    GetServerSideProps,
    InferGetServerSidePropsType,
  } from 'next';
import Example from '../components/example';
import Axios from '../utils/axios';

const Home: NextPage = ({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  console.log(events);
  return <Example {...events} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await Axios.get('http://localhost:8080/event/findAll');
  const events = res.data;

  return { props: { events } };
};

export default Home;