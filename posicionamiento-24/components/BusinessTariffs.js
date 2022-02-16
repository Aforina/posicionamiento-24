
import Card from '../components/common/Card.js'

const BusinessTariffs = () => {
    return (
      <div id='businesstariffs' className='pb-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='text-4xl font-bold pb-14 text-center'>Tarifas Para Business</h1>
        <div className='flex flex-cols-2 space-x-20 place-items-center justify-center'>
          <Card price={'292,50€'} title={'Mensual'} subtitle={'Informe Mensual de Posicionamiento'} details={''} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
          <Card price={'455,50€'} title={'Mensual'} subtitle={'Informe Mensual de Posicionamiento'} details={'Creación Básica de Contenido'} details2={'Control de Rastreo'} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
        </div>
      </div>
    )
  }
  
  export default BusinessTariffs
  