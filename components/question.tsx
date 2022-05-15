import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import Link from 'next';
import {
  ChatAltIcon,
  UsersIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
  CashIcon,
} from '@heroicons/react/solid';
import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Question(question: {
  id: any;
  price: any;
  capacity: any;
  views: any;
  author: any;
  date: any;
  datetime: any;
  href: any;
  title: any;
  body: any;
}) {
  /* const {
    id,
    likes,
    replies,
    views,
    author,
    date,
    datetime,
    href,
    title,
    body,
  } = question; */

  return (
    <li
      key={question.id}
      className='bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg'
    >
      <article aria-labelledby={'question-title-' + question.id}>
        <div>
          <div className='flex space-x-3'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src={question.author.image}
                alt=''
              />
            </div>
            <div className='min-w-0 flex-1'>
              <p className='text-sm font-medium text-gray-900'>
                <a href={question.author.href} className='hover:underline'>
                  {question.author.displayName}
                </a>
              </p>
              <p className='text-sm text-gray-500'>
                <a href={question.href} className='hover:underline'>
                  <time dateTime={question.datetime}>
                    {question.date} Jun 30, 2020
                  </time>
                </a>
              </p>
            </div>
            <div className='flex-shrink-0 self-center flex'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600'>
                    <span className='sr-only'>Open options</span>
                    <DotsVerticalIcon className='h-5 w-5' aria-hidden='true' />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm'
                            )}
                          >
                            <StarIcon
                              className='mr-3 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span>Add to favorites</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm'
                            )}
                          >
                            <CodeIcon
                              className='mr-3 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span>Embed</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm'
                            )}
                          >
                            <FlagIcon
                              className='mr-3 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span>Report content</span>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <h2
            id={'question-title-' + question.id}
            className='mt-4 text-base font-medium text-gray-900'
          >
            {question.title}
          </h2>
        </div>
        <div
          className='mt-2 text-sm text-gray-700 space-y-4'
          dangerouslySetInnerHTML={{ __html: question.body }}
        />
        <div className='mt-6 flex justify-between space-x-8'>
          <div className='flex space-x-6'>
            <span className='inline-flex items-center text-sm'>
              <button
                type='button'
                className='inline-flex space-x-2 text-gray-400 hover:text-gray-500'
              >
                <CashIcon className='h-5 w-5' aria-hidden='true' />
                <span className='font-medium text-gray-900'>
                  ${question.price}
                </span>

                <span className='sr-only'>price</span>
              </button>
            </span>
            <span className='inline-flex items-center text-sm'>
              <button
                type='button'
                className='inline-flex space-x-2 text-gray-400 hover:text-gray-500'
              >
                <UsersIcon className='h-5 w-5' aria-hidden='true' />
                <span className='font-medium text-gray-900'>
                  {question.capacity}
                </span>
                <span className='sr-only'>replies</span>
              </button>
            </span>
            <span className='inline-flex items-center text-sm'>
              <button
                type='button'
                className='inline-flex space-x-2 text-gray-400 hover:text-gray-500'
              >
                <ShareIcon className='h-5 w-5' aria-hidden='true' />
                <span className='font-medium text-gray-900'>Share</span>
              </button>
            </span>
          </div>
          <div className='flex text-sm'>
            <span className='inline-flex items-center text-sm'>
              <a href={`/event/${question.id}`}>
                <button
                  type='button'
                  className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Read More
                </button>
              </a>
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}
