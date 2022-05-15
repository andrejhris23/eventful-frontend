import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';

import Axios from '../../utils/axios';

import { useRouter } from 'next/router';

import Inside from '../../components/inside';

const Event: NextPage = ({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { eventId } = router.query;

  console.log(events);

  return <Inside {...events} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { eventId } = context.query;

  const res = await Axios.get(
    `http://localhost:8080/event/findById/${eventId}`
  );
  const events = res.data;

  return { props: { events } };
};

export default Event;
