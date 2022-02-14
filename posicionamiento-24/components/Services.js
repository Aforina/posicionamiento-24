
import Image from 'next/image'


const Services = () => {
    return (
      <div id='services' className='py-20 w-screen relative max-w-7xl mx-auto place-self-center text-[#4B505C]'>
        <h1 className='py-20 text-4xl font-bold'>Nuestros Servicios</h1>
        <div className='grid grid-cols-2 gap-2'>
            <div className='grid grid-cols-2'>
                <Image src='/informe_mensual_posicionamiento_edit.png' layout='fixed' width={80} height={80}/>
                <div>
                    <p className='font-medium'>Informe Mensual de Posicionamiento</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <Image src='/control_de_rastreo_edit.png' layout='fixed' width={80} height={80}/>
                <div>
                    <p className='font-medium'>Control de Rastreo</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <Image src='/seguimiento_de_trafico_edit.png' layout='fixed' width={80} height={80}/>
                <div>
                    <p className='font-medium'>Seguimiento de Tráfico</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <Image src='/creacion_basica_contenido_edit.png' layout='fixed' width={80} height={80}/>
                <div>
                    <p className='font-medium'>Creación Básica de Contenidos</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <Image src='/recomendaciones_de_contenido_edit.png' layout='fixed' width={80} height={80}/>
                <div>
                    <p className='font-medium'>Recomendaciones de Contenido</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, velit sit amet molestie tincidunt, felis augue semper ante, id vestibulum purus sem vel urna. In sit amet sagittis libero.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Services
  