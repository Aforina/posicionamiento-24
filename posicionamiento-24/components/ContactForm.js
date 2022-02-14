
const ContactForm = () => {
    return (
      <div id='contactForm' className='py-20 w-screen relative max-w-xl mx-auto place-self-center text-[#4B505C] bg-white'>
        <h1 className='text-4xl font-bold text-center'>Escríbeme</h1>
        <div className='max-w-md divide-y'>
            <div className='w-full h-14 rounded-lg my-3 '>
                <p className='pl-3 w-full h-full'>Nombre</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
                <p className='pl-3 w-full h-full'>Correo Electrónico</p>
            </div>        
            <div className='w-full h-14 rounded-lg my-3'>
                <p className='pl-3 w-full h-full'>Teléfono</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
                <p className='pl-3 w-full h-full'>Tu Página Web</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
                <p className='pl-3 w-full h-full'>Asunto</p>
            </div>
            <div className='w-full h-14 rounded-lg my-3'>
                <p className='pl-3 w-full h-full'>Deja tu mensaje</p>
            </div>
            <div className='justify-center text-center'>
                <p className='w-full'>
                    Acepto los Términos y Condiciones
                </p>
                <div className='text-center p-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                    <nav className='w-full h-12 py-2 text-center bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                        <button className='font-semibold' type='contratar'>ENVIAR</button>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default ContactForm
  