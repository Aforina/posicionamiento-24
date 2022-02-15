
const ContactForm = () => {
    return (
      <div id='contactForm' className='pb-20 w-screen relative max-w-xl mx-auto place-self-center text-[#4B505C] '>
        <h1 className='text-4xl font-bold text-center pb-14'>Escríbenos</h1>
        <div className='absolute bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78]'>
            <p>Hola</p>
        </div>
        <div className='relative flex justify-center self-center items-center bg-white py-10'>
            <div className='divide-y'>
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
                        <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                            <button className='w-full h-full font-semibold inline-block align-middle' type='contratar'>ENVIAR</button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default ContactForm
  