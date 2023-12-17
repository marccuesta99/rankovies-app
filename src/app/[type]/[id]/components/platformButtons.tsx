'use client'
import React from 'react';

export enum StreamingPlatforms {
  NETFLIX = 'netflix',
  PRIME = 'prime',
  HBO = 'hbo',
  DISNEY = 'disney',
  PLUSTV = 'plustv',
  MOVISTAR = 'movistar',
}

interface ButtonProps {
  onClick: () => void;
}

const Netflix: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full'
      style={{ backgroundColor: '#DE0813' }}
      onClick={onClick}
    >
      Netflix
    </button>
  )
}

const AmazonPrime: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full'
      style={{ backgroundColor: '#37A2DA' }}
      onClick={onClick}
    >
      Amazon Prime
    </button>
  )
}

const Hbo: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg w-full'
      style={{ backgroundColor: '#9244EB' }}
      onClick={onClick}
    >
      HBO
    </button>
  )
}

const DisneyPlus: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg w-full'
      style={{ backgroundColor: '#0E147C' }}
      onClick={onClick}
    >
      Disney Plus
    </button>
  )
}

const PlusTV: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg w-full'
      style={{ backgroundColor: '#0E147C' }}
      onClick={onClick}
    >
      +TV
    </button>
  )
}

const MovistarPlus: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg w-full'
      style={{ backgroundColor: '#2B2B2B' }}
      onClick={onClick}
    >
      Movistar Plus
    </button>
  )
}

const StreamingPlatformSwitcher: React.FC<{ platform: StreamingPlatforms; url: string }> = ({ platform, url }) => {
  const handleButtonClick = () => {
    // Perform navigation or other actions based on the URL
    console.log('Navigating to:', url)
  }

  console.log('platform', platform)
  console.log('url', url)

  const renderPlatform = () => {
    switch (platform?.toLowerCase()) {
      case StreamingPlatforms.NETFLIX:
        return <Netflix onClick={handleButtonClick} />
      case StreamingPlatforms.PRIME:
        return <AmazonPrime onClick={handleButtonClick} />
      case StreamingPlatforms.HBO:
        return <Hbo onClick={handleButtonClick} />
      case StreamingPlatforms.DISNEY:
        return <DisneyPlus onClick={handleButtonClick} />
      case StreamingPlatforms.PLUSTV:
        return <PlusTV onClick={handleButtonClick} />
      case StreamingPlatforms.MOVISTAR:
        return <MovistarPlus onClick={handleButtonClick} />
      default:
        return <div>No service selected</div>
    }
  }

  return (
    <div className='flex space-x-4'>
      {renderPlatform()}
    </div>
  )
}

export default StreamingPlatformSwitcher
