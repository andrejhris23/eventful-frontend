import type { NextPage } from 'next';
import { Fragment } from 'react';

import Setting from '../../components/setting';
import ProfileNavigation from '../../components/profileNavigation';
import Profile from '../../components/profile';

const profile: NextPage = () => {
  return (
    <Fragment>
      
      <Profile />
    </Fragment>
  );
};

export default profile;
