import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Page Routing Home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/clients'>Client</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home