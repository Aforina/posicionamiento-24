import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'

const ContactForm = () => {
  const [submittedForm, changeSubmittedForm] = useState(false)
  return (
    <div
      id='contactForm'
      className='pb-8 sm:pb-20 w-screen relative max-w-3xl mx-auto place-self-center text-[#4B505C] '
    >
      <h1 className='text-3xl sm:text-4xl font-bold text-center pb-14'>
        Escríbenos
      </h1>
      {/*PC*/}
      <div className='hidden sm:block'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            number: '',
            web: '',
            matter: '',
            message: '',
            terms: ''
          }}
          validate={valores => {
            const errores = {}

            // Name Validation
            if (!valores.name) {
              errores.name = 'Name must be filled out'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
              errores.name = 'Please enter a valid name'
            }

            // Email Validation
            if (!valores.email) {
              errores.email = 'Email address must be filled out'
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email = 'Please enter a valid email address'
            }

            // Number Validation
            if (
              !/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(valores.number) &&
              valores.number !== ''
            ) {
              errores.number = 'Please specify a valid phone number'
            }

            // Web Validation
            if (!valores.web) {
              errores.web = 'Web must be filled out'
            }

            // Matter Validation
            if (!valores.matter) {
              errores.matter = 'Matter must be filled out'
            }

            // Message Validation
            if (!valores.message) {
              errores.message = 'Message must be filled out'
            }

            // Terms and Conditions Validation
            if (!valores.terms) {
              errores.terms = 'Terms and Conditions must be accepted'
            }

            return errores
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm()
            changeSubmittedForm(true)
            setTimeout(() => changeSubmittedForm(false), 5000)
          }}
        >
          {({ errors }) => (
            <Form className='formulario'>
              <div className='relative bg-white drop-shadow-md'>
                <div className='absolute grid grid-cols-1 top-20 -left-[5vw] w-2/5 p-8 pb-24 space-y-4 text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
                  <h1 className='text-3xl my-5 font-semibold text-center '>
                    Información
                  </h1>
                  <div className='inline-flex space-x-1'>
                    <FaEnvelope className='mr-1 mt-1' />
                    <p>info@posicionamientoweb.com</p>
                  </div>
                  <div className='inline-flex space-x-1'>
                    <FaMapMarkerAlt className='mr-2 mt-1' />
                    <p>C/ Enmedio 20, Castellón, 12006, España</p>
                  </div>
                  <div className='inline-flex space-x-1'>
                    <FaPhoneAlt className='mr-1 mt-1' />
                    <p>+34 637 85 22 56</p>
                  </div>
                </div>
                <div className='flex justify-center ml-48 self-center items-center bg-white py-10'>
                  <div>
                    <div className='w-full h-14 rounded-lg'>
                      <p className='pl-3 w-full h-full py-4 '>Nombre</p>
                      <Field
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Nombre'
                        className='underline bg-blue-200'
                      />
                    </div>
                    <div className='text-red-600 font-weight: 600 py-4'>
                      <ErrorMessage
                        name='name'
                        component={() => (
                          <div className='error'>{errors.name}</div>
                        )}
                      />
                    </div>
                    <div className='w-full h-14 rounded-lg'>
                      <p className='pl-3 w-full h-full py-4'>
                        Correo Electrónico
                      </p>
                      <Field
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Correo'
                        className='underline bg-blue-200'
                      />
                    </div>
                    <div className='text-red-600 font-weight: 600 py-4'>
                      <ErrorMessage
                        name='email'
                        component={() => (
                          <div className='error'>{errors.email}</div>
                        )}
                      />
                    </div>
                    <div className='w-full h-14 rounded-lg'>
                      <p className='pl-3 w-full h-full py-4'>Teléfono</p>
                      <Field
                        type='text'
                        id='number'
                        name='number'
                        placeholder='Teléfono'
                        className='underline bg-blue-200'
                      />
                    </div>
                    <div className='text-red-600 font-weight: 600 py-4'>
                      <ErrorMessage
                        name='number'
                        component={() => (
                          <div className='error'>{errors.number}</div>
                        )}
                      />
                    </div>
                    <div className='w-full h-14 rounded-lg'>
                      <p className='pl-3 w-full h-full py-4'>Tu Página Web</p>
                      <Field
                        type='text'
                        id='web'
                        name='web'
                        placeholder='Web'
                        className='underline bg-blue-200'
                      />
                    </div>
                    <div className='text-red-600 font-weight: 600 py-4'>
                      <ErrorMessage
                        name='web'
                        component={() => (
                          <div className='error'>{errors.web}</div>
                        )}
                      />
                    </div>
                    <div className='w-full h-14 rounded-lg'>
                      <p className='pl-3 w-full h-full py-4'>Asunto</p>
                      <Field
                        type='text'
                        id='matter'
                        name='matter'
                        placeholder='Asunto'
                        className='underline bg-blue-200'
                      />
                    </div>
                    <div className='text-red-600 font-weight: 600 py-4'>
                      <ErrorMessage
                        name='matter'
                        component={() => (
                          <div className='error'>{errors.matter}</div>
                        )}
                      />
                    </div>
                    <div className='w-full h-14 rounded-lg'>
                      <p className='pl-3 w-full h-full py-4'>Deja tu mensaje</p>
                      <Field
                        type='text'
                        id='message'
                        name='message'
                        as='textarea'
                        placeholder='Deja tu mensaje'
                        className='underline bg-blue-200'
                      />
                    </div>
                    <div className='text-red-600 font-weight: 600 py-12'>
                      <ErrorMessage
                        name='message'
                        component={() => (
                          <div className='error'>{errors.message}</div>
                        )}
                      />
                    </div>
                    <div className='justify-center text-center'>
                      <label className='w-full'>
                        <Field
                          type='checkbox'
                          id='terms'
                          name='terms'
                          value='terms'
                          className='underline bg-blue-200'
                        />
                        Acepto Términos y Condiciones
                      </label>
                      <div className='text-red-600 font-weight: 600 py-4'>
                        <ErrorMessage
                          name='terms'
                          component={() => (
                            <div className='error'>{errors.terms}</div>
                          )}
                        />
                      </div>
                      <div className='text-center p-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                        <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                          <button
                            className='w-full h-full font-semibold inline-block align-middle'
                            type='contratar'
                          >
                            ENVIAR
                          </button>
                        </nav>
                      </div>
                      {submittedForm && (
                        <p className='exito'>¡Formulario enviado con éxito!</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/*Mobile*/}
      <div className='sm:hidden'>
        <div className='justify-center mx-4 self-center items-center bg-white py-10'>
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
              <p className='w-full'>Acepto los Términos y Condiciones</p>
              <div className='text-center p-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                <nav className='w-full h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md'>
                  <button
                    className='w-full h-full font-semibold inline-block align-middle'
                    type='contratar'
                  >
                    ENVIAR
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 top-20 w-screen p-8 space-y-4 text-white bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] items-center justify-center'>
          <h1 className='text-3xl my-5 font-semibold text-center'>
            Información
          </h1>
          <div className='inline-flex space-x-1'>
            <FaEnvelope className='mr-1 mt-1' />
            <p>info@posicionamientoweb.com</p>
          </div>
          <div className='inline-flex space-x-1'>
            <FaMapMarkerAlt className='mr-2 mt-1' />
            <p>C/ Enmedio 20, Castellón, 12006, España</p>
          </div>
          <div className='inline-flex space-x-1'>
            <FaPhoneAlt className='mr-1 mt-1' />
            <p>+34 637 85 22 56</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
