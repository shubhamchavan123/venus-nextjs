import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const ContactForm = () => {
  return (
    <>
      <section className='dark:bg-darkmode md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-8'>

            {/* Form Section */}
            <div className='col-span-6'>
              <h2 className='max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white'>
                Book Free Flutter Consultation
              </h2>

              <form className='flex flex-wrap w-full m-auto justify-between'>
                
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>
                      First Name*
                    </label>
                    <input
                      className='w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border dark:text-white dark:bg-darkmode transition-all focus:border-primary'
                      type='text'
                      placeholder='Enter your first name'
                    />
                  </div>

                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>
                      Last Name*
                    </label>
                    <input
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border dark:text-white dark:bg-darkmode transition-all focus:border-primary'
                      type='text'
                      placeholder='Enter your last name'
                    />
                  </div>
                </div>

                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>
                      Email Address*
                    </label>
                    <input
                      type='email'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border dark:text-white dark:bg-darkmode transition-all focus:border-primary'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>
                      Project Type*
                    </label>
                    <select className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border dark:text-white dark:bg-darkmode transition-all focus:border-primary'>
                      <option value=''>Select project type</option>
                      <option value='Flutter App'>Flutter Mobile App</option>
                      <option value='UI Fix'>UI/UX Enhancement</option>
                      <option value='API Integration'>API Integration</option>
                      <option value='Bug Fixing'>Bug Fixing & Optimization</option>
                    </select>
                  </div>
                </div>

                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>
                      Preferred Date*
                    </label>
                    <input
                      className='w-full text-base px-4 rounded-lg py-2.5 dark:text-white dark:bg-darkmode border border-border dark:border-dark_border transition-all focus:border-primary'
                      type='date'
                    />
                  </div>

                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>
                      Preferred Time*
                    </label>
                    <input
                      className='w-full text-base px-4 rounded-lg py-2.5 dark:text-white dark:bg-darkmode border border-border dark:border-dark_border transition-all focus:border-primary'
                      type='time'
                    />
                  </div>
                </div>

                <div className='mx-0 my-2.5 w-full'>
                  <Link
                    href='#'
                    className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700'>
                    Schedule Consultation
                  </Link>
                </div>

              </form>
            </div>

            {/* Image Section (Unchanged) */}
            <div className='col-span-6'>
              <Image
                src={getImgPath('/images/contact-page/contact.jpg')}
                alt='Contact'
                width={1300}
                height={0}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className='bg-no-repeat bg-contain'
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
