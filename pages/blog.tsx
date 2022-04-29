import type { NextPage } from 'next';
import { Fragment } from 'react';

import Blog from '../components/blog';
import Comment from '../components/comment';

const blog: NextPage = () => {
  return (
    <Fragment>
      <Blog />
      <div className='max-w-3xl mx-auto'>
        <Comment />
      </div>
    </Fragment>
  );
};

export default blog;
