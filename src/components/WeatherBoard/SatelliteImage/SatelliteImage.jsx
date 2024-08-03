import React from 'react'
import satelliteImage from '../../../assets/satellite-image.jpg'

function SatelliteImage() {
  return (
    <div className="py-2">
      <p className="dark:bg-slate-100 bg-darkBg bg-transparent px-3 rounded text-white dark:text-black text-xl font-semibold py-2 mb-4">Satellite Image</p>
      <img src={satelliteImage} alt="satellite Image" className="" />
    </div>
  )
}

export default SatelliteImage