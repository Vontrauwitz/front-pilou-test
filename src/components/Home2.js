import React from 'react';

export default function home2() {
  return (
    <div className="grid grid-cols-2  min-h-[20em] h-full bg-[#d5dbde]">
      {/* // <div className="flex flex-row items items-center"> */}
      <div className="p-5 sm:p-1 w-full flex flex-col justify-center items-center  md:justify-start ">
        <p className="text-5xl font-bold mb-10 md:text-2xl md:pl-1">Una nueva forma de invertir</p>
        <p className="text-xl md:text-sm ">A través de nuestra plataforma digital, ofrecemos <strong>portafolios de inversión a la medida</strong> que se adecuan a tus objetivos. Despreocúpate de operarlo. Nosotros lo <strong>monitoreamos y gestionamos por ti.</strong></p>
      </div>
      <div className="p-5 flex flex-col justify-center sm:p-1 w-full">
        <p className="text-xl pb-10  lg:text-sm">Buscamos, comparamos y seleccionamos los mejores instrumentos bursátiles del mercado para lograr los mejores resultados.</p>
        <div className='flex flex-row justify-evenly items-center md:flex-col p-5 sm:p-1 w-full rounded-2xl bg-white'>
          <p className="text-8xl font-extrabold sm:text-4xl">SIN</p>
          <ul className="text-xl font-semibold sm:text-xs sm:pt-2">
            <li>producto propio</li>
            <li>conflicto de interés</li>
            <li>comisiones altas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
