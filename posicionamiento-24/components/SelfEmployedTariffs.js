
import Card from '../components/common/Card.js'

const SelfEmployedTariffs = () => {
    return (
      <div id='selfemployedtariffs' className='pb-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='text-4xl font-bold pb-14 text-center'>Tarifas Para Autónomos</h1>
        <div className='grid grid-cols-4 gap-10'>
          <Card price={'35€'} title={'Semanal'} subtitle={'Informe Mensual de Posicionamiento'} details={''} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
          <Card price={'42,35€'} title={'Semanal'} subtitle={'Informe Mensual de Posicionamiento'} details={'Seguimiento de Tráfico'} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
          <Card price={'55€'} title={'Semanal'} subtitle={'Recomendaciones de Contenido'} details={'Control de Rastreo'} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
          <Card price={'60,50€'} title={'Semanal'} subtitle={'Seguimiento de Tráfico'} details={'Creación Básica de Contenido'} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
        </div>
        <div className='grid grid-cols-3 mt-10 content-center gap-10 max-w-5xl mx-auto'>
          <Card price={'66,55€'} title={'Semanal'} subtitle={'Control de Rastreo'} details={'Creación Básica de Contenido'} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
          <Card price={'90€'} title={'Semanal'} subtitle={'Informe Mensual de Posicionamient'} details={''} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-white'/>
          <Card price={'102,85€'} title={'Semanal'} subtitle={'Seguimiento de Tráfico'} details={''} details2={''} buttonText={'CONTRATAR'} extraClassNames='bg-orange-100'/>
        </div>
      </div>
    )
  }
  
  export default SelfEmployedTariffs
  