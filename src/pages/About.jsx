import React from 'react'

const About = () => {
  return (
    <>
    <div className='align-element py-20'>
      <div className='flex flex-wrap justify-center place-items-center gap-x-2'>
        <h1 className='capitalize text-4xl leading-none font-bold sm:text-6xl'>we love</h1>
        <div className="stats">
            <div className='stat-title text-primary-content bg-primary tracking-widest text-4xl p-5 rounded-2xl'>
              comfy
            </div>
        </div>
      </div>
      <p className='text-lg max-w-3xl mx-auto px-3 mt-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        numquam ipsum voluptates repellendus placeat, eaque dolores consectetur incidunt, 
        consequuntur aliquam qui unde quidem eius quae culpa laborum. Facere, adipisci culpa!
      </p>
    </div>
    </>
  )
}

export default About