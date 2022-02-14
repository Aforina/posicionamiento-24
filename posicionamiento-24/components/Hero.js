import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='h-screen w-screen relative overflow-y-hidden'>
        <div className=' bg-gray-300 bg-opacity-60 absolute top-0 h-screen z-10 w-screen' />
        <Image src='/hero-cover.jpg' layout='fill' objectFit='cover'/>
    </div>
  )
}

export default Hero
