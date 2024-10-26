import React from 'react'
import Link from 'next/link'

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you're looking for does not exist.</p>
      <Link href="/">
        <span className="text-blue-500 hover:underline">Go back to Home</span>
      </Link>
    </div>
  )
}

export default PageNotFound