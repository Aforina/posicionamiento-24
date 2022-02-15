import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
    return (
      <div id='contactForm' className='pb-20 w-screen relative max-w-3xl mx-auto place-self-center text-[#4B505C] '>
        <h1 className='text-4xl font-bold text-center pb-14'>Escríbenos</h1>
        <div className='relative bg-white drop-shadow-md'>
            <div className='absolute top-20 -left-[5vw] text-center text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
                <div className='w-4/5 space-y-4'>
                    <h1 className='text-3xl my-5 font-semibold'>Información</h1>
                    <div className='inline-flex'>
                        <FaEnvelope />
                        <p>info@posicionamientoweb.com</p>
                    </div>
                    <div>
                        <FaMapMarkerAlt />
                        <p>C/ Enmedio 20, Castellón, 12006, España</p>
                    </div>
                    <div className='inline-flex'>
                        <FaPhoneAlt className='mr-2 mt-1'/>
                        <p>+34 637 85 22 56</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center ml-48 self-center items-center bg-white py-10'>
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
      </div>
    )
  }
  
  export default ContactForm
  