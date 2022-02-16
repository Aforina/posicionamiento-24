import Image from 'next/image'

const Hero = () => {
  return (
    <div className='id=hero'>
      <div className='hidden sm:block h-screen w-screen relative overflow-y-hidden'>
          <div className=' bg-gray-400 bg-opacity-50 absolute top-0 h-screen z-10 w-screen' />
          <Image src='/hero-cover.jpg' layout='fill' objectFit='cover'/>
          <div className='flex flex-col w-screen h-screen absolute z-20 justify-center self-center items-center' >
            <div className='bg-white bg-opacity-25 py-20 px-72'>
              <h1 className='text-white text-6xl font-semibold mb-10 text-center'>ANÁLISIS SEO</h1>
              <div className='grid grid-rows-2 gap-y-4 px-12'>
                  <div className='bg-white h-12 text-center text-gray-300 grid content-center'>www.ejemplo.com</div>
                  <div className='bg-white h-12 text-center text-gray-300 grid content-center'>email@gmail.com</div>
                  <p className='text-white text-center text-lg'>Acepto los Términos y Condiciones</p>
                  <nav className='w-full h-12 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                    <button className='w-full h-full font-semibold inline-block align-middle '>EMPIEZA AHORA</button>
                  </nav>
              </div>
            </div>
          </div>
      </div>
      <div className='sm:hidden h-screen w-screen relative overflow-y-hidden'>
          <div className=' bg-gray-400 bg-opacity-50 absolute top-0 h-screen z-10 w-screen' />
          <Image src='/hero-cover.jpg' layout='fill' objectFit='cover'/>
          <div className='flex flex-col w-screen h-screen absolute z-20 justify-center self-center items-center' >
            <div className='bg-white bg-opacity-25 py-4'>
              <h1 className='text-white text-3xl font-semibold mb-10 text-center'>ANÁLISIS SEO</h1>
              <div className='grid grid-rows-2 gap-y-4 px-12'>
                  <div className='bg-white h-12 text-center text-gray-300 grid content-center'>www.ejemplo.com</div>
                  <div className='bg-white h-12 text-center text-gray-300 grid content-center'>email@gmail.com</div>
                  <p className='text-white text-center text-lg'>Acepto los Términos y Condiciones</p>
                  <nav className='w-full h-12 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                    <button className='w-full h-full font-semibold inline-block align-middle '>EMPIEZA AHORA</button>
                  </nav>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
