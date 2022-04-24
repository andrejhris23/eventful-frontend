/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          orange: colors.orange,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import ProfileNavigation from './profileNavigation';
import {
  Disclosure,
  Menu,
  RadioGroup,
  Switch,
  Transition,
} from '@headlessui/react';
import { QuestionMarkCircleIcon, SearchIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  LogoutIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline';

const user = {
  name: 'Lisa Marie',
  email: 'lisamarie@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
];

const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: true },
  { name: 'Sign Out', href: '#', icon: LogoutIcon, current: false },
];
const plans = [
  {
    name: 'Startup',
    priceMonthly: 29,
    priceYearly: 290,
    limit: 'Up to 5 active job postings',
  },
  {
    name: 'Business',
    priceMonthly: 99,
    priceYearly: 990,
    limit: 'Up to 25 active job postings',
  },
  {
    name: 'Enterprise',
    priceMonthly: 249,
    priceYearly: 2490,
    limit: 'Unlimited active job postings',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Setting() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);

  const handleChange = (item: any) => {};

  // const subNavigation = [
  //   { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
  //   { name: 'Settings', href: '#', icon: CogIcon, current: true },
  //   { name: 'Sign Out', href: '#', icon: LogoutIcon, current: false },
  // ];

  return (
    <>
      <div className='h-full'>
        <main className='max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-5'>
            <ProfileNavigation />

            {/* Payment details */}
            <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
              <section aria-labelledby='payment-details-heading'>
                <form action='#' method='POST'>
                  <div className='shadow sm:rounded-md sm:overflow-hidden'>
                    <div className='bg-white py-6 px-4 sm:p-6'>
                      <div>
                        <h2
                          id='payment-details-heading'
                          className='text-lg leading-6 font-medium text-gray-900'
                        >
                          Account Information
                        </h2>
                        <p className='mt-1 text-sm text-gray-500'>
                          Edit your account settings.
                        </p>
                      </div>

                      <div className='mt-6 grid grid-cols-4 gap-6'>
                        <div className='col-span-4 sm:col-span-2'>
                          <label
                            htmlFor='first-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            First name
                          </label>
                          <input
                            type='text'
                            name='first-name'
                            id='first-name'
                            autoComplete='cc-given-name'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-4 sm:col-span-2'>
                          <label
                            htmlFor='last-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Last name
                          </label>
                          <input
                            type='text'
                            name='last-name'
                            id='last-name'
                            autoComplete='cc-family-name'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-4 sm:col-span-2'>
                          <label
                            htmlFor='email-address'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Email address
                          </label>
                          <input
                            type='text'
                            name='email-address'
                            id='email-address'
                            autoComplete='email'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-4 sm:col-span-1'>
                          <label
                            htmlFor='expiration-date'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Expration date
                          </label>
                          <input
                            type='text'
                            name='expiration-date'
                            id='expiration-date'
                            autoComplete='cc-exp'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                            placeholder='MM / YY'
                          />
                        </div>

                        <div className='col-span-4 sm:col-span-1'>
                          <label
                            htmlFor='security-code'
                            className='flex items-center text-sm font-medium text-gray-700'
                          >
                            <span>Security code</span>
                            <QuestionMarkCircleIcon
                              className='ml-1 flex-shrink-0 h-5 w-5 text-gray-300'
                              aria-hidden='true'
                            />
                          </label>
                          <input
                            type='text'
                            name='security-code'
                            id='security-code'
                            autoComplete='cc-csc'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-4 sm:col-span-2'>
                          <label
                            htmlFor='country'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Country
                          </label>
                          <select
                            id='country'
                            name='country'
                            autoComplete='country-name'
                            className='mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div className='col-span-4 sm:col-span-2'>
                          <label
                            htmlFor='postal-code'
                            className='block text-sm font-medium text-gray-700'
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            type='text'
                            name='postal-code'
                            id='postal-code'
                            autoComplete='postal-code'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                      <button
                        type='submit'
                        className='bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
