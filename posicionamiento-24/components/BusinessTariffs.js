
const BusinessTariffs = () => {
    return (
      <div id='businesstariffs' className='py-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='text-4xl font-bold pb-14'>Tarifas Para Business</h1>
        <div className='grid grid-cols-2'>
        <div className='bg-slate-50 drop-shadow-md max-w-sm'>
                <div className='grid grid-rows-4 space-y-4 justify-center place-items-center'>
                    <p className='text-4xl font-semibold text-[#FFBB8E]'>35€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Informe Mensual de Posicionamiento</p>
                    <nav className='w-full h-12 py-2 text-center bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                      <button className='font-semibold' type='contratar'>CONTRATAR</button>
                    </nav>
                </div>
            </div>
            <div className='bg-slate-50 drop-shadow-md max-w-sm'>
                <div className='grid grid-rows-4 space-y-4 justify-center place-items-center'>
                    <p className='text-4xl font-semibold text-[#FFBB8E]'>35€</p>
                    <p className='font-medium'>Semanal</p>
                    <p className='font-normal'>Informe Mensual de Posicionamiento</p>
                    <nav className='w-full h-12 py-2 text-center bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                      <button className='font-semibold' type='contratar'>CONTRATAR</button>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default BusinessTariffs
  