import React from 'react';

export default function home2() {
  return (
    <div className="grid grid-cols-2 gap-8 h-[20em] bg-[#d5dbde]">
      {/* // <div className="flex flex-row items items-center"> */}
      <div className="p-5 flex flex-col justify-center items-center">
        <p className="text-5xl font-bold  mb-10">Una nueva forma de invertir</p>
        <p className="text-xl  ">A través de nuestra plataforma digital, ofrecemos <strong>portafolios de inversión a la medida</strong> que se adecuan a tus objetivos. Despreocúpate de operarlo. Nosotros lo <strong>monitoreamos y gestionamos por ti.</strong></p>
      </div>
      <div className="p-5 flex flex-col justify-center">
        <p className="text-xl pb-10">Buscamos, comparamos y seleccionamos los mejores instrumentos bursátiles del mercado para lograr los mejores resultados.</p>
        <div className='flex flex-row justify-evenly items-center'>
          <p className="text-8xl font-extrabold ">SIN</p>
          <ul className="text-xl font-semibold">
            <li>producto propio</li>
            <li>conflicto de interés</li>
            <li>comisiones altas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
