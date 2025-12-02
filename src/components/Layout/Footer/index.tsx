import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>

          {/* LEFT SECTION */}
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0'>
            <div className='sm:text-start text-center sm:w-auto w-full'>
              <Link href='/' className='md:block flex justify-center'>
                <Image
                  src={getImgPath('/images/logo/logo-white.svg')}
                  alt='logo'
                  width={160}
                  height={50}
                  quality={100}
                  unoptimized
                />
              </Link>

              <h2 className='text-white py-10 text-[40px] leading-tight font-bold'>
                Ready to build your Flutter app?
              </h2>

              <Link
                href='/contact'
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700'>
                Hire Me
              </Link>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Contact Info
              </span>

              <div className='pb-5 sm:block text-center'>
                <p className='text-base font-bold text-white'>Phone</p>
                <Link
                  href='tel:+919359219134'
                  className='text-xl text-white/50 hover:text-white'>
                  +91 9359219134
                </Link>
              </div>

              <div className='sm:block text-center'>
                <p className='text-base font-bold text-white'>Email</p>
                <Link
                  href='mailto:chavanshubham936@gmail.com'
                  className='text-xl text-white/50 hover:text-white'>
                  chavanshubham936@gmail.com
                </Link>
              </div>

              {/* SOCIAL ICONS */}
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem]'>
                  <li className='group'>
                    <Link href='https://linkedin.com/in/shubham-chavan-0bb376187' target='_blank'>
                      <svg width='22' height='23' viewBox='0 0 22 23' fill='#A3BBD1' className='group-hover:fill-primary'>
                        <path d='M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0Z' />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className='md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0'>
            <div className='md:w-3/4 w-full sm:text-start text-center'>
              <span className='font-bold text-white pb-4 inline-block text-2xl'>
                Subscribe Newsletter
              </span>
              <p className='text-white/50 text-base pb-7'>
                Get Flutter tips, project updates & tech insights.
              </p>

              <form className='newsletter-form flex rounded-lg sm:w-full w-3/4 sm:mx-0 mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='p-4 text-base rounded-s-lg outline-0 w-[calc(100%_-_137px)] bg-white dark:bg-midnight_text dark:text-white'
                />
                <button
                  type='submit'
                  className='p-[0.625rem] text-base font-medium bg-primary text-white rounded-e-lg hover:bg-blue-700 w-[8.5625rem]'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className='text-center flex-wrap p-7 border-t border-solid border-dark_border'>
        <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
          <li className='text-base text-white/50'>
            <Link href='/#about' className='hover:text-primary'>About</Link>
          </li>
          <li className='text-base text-white/50'>
            <Link href='/#services' className='hover:text-primary'>Services</Link>
          </li>
          <li className='text-base text-white/50'>
            <Link href='/#portfolio' className='hover:text-primary'>Portfolio</Link>
          </li>
          <li className='text-base text-white/50'>
            <Link href='/#blog' className='hover:text-primary'>Blog</Link>
          </li>
          <li className='text-base text-white/50'>
            <Link href='/contact' className='hover:text-primary'>Contact</Link>
          </li>
        </ul>

        <p className='text-base text-white/50'>
          © {new Date().getFullYear()} Shubham Sanjiv Chavan | Flutter Developer. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
