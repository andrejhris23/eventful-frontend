import type { NextPage } from 'next';
import { useEffect } from 'react';
import Example from '../components/example';
import Inside from '../components/inside';
import Axios from '../utils/axios';

const Home: NextPage = () => {
  useEffect(() => {
      Axios.post('http://localhost:8080/user/create', {
        user: {
          email: 'andr@gmail.com',
          displayName: 'and gr',
          firstName: 'an',
          lastName: 'gr',
          image: 'https://twitter.com'
        }
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }, []);

  return <Example />;
  // return <Inside />
};

export default Home;
