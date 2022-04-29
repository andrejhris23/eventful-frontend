import { useState } from 'react';
import Axios from '../utils/axios';

const defaultFormFields = {
  eventName: '',
  about: '',
  coverUrl: '',
  location: '',
  country: '',
  address: '',
  city: '',
  region: '',
  capacity: '',
  postalCode: '',
  cost: 0,
};

export default function NewEvent() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    eventName,
    about,
    coverUrl,
    location,
    country,
    address,
    city,
    region,
    capacity,
    postalCode,
    cost,
  } = formFields;

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(formFields);

    try {
      const response = await Axios.post('http://localhost:8080/event/create', null, {
        params: {
          
        }
      });

      const event = response.data;
    } catch (error) {
      console.log(error);
    }

    // for (const formField in formFields){
    //   if (typeof formField === 'number'){
    //     formField = {value: ''};
    //   }
    // }
  };

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 pt-6 pb-6 sm:px-6 lg:px-8'>
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className='max-w-5xl mx-auto'>
          {/* Content goes here */}
          <form
            className='space-y-6 divide-y'
            action='/create' //dali 'action' e isto so 'url' vo handleSubmit axios post requestot ?
            method='POST'
            onSubmit={handleSubmit}
          >
            <div className='space-y-6'>
              <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
                <div className='md:grid md:grid-cols-3 md:gap-6'>
                  <div className='md:col-span-1'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Event Info
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      Set up your event and tell the audience what it&apos;s all
                      about.
                    </p>
                  </div>
                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='grid grid-cols-3 gap-6'>
                      <div className='mb-6 col-span-3 sm:col-span-2'>
                        <label
                          htmlFor='company-website'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Name of Event
                        </label>
                        <div className='mt-1 flex rounded-md shadow-sm'>
                          <input
                            required
                            type='text'
                            name='eventName'
                            onChange={handleChange}
                            value={eventName}
                            id='eventName'
                            className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='mb-6'>
                      <label
                        htmlFor='about'
                        className='block text-sm font-medium text-gray-700'
                      >
                        About
                      </label>
                      <div className='mt-1'>
                        <textarea
                          id='about'
                          name='about'
                          rows={3}
                          onChange={handleChange}
                          value={about}
                          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                          defaultValue={''}
                        />
                      </div>
                      <p className='mt-2 text-sm text-gray-500'>
                        Brief description for your event. URLs are hyperlinked.
                      </p>
                    </div>

                    <div className='mb-6'>
                      <label className='block text-sm font-medium text-gray-700'>
                        Cover photo
                      </label>
                      <div className='mt-1 flex justify-center px-2 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                        <div className='space-y-1 text-center w-9/12'>
                          <svg
                            className='mx-auto h-12 w-12 text-gray-400'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'
                          >
                            <path
                              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          <div className='flex text-sm text-gray-600'>
                            <label
                              htmlFor='file-upload'
                              className='relative w-full cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                            >
                              <span>Paste Image URL</span>
                              <input
                                required
                                type='text'
                                name='coverUrl'
                                value={coverUrl}
                                onChange={handleChange}
                                id='cover-url'
                                className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                              />
                            </label>
                          </div>
                          <p className='text-xs text-gray-500'>
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
                <div className='md:grid md:grid-cols-3 md:gap-6'>
                  <div className='md:col-span-1'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Event Address
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      Where&apos;s the event located?
                    </p>
                  </div>
                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='country'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Country
                        </label>
                        <select
                          id='country'
                          name='country'
                          onChange={handleChange}
                          value={country}
                          autoComplete='country-name'
                          className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div className='col-span-6 sm:col-span-4'>
                        <label
                          htmlFor='email-address'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Location Name
                        </label>
                        <input
                          required
                          type='text'
                          name='location'
                          value={location}
                          onChange={handleChange}
                          id='location'
                          placeholder='Metropolis Arena'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6'>
                        <label
                          htmlFor='street-address'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Street address
                        </label>
                        <input
                          required
                          type='text'
                          name='address'
                          value={address}
                          onChange={handleChange}
                          id='address'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                        <label
                          htmlFor='city'
                          className='block text-sm font-medium text-gray-700'
                        >
                          City
                        </label>
                        <input
                          required
                          type='text'
                          name='city'
                          id='city'
                          onChange={handleChange}
                          value={city}
                          autoComplete='address-level2'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <label
                          htmlFor='region'
                          className='block text-sm font-medium text-gray-700'
                        >
                          State / Province
                        </label>
                        <input
                          required
                          type='text'
                          name='region'
                          value={region}
                          onChange={handleChange}
                          id='region'
                          autoComplete='address-level1'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                        <label
                          htmlFor='postal-code'
                          className='block text-sm font-medium text-gray-700'
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          required
                          type='text'
                          name='postalCode'
                          value={postalCode}
                          onChange={handleChange}
                          id='postal-code'
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
                <div className='md:grid md:grid-cols-3 md:gap-6'>
                  <div className='md:col-span-1'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Price & Capacity
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      Choose how you want to be paid, and event capacity
                    </p>
                  </div>
                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                      <label
                        htmlFor='region'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Event Capacity
                      </label>

                      <input
                        required
                        type='text'
                        name='capacity'
                        id='capacity'
                        value={capacity}
                        onChange={handleChange}
                        placeholder='Total seats'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <fieldset>
                      <div className='mt-6'>
                        <legend className='text-base font-medium text-gray-900'>
                          Entry Fee
                        </legend>
                        <p className='text-sm text-gray-500'>
                          We&apos;ve partnered with Stripe for simplified
                          billing.
                        </p>
                      </div>
                      <div className='mt-4 space-y-4'>
                        <div className='flex items-center'>
                          <input
                            required
                            defaultChecked
                            id='radio-free'
                            name='cost'
                            type='radio'
                            value={0}
                            // checked={formFields.cost <= 0 ? true : false}
                            onChange={handleChange}
                            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                          />
                          <label
                            htmlFor='push-everything'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            Free Entrance
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            required
                            id='radio-paid'
                            name='cost'
                            type='radio'
                            min='1'
                            value={79}
                            placeholder='Set Price'
                            onChange={handleChange}
                            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                          />
                          <label
                            htmlFor='push-email'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            Paid Event
                          </label>
                        </div>

                        <div
                          style={{
                            visibility:
                              formFields.cost <= 0 ? 'hidden' : 'visible',
                          }}
                          className='max-w-lg flex ml-6 rounded-md shadow-sm'
                        >
                          <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
                            $
                          </span>
                          <input
                            required
                            type='number'
                            name='cost'
                            id='cost'
                            value={cost}
                            onChange={handleChange}
                            className='block w-3/12 focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300'
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className='flex justify-end'>
                <button
                  type='button'
                  className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
function formFields(formFields: any) {
  throw new Error('ne rabote');
}
function setFormFields(arg0: {}) {
  throw new Error('ne rabote setero');
}
