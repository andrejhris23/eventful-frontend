import { QuestionMarkCircleIcon, SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const subNavigation = [
  {
    name: 'Profile',
    href: '/user/profile',
    icon: UserCircleIcon,
  },
  { name: 'Settings', href: '/user/settings', icon: CogIcon },
  { name: 'Sign Out', href: '#', icon: LogoutIcon },
];

export default function ProfileNavigation() {
  const router = useRouter();
  return (
    <aside className='py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3'>
      <nav className='space-y-1'>
        {subNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              router.pathname === item.href
                ? 'bg-gray-50 text-orange-600 hover:bg-white'
                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
            )}
            aria-current={router.pathname === item.href ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                router.pathname === item.href
                  ? 'text-orange-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
              )}
              aria-hidden='true'
            />
            <span className='truncate'>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
