import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='h-screen w-screen relative overflow-y-hidden'>
        <div className=' bg-gray-300 bg-opacity-60 absolute top-0 h-screen z-10 w-screen' />
        <Image src='/hero-cover.jpg' layout='fill' objectFit='cover'/>
        <div className='absolute top-0 h-40 w-40 z-20 bg-white bg-opacity-25' >
            <p className='text-white font-bold'>ANÁLISIS SEO</p>
            <div className='grid grid-rows-2 space-y-4'>
                <div className='bg-white'>.</div>
                <div className='bg-white'>.</div>
                <p className='text-white'>Acepto los Términos y Condiciones</p>
                <nav className='w-full h-12 py-2 text-center bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                      <button className='font-semibold' type='contratar'>EMPEZAR AHORA</button>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Hero
