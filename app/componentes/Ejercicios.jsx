// Componente Ejercicios
import React from 'react';
import Ejercicio from './Ejercicio';

export default function Ejercicios({ejercicios}) {

  return (
    <div className="flex flex-wrap justify-center gap-1">
      {ejercicios.map((ejercicio, index) => (
        <Ejercicio key={index} ejercicio={ejercicio} />
      ))}
    </div>
  );
}
