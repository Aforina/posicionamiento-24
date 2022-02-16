
import Card from '../components/common/Card.js'

const PymesTariffs = () => {
    return (
      <div id='pymestariffs' className='pb-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='text-4xl font-bold pb-14 text-center'>Tarifas Para Pymes</h1>
        <div className='flex flex-cols-2 space-x-20 place-items-center justify-center'>
          <Card price={'108,90€'} title={'Mensual'} subtitle={'Informe Mensual de Posicionamiento'} details={''} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>  
          <Card price={'169,40€'} title={'Mensual'} subtitle={'Seguimiento de Tráfico'} details={'Creación Básica de Contenido'} details2={'Control de Rastreo'} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>  
        </div>
      </div>
    )
  }
  
  export default PymesTariffs
  