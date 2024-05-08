"use client";
import React, { useState, useEffect } from 'react';
import { getDocumentInfo, getAllDocumentIds } from "../firebase";
import Suenho from '../componentes/Suenho';
import Requerimientos from '../componentes/Requerimientos';
import Alimento from '../componentes/Alimento';
import Ejercicios from '../componentes/Ejercicios';

{/**HOME CLIENTE */}
export default function page({user}) {
  const [alimentos, setAlimentos] = useState(null);
  const [alimentoAlacena, setAlimentoAlacena] = useState(null);//Si se usa el mismo state de arriba se ciclan los useEffect
  const [ejercicios, setEjercicios] = useState(null);
  const [rutina, setRutina] = useState([]);

  



  //ESTO POSIBLEMENTE SE PUEDA HACER UNA FUNCION QUE SE MANDE A LLAMAR Y SOLO PASAMOS " PARAMETROS; ARREGLO COMPLETO Y ARREGLO PARA EVALUAR EL FILTRADO"
  useEffect(() => {  // Obtener TODOS LOS ALIMENTOS de Firebase después de que el componente se monte
    async function fetchData() {
      const documentIds = await getAllDocumentIds('alimentos');// Obtener los IDs de todos los documentos
      const alimentos = await Promise.all(documentIds.map(async (docId) => {// Obtener la información de cada alimento utilizando los IDs de documento
        const alimento = await getDocumentInfo('alimentos', docId);
        return alimento;
      }));
      setAlimentos(alimentos);// Establecer el estado de alimentos con los datos obtenidos
    }
    fetchData();// Llamar a la función fetchData
  }, []);// Este efecto se ejecuta solo una vez (cuando el componente se monta) debido al array de dependencias vacío []
  
  useEffect(()=>{
    if (alimentos && user.alacena) {
      //    f       = [Catalogo] -> filtrar( nombre del Registro Unitario del Catalo(RCU) => arreglo que usamos para evaluar y filtrar(RUC.parametroAEvaluar) )
      const alacena = alimentos.filter(alimento => user.alacena.includes(alimento.ID));
      setAlimentoAlacena(alacena);//al setear aqui con el primer useState es donde se cicla, por eso un segundo useState
    }
  },[alimentos]);
  //HASTA AQUI; ESTOS DOS USEEFFECT PODRIÁN HACERSE UNA SOLA FUNCION EXPORTABLE DESDE FIREBASE.JS





  //CODE PARA PASAR LOS EJERCICIOS DE HOY
  const hoy = new Date();// Obtener la fecha actual
  const dia = hoy.getDay();// Obtener el día de la semana actual (0: Domingo, 1: Lunes, ..., 6: Sábado)
  const ejerciciosDeHoy = dia===0 ? user.domingo :
                          dia===1 ? user.lunes :
                          dia===2 ? user.martes :
                          dia===3 ? user.miercoles :
                          dia===4 ? user.jueves :
                          dia===5 ? user.viernes : user.sabado;

  useEffect(() => {  // Obtener TODOS LOS ALIMENTOS de Firebase después de que el componente se monte
    async function fetchData() {
      const documentIds = await getAllDocumentIds('ejercicios');// Obtener los IDs de todos los documentos
      const ejercicios = await Promise.all(documentIds.map(async (docId) => {// Obtener la información de cada alimento utilizando los IDs de documento
        const ejercicio = await getDocumentInfo('ejercicios', docId);
        return ejercicio;
      }));
      setEjercicios(ejercicios);// Establecer el estado de alimentos con los datos obtenidos
    }
    fetchData();// Llamar a la función fetchData
  }, []);

  useEffect(()=>{
    if (ejercicios) {
      //    f       = [Catalogo] -> filtrar( nombre del Registro Unitario del Catalo(RCU) => arreglo que usamos para evaluar y filtrar(RUC.parametroAEvaluar) )
      const rutina = ejercicios.filter(ejercicio => ejerciciosDeHoy.includes(ejercicio.Id));
      setRutina(rutina);//al setear aqui con el primer useState es donde se cicla, por eso un segundo useState
    }
  },[ejercicios, ejerciciosDeHoy]);
  //FIN DE EJERCICIOS DE HOY

  //console.log(rutina);


  return (
    <>
    <div className='flex w-full'>

      <div className='w-3/12 ring-1 col-span-2'>{/**
  *Monitorización del tiempo de sueño.
    **Tiempo total dormido
    **Tiempo total en sueños de 6 hrs mínimo
  *Requerimientos alimenticios por día (consultar con alguien que sepa de nutrición deportiva).*/}
        <Suenho /> 
        <Requerimientos userInfo={user}/>
        <Alimento alimentoInfo={alimentoAlacena} />
      </div>

      <div className="w-5/12 ring-1 col-span-6">{/**
  *El entrenamiento para hoy.
    **Equercicios.
    **Máquinas requeridas/Máquinas disponibles.*/}
        <Ejercicios ejercicios={rutina}/>
      </div>
      <div className="w-4/12 ring-1 col-span-4">{/**
  *Registro alimenticio(Sección para anotar lo que consumes en el día).
    *Contador de nutrientes.
    *Relacionado con la tabla [RECETAS].
  *Porcentaje total en progreso.
    **Línea de tiempo
    **Alimentación (saludable/chatarra)*/}
        <img className='m-t rpundder' src=" ../ejercicios/mapaCuerpo.png " alt="" />
        <div>Registro alimenticio</div>
        
      </div>
      

    </div>
    </>
  )
}

{/**
¿Estás registrado? la primer página será “Home”: 
  -El entrenamiento para hoy.
    Máquinas requeridas/Máquinas disponibles.
  _Registro alimenticio(Sección para anotar lo que consumes en el día).
    Contador de nutrientes.
    Relacionado con la tabla [RECETAS].
  -Monitorización del tiempo de sueño.
    tiempo total dormido
    tiempo total en sueños de 6 hrs mínimo
  -Porcentaje total en progreso.
    Línea de tiempo
    alimentación (saludable/chatarra)
  -Requerimientos alimenticios por día (consultar con alguien que sepa de nutrición deportiva).
*/}