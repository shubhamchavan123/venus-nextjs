import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { portfolioinfo } from '@/app/api/data'

const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-darkmode'>
      <div className='container mx-auto max-w-6xl'>

        {/* Header */}
        <div className='flex items-baseline justify-between flex-wrap mb-10'>
          <h2
            className='sm:mb-11 mb-3 text-4xl font-bold text-midnight_text dark:text-white'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            My Flutter Projects
          </h2>

          <Link
            href='#'
            className='flex items-center gap-3 text-base text-midnight_text dark:text-white dark:hover:text-primary font-medium hover:text-primary'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            View All Projects
            <span>
              <Icon icon='solar:arrow-right-outline' width='30' height='30' />
            </span>
          </Link>
        </div>

        {/* Portfolio Grid - Blog Style */}
        <div className='grid grid-cols-12 gap-7'>
          {portfolioinfo.map((item, i) => (
            <div
              key={i}
              className='w-full md:col-span-4 sm:col-span-6 col-span-12'
              data-aos='fade-up'
              data-aos-delay={`${i * 200}`}
              data-aos-duration='1000'>

              <div className='bg-white dark:bg-darklight rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className='w-full h-56 object-cover'
                />

                <div className='p-5'>
                  <h3 className='text-lg font-bold text-midnight_text dark:text-white'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray dark:text-white/60 mt-2'>
                    {item.info}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
