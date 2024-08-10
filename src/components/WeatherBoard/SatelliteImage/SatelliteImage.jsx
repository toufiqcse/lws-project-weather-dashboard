import React from 'react'
import satelliteImage from '../../../assets/satellite-image.jpg'

function SatelliteImage() {
  return (
    <div className="py-2">
      <p className="bg-slate-100 dark:bg-darkBg bg-transparent px-3 rounded dark:text-white text-black text-xl font-semibold py-2 mb-4">Satellite Image</p>
      <img src={satelliteImage} alt="satellite Image" className="" />
    </div>
  )
}

export default SatelliteImage