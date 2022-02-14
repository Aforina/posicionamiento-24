
const SelfEmployedTariffs = () => {
    return (
      <div id='selfemployedtariffs' className='py-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='text-4xl font-bold pb-14'>Tarifas Para Autónomos</h1>
        <div className='grid grid-cols-4 gap-2'>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>35€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Informe Mensual de Posicionamiento</p>
                    <nav className='w-full h-12 pt-2 bg-gradient-to-b from-orange-400 to-red-400 text-white rounded-md hover:bg-blue-700  ease-in duration-200'>
                      <button type='contratar'>CONTRATAR</button>
                    </nav>
                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>42,35€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Informe Mensual de Posicionamiento</p>
                    <p className='font-normal'>Seguimiento de Tráfico</p>
                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>55€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Informe Mensual de Posicionamiento</p>
                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>60,50€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Seguimiento de Tráfico</p>
                    <p className='font-normal'>Creación Básica de Contenidos</p>

                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>66,55€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Control de Rastreo</p>
                    <p className='font-normal'>Creación Básica de Contenidos</p>
                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>90€</p>
                    <p className='font-medium'>Mensual</p>
                    <p className='font-normal'>Mensual de Posicionamiento</p>
                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md'>
                <div>
                    <p className='font-bold'>102,85€</p>
                    <p className='font-medium'>Mensual</p>
                    <p className='font-normal'>Seguimiento de Tráfico</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default SelfEmployedTariffs
  