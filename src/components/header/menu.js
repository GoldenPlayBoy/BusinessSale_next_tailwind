'use client';

import Link from 'next/link';
import {Routes} from '@config/routes';
// import ProfileMenu from '@/components/header/profile-menu';
import { Fragment } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/24/solid';
const menuItems = [
  {
    id: 1,
    label: 'Home',
    path: Routes.public.home,
  },
  {
    id: 2,
    label: 'Businesses',
    path: '',
    dropdownItems: [
      {
        id: 1,
        label: 'Buy a Business',
        path: '',
      },
      {
        id: 2,
        label: 'MergerVault: High Value Businesses',
        path: '',
      },
      {
        id: 3,
        label: 'Register as a Buyer',
        path: '',
      },
    ],
  },
  {
    id: 3,
    label: 'Franchises',
    path: '',
    dropdownItems: [
      {
        id: 1,
        label: 'Buy a Franchises',
        path: Routes.public.explore,
      },
      {
        id: 2,
        label: 'Buy a Franchises Resale',
        path: '',
      },
      {
        id: 3,
        label: 'Advertise a Franchises',
        path: '',
      },
    ],
  },
  {
    id: 4,
    label: 'Selling',
    path: '',
    dropdownItems: [
      {
        id: 1,
        label: 'Sell your Business',
        path: Routes.public.pricing,
      },
      {
        id: 2,
        label: 'Find a Broker',
        path: '',
      },
      {
        id: 3,
        label: 'Sign Up as a Broker',
        path: '',
      },
      {
        id: 4,
        label: 'Advertise a Franchise',
        path: '',
      },
    ],
  },
  {
    id: 4,
    label: 'Help',
    path: Routes.public.help,
  },
  {
    id: 5,
    label: 'Other Pages',
    path: '',
    dropdownItems: [
      {
        id: 1,
        label: 'Vendor Profile',
        path: Routes.public.userID('fabio-jaction'),
      },
      {
        id: 2,
        label: 'Listing Details',
        path: '/listing/perfect-set-up-for-lake-union-cruising',
      },
      {
        id: 3,
        label: 'Coming Soon',
        path: Routes.public.trips,
      },
      {
        id: 4,
        label: 'Sign In',
        path: Routes.auth.signIn,
      },
      {
        id: 5,
        label: 'Sign Up',
        path: Routes.auth.signUp,
      },
      {
        id: 6,
        label: 'Forgot Password',
        path: Routes.auth.forgotPassword,
      },
    ],
  },
  {
    id: 6,
    label: 'Businesses',
    path: Routes.public.explore,
    dropdownItems: [
      {
        id: 1,
        label: 'Buy a Business',
        path: Routes.public.userID('fabio-jaction'),
      },
      {
        id: 2,
        label: 'MergerVault: High Value Businesses',
        path: '/listing/perfect-set-up-for-lake-union-cruising',
      },
      {
        id: 3,
        label: 'Register as a Buyer',
        path: Routes.public.trips,
      },
    ],
  },
];

export default function Menu() {
  return (
    <nav className="primary-nav hidden items-center justify-between md:flex md:gap-4">
      <ul className="hidden flex-wrap md:flex">
        {menuItems.map((item) => (
          <Fragment key={item.id}>
            {item.dropdownItems ? (
              <li key={item.id} className="group/parent relative">
                <a
                  href="#"
                  className="px-5 flex items-center text-white transition"
                >
                  {item.label}
                  <span className="z-[1] transition-transform duration-200 ms-1">
                    {/* <ChevronDownIcon className="w-4 h-4" /> */}
                  </span>
                </a>
                <ul className="invisible absolute top-[130%] mt-2 py-2 w-64 rounded-md bg-white opacity-0 transition-all group-hover/parent:visible group-hover/parent:top-full group-hover/parent:opacity-100 end-5 shadow-card focus:outline-none">
                  {item.dropdownItems.map((dropdownItem) => {
                    return (
                      <li key={dropdownItem.id}>
                        <Link
                          href={dropdownItem.path}
                          className="block rounded-sm px-5 py-2 font-normal text-gray-dark hover:bg-gray-lightest"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={item.id}>
                <Link href={item.path} className="px-5 text-white">
                  {item.label}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      {/* <ProfileMenu className="hidden md:block" /> */}
    </nav>
  );
}
