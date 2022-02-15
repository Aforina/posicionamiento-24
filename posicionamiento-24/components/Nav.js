
const Nav = () => {
    return (
      <div id='nav' className='absolute top-0 h-screen w-screen z-20 font-semibold'>
        <div className='hidden h-screen w-full max-w-7xl mx-auto text-white lg:flex flex-row pt-8 p-4 tracking-wider'>
          <p className='text-3xl cursor-default'>Logo</p>
          <div className='flex flex-row ml-auto cursor-pointer gap-12 text-2xl'>
            <div className='hover:text-[#FAAC78]'>
              <p>Servicios</p>
            </div>
            <div className='hover:text-[#FAAC78]'>
              <p>Tarifas</p>
            </div>
            <div className='hover:text-[#FAAC78]'>
              <p>Contacto</p>
            </div>
          </div>
        </div>
      </div>
    )
}
  
export default Nav
  