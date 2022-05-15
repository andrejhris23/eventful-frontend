import Question from './question';
import { Fragment, useState } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  CheckCircleIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
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

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
];

const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
];
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Attended', href: '#', current: false },
  { name: 'Free Events', href: '#', current: false },
];
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '/event',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },

  {
    id: '81561',
    likes: '178',
    replies: '41',
    views: '2.7k',
    author: {
      name: 'Ivan Gadjovski',
      imageUrl: 'https://i.imgur.com/iyrxPDT.jpg',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '/event',
    title: 'Smoke Mardeljano Film Institution Tebra, Inc.',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
];
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
];

const currentTab = tabs.find((tab) => tab.current);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example(events: any) {
  const [show, setShow] = useState(false);

  function closeNotif() {
    setShow(false);
  }

  function openNotif() {
    setShow(true);
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

      <div
        aria-live='assertive'
        className='fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start'
      >
        <div className='w-full flex flex-col items-center space-y-4 sm:items-end'>
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='p-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <CheckCircleIcon
                      className='h-6 w-6 text-green-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 w-0 flex-1 pt-0.5'>
                    <p className='text-sm font-medium text-gray-900'>
                      Link copied to clipboard!
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>
                      Share the link with the world. Make it VIRAL!
                    </p>
                  </div>
                  <div className='ml-4 flex-shrink-0 flex'>
                    <button
                      type='button'
                      className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className='sr-only'>Close</span>
                      <XIcon className='h-5 w-5' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div className='py-10'>
        <div className='max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
          {/* <div className='hidden lg:block lg:col-span-3 xl:col-span-2'>
            <nav
              aria-label='Sidebar'
              className='sticky top-4 divide-y divide-gray-300'
            >
              <div className='pb-8 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50',
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    <span className='truncate'>{item.name}</span>
                  </a>
                ))}
              </div>
              <div className='pt-10'>
                <p
                  className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
                  id='communities-headline'
                >
                  My communities
                </p>
                <div
                  className='mt-3 space-y-2'
                  aria-labelledby='communities-headline'
                >
                  {communities.map((community) => (
                    <a
                      key={community.name}
                      href={community.href}
                      className='group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50'
                    >
                      <span className='truncate'>{community.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div> */}
          <main className='lg:col-span-12 xl:col-span-8'>
            <div className='px-4 sm:px-0'>
              <div className='sm:hidden'>
                <label htmlFor='question-tabs' className='sr-only'>
                  Select a tab
                </label>
                <select
                  id='question-tabs'
                  className='block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500'
                  defaultValue={currentTab!.name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className='hidden sm:block'>
                <nav
                  className='relative z-0 rounded-lg shadow flex divide-x divide-gray-200'
                  aria-label='Tabs'
                >
                  {tabs.map((tab, tabIdx) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      aria-current={tab.current ? 'page' : undefined}
                      className={classNames(
                        tab.current
                          ? 'text-gray-900'
                          : 'text-gray-500 hover:text-gray-700',
                        tabIdx === 0 ? 'rounded-l-lg' : '',
                        tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                        'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                      )}
                    >
                      <span>{tab.name}</span>
                      <span
                        aria-hidden='true'
                        className={classNames(
                          tab.current ? 'bg-rose-500' : 'bg-transparent',
                          'absolute inset-x-0 bottom-0 h-0.5'
                        )}
                      />
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='sr-only'>Recent questions</h1>
              <ul role='list' className='space-y-4'>
                {Object.values(events).map((event) => (
                  <Question
                    key={event.id}
                    id={event.id}
                    price={event.price}
                    capacity={event.capacity}
                    views={event.views}
                    // author={{
                    //   name: question.author.name,
                    //   imageUrl: question.author.imageUrl,
                    //   href: question.author.href,
                    // }}
                    author={event.host}
                    date={event.date}
                    datetime={event.datetime}
                    href={event.href}
                    title={event.name}
                    body={event.description}
                  />
                ))}
              </ul>
              {console.table(events)}
            </div>
          </main>
          <aside className='hidden xl:block xl:col-span-4'>
            <div className='sticky top-4 space-y-4'>
              <section aria-labelledby='who-to-follow-heading'>
                <div className='bg-white rounded-lg shadow'>
                  <div className='p-6'>
                    <h2
                      id='who-to-follow-heading'
                      className='text-base font-medium text-gray-900'
                    >
                      Who to follow
                    </h2>
                    <div className='mt-6 flow-root'>
                      <ul
                        role='list'
                        className='-my-4 divide-y divide-gray-200'
                      >
                        {whoToFollow.map((user) => (
                          <li
                            key={user.handle}
                            className='flex items-center py-4 space-x-3'
                          >
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src={user.imageUrl}
                                alt=''
                              />
                            </div>
                            <div className='min-w-0 flex-1'>
                              <p className='text-sm font-medium text-gray-900'>
                                <a href={user.href}>{user.name}</a>
                              </p>
                              <p className='text-sm text-gray-500'>
                                <a href={user.href}>{'@' + user.handle}</a>
                              </p>
                            </div>
                            <div className='flex-shrink-0'>
                              <button
                                type='button'
                                className='inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100'
                              >
                                <PlusSmIcon
                                  className='-ml-1 mr-0.5 h-5 w-5 text-rose-400'
                                  aria-hidden='true'
                                />
                                <span>Follow</span>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='mt-6'>
                      <a
                        href='#'
                        className='w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby='trending-heading'>
                <div className='bg-white rounded-lg shadow'>
                  <div className='p-6'>
                    <h2
                      id='trending-heading'
                      className='text-base font-medium text-gray-900'
                    >
                      Trending
                    </h2>
                    <div className='mt-6 flow-root'>
                      <ul
                        role='list'
                        className='-my-4 divide-y divide-gray-200'
                      >
                        {trendingPosts.map((post) => (
                          <li key={post.id} className='flex py-4 space-x-3'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src={post.user.imageUrl}
                                alt={post.user.name}
                              />
                            </div>
                            <div className='min-w-0 flex-1'>
                              <p className='text-sm text-gray-800'>
                                {post.body}
                              </p>
                              <div className='mt-2 flex'>
                                <span className='inline-flex items-center text-sm'>
                                  <button
                                    type='button'
                                    className='inline-flex space-x-2 text-gray-400 hover:text-gray-500'
                                  >
                                    <ChatAltIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                    <span className='font-medium text-gray-900'>
                                      {post.comments}
                                    </span>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='mt-6'>
                      <a
                        href='#'
                        className='w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
