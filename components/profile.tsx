import ProfileNavigation from './profileNavigation';

export default function profile() {
  return (
    <div className='h-full'>
      <main className='max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-5'>
          <ProfileNavigation />
          <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
            <h1> Hi bitch</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
