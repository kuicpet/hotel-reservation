import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, keywords, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Beach Resort',
    description: 'Get the best rooms available',
    keywords: 'hotel, resorts, rooms'
}

export default Meta
