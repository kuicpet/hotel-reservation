import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Meta from '../components/Meta'

export default function hello() {
  return (
    <>
      <Meta />
      <Hero>
        <Banner
          title='Luxurious rooms'
          subtitle='deluxe rooms starting at $299'
        >
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  )
}
