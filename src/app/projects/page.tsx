'use client'

import React, { useEffect, useState } from 'react'

interface portfolio {
  name: string,
  description: string,
  image: string
}

const Projects = () => {
  return (
    <div className='pt-16 lg:pt-8'>
      <div className="max-w-7xl p-8 lg:px-24 lg:py-24 md:px-16 md:py-16 mx-auto">
        <div className="text-start">
          <h4 className="text-slate-600 mb-2">PT BAS - Projects</h4>
          <h1 className="text-slate-900 text-3xl lg:text-5xl mb-12 font-semibold">Alamanda Bachiro</h1>
        </div>

      </div>
    </div>
  )
}

export default Projects