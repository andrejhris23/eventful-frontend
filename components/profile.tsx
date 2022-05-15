import { userInfo } from 'os';
import ProfileNavigation from './profileNavigation';

const people = [
  {
    name: 'BMW Berlin Marathon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    eventUrl: '/event/1',
  },

  {
    name: 'Harvel Pong',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    eventUrl: '/event/2',
  },

  {
    name: 'HackUPC Hackathon 2022',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    eventUrl: '/event/2',
  },

  // More people...
];

export default function profile(user: any) {
  return (
    <div className='h-full'>
      <main className='max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-5'>
          <ProfileNavigation />
          <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
            <div className='bg-white'>
              <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
                <div className='space-y-12'>
                  <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
                    <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                      My Events
                    </h2>
                    <p className='text-xl text-gray-500'>
                      All the events you have hosted and created so far!{' '}
                    </p>
                  </div>
                  <ul
                    role='list'
                    className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
                  >
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className='space-y-4'>
                          <div className='aspect-w-3 aspect-h-2'>
                            <img
                              className='object-cover shadow-lg rounded-lg'
                              src={person.imageUrl}
                              alt=''
                            />
                          </div>

                          <div className='space-y-2'>
                            <div className='text-lg leading-6 font-medium space-y-1 text-center'>
                              <h3>{person.name}</h3>
                              <p className='text-indigo-600'>{person.role}</p>
                            </div>
                          </div>
                          <div className='mt-6'>
                            <a
                              href={person.eventUrl}
                              className='w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                            >
                              View Event
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
