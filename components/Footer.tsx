'use client'

import { useState, useEffect } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        const year = new Date().getFullYear()
        setCurrentYear(year)
      },
      1000 * 60 * 60 * 24
    ) // Check every day

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [])

  return (
    <footer className='mx-auto mt-auto pb-3 text-xs'>
      © {currentYear} Essential Fitness. All rights reserved.
    </footer>
  )
}

export default Footer
