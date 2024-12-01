import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './search-bar'

const Header = () => {
  return (
    <header className='border-b'>
        <div className='flex flex-col lg:flex-row items-center space-x-4 p-4'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
                <Link href='/' className='font-bold shrink-0'>
                    {/* <Image
                    alt='Logo'
                    src='/'
                    width={100}
                    height={100}
                    className='w-24 lg:2-28'
                    /> */}
                    LOGO
                </Link>
                <div className='lg:hidden block'>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <button className='btn'>SignIn</button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
            <div className='w-full lg:max-w-xl'>
                <SearchBar />
            </div>
            <div className='hidden lg:flex justify-end w-full ml-auto'>
                <SignedIn>
                    <div className='flex items-center space-x-3'>
                        <Link href={'/owner'}>
                            <button>Post Job</button>
                        </Link>
                        <Link href={'/bids'}>
                            <button>My Bids</button>
                        </Link>
                    </div>
                </SignedIn>
                <SignedOut>
                <SignInButton mode='modal'>
                            <button className='btn'>SignIn</button>
                        </SignInButton>
                </SignedOut>
            </div>
            <div className='flex lg:hidden mt-4 w-full justify-center space-x-2 px-4'>
            <div className='flex items-center space-x-3'>
                        <Link 
                        
                        href={'/owner'}>
                            <button className='btn btn-wide bg-slate-400'>Post Job</button>
                        </Link>
                        <Link href={'/bids'}>
                            <button className='btn btn-wide bg-slate-400'>My Bids</button>
                        </Link>
                    </div>     
            </div>
        </div>
    </header>
  )
}

export default Header