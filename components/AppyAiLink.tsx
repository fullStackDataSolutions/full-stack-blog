import React from 'react'
import Link from './Link'

interface AppyAiLink {
  title: string
}

export const AppyAiLink: React.FC<AppyAiLink> = ({ title }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Discover Full Stack Data Solutions - a powerful tool designed to help technical founders
        acquire customers efficiently. Streamline your customer acquisition process and focus on
        what you do best: building amazing products.
      </p>
      <Link
        href="https://fullstackdatasolutions.appy.ai/"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Get Started with Full Stack Data Solutions
      </Link>
    </div>
  )
}
