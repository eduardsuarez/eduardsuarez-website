import React from 'react'

const About = (): JSX.Element => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
          <h2 className='py-4'>Quién soy</h2>
          <p className='py-2 text-gray-600'>Soy ingeniero en Telecomunicaciones y desarrollador de software apasionado
            por mi trabajo. Desde 2017, he estado aprendiendo y aplicando diversos
            lenguajes de programación como Java, JavaScript, Python, HTML5, CSS y React.js.
            Mi perfil de Github refleja algunos de los proyectos en los que he trabajado.</p>
          <p className='py-2 text-gray-600'>
            Estoy constantemente buscando nuevos desafíos y oportunidades de crecimiento profesional.
            Si deseas saber más sobre mí o necesitas más información, no dudes en contactarme.
             ¡Será un placer saber de ti!
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Vea algunos de mis últimos proyectos</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='https://pbs.twimg.com/profile_images/1503436007454224386/f_FMuVQ6_400x400.jpg' alt='profile' />
        </div>

      </div>

    </div>
  )
}

export default About
