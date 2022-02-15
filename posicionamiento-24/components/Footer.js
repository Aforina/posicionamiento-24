
const Footer = () => {
    return (
      <div id='footer' className='w-screen mt-8 text-xl tracking-wide bg-[#4B505C] text-gray-100'>
        <div className='w-full max-w-7xl mx-auto flex flex-row px-4 py-8 font-semibold'>
          <div className='flex flex-row gap-16 cursor-pointer'>
            <p className='hover:text-gray-300'>Servicios</p>
            <p className='hover:text-gray-300'>Tarifas</p>
            <p className='hover:text-gray-300'>Contacto</p>
          </div>
          <div className='ml-auto flex flex-row cursor-default'>
            <p>Posicionamiento Web 24</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer
  