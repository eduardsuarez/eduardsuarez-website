import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div >
                    <p className='uppercase text-xs tracking-widest text-gray-600 '>LET'S BUILD SOMETHING TOGETHER </p>
                    <h1 className='py-2 text-gray-700 text-3xl'>
                        Hola, Soy <span className='text-[#5651e5]'>Eduard</span>
                    </h1>
                    <h1 className='py-2 text-gray-700 text-3xl '>
                        Ingeniero en Telecomunicaciones y Desarrollador de Software
                    </h1>
                    <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
                        Soy un ingeniero en Telecomunicaciones y desarrollador de software
                        con experiencia en proyectos ágiles y habilidades en varias tecnologías
                        y lenguajes de programación. Me apasiona crear soluciones tecnológicas
                        innovadoras y eficientes.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-2'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main