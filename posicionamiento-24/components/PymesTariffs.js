
const PymesTariffs = () => {
    return (
      <div id='pymestariffs' className='pb-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='text-4xl font-bold pb-14 text-center'>Tarifas Para Pymes</h1>
        <div className='flex flex-cols-2 space-x-20 place-items-center justify-center'>
            <div className='bg-slate-50 drop-shadow-md max-w-sm h-96 overflow-hidden'>
                <div className='text-center p-10'>
                    <p className='text-4xl font-semibold text-[#FAAC78]'>108,90€</p>
                    <p className='font-medium mb-4'>Mensual</p>
                    <p className='font-normal'>Informe Mensual de Posicionamiento</p>
                    <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                      <button className='w-full h-full font-semibold inline-block align-middle' type='contratar'>CONTRATAR</button>
                    </nav>
                </div>
            </div>
            <div className='bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white drop-shadow-md max-w-sm max-h-96'>
                <div className='text-center p-10'>
                    <p className='text-4xl font-semibold text-white'>108,90€</p>
                    <p className='font-medium mb-4'>Mensual</p>
                    <p className='font-normal'>Seguimiento de Tráfico</p>
                    <p className='font-normal'>Creación Básica de Contenido</p>
                    <p className='font-normal'>Control de Rastreo</p>
                    <nav className='w-full h-12 mt-8 bg-white text-[#FA8F78] rounded-md'>
                      <button className='w-full h-full font-semibold inline-block align-middle' type='contratar'>CONTRATAR</button>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default PymesTariffs
  