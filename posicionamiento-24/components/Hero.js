import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='h-screen w-screen relative overflow-y-hidden'>
        <div className=' bg-gray-400 bg-opacity-50 absolute top-0 h-screen z-10 w-screen' />
        <Image src='/hero-cover.jpg' layout='fill' objectFit='cover'/>
        <div className='flex flex-col w-screen h-screen absolute z-20 justify-center self-center items-center' >
          <div className='bg-white bg-opacity-25 py-20 px-40'>
            <h1 className='text-white text-6xl font-semibold mb-10 text-center'>ANÁLISIS SEO</h1>
            <div className='grid grid-rows-2 space-y-4 px-10'>
                <div className='bg-white'>.</div>
                <div className='bg-white'>.</div>
                <p className='text-white text-center'>Acepto los Términos y Condiciones</p>
                <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                  <button className='w-full h-full font-semibold inline-block align-middle' type='contratar'>EMPIEZA AHORA</button>
                </nav>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
