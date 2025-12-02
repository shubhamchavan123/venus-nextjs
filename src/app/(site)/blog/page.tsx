import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
  ]

  return (
    <>
      <HeroSub
        title='Flutter Development Blog'
        description='Explore insights, tutorials, and expert tips on Flutter development, mobile app architecture, performance optimization, and real-world project experiences by Shubham Sanjiv Chavan.'
        breadcrumbLinks={breadcrumbLinks}
      />
      {/* <BlogList /> */}
    </>
  )
}

export default BlogPage
