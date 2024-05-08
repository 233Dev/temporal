import React from 'react'

export default function FiltradoArray() {
  const alimentos = [
    { id: 1, nombre: 'Manzana', stock: 10, precioPorKg: 2 },
    { id: 2, nombre: 'Plátano', stock: 5, precioPorKg: 3 },
    { id: 3, nombre: 'Naranja', stock: 8, precioPorKg: 2.5 },
    { id: 4, nombre: 'Pera', stock: 12, precioPorKg: 1.8 },
    { id: 5, nombre: 'Uva', stock: 7, precioPorKg: 4 }
  ];

  const usuario = {
    id: 1,
    nombre: 'Juan',
    listaDeCompra: [1, 3, 5] // IDs de los alimentos que necesita comprar
  };

  console.log(usuario.listaDeCompra);
  const alimentosEnListaDeCompra = alimentos.filter(alimento => usuario.listaDeCompra.includes(alimento.id));
  console.log(alimentosEnListaDeCompra);

  return (
    <div>FiltradoArray</div>
  )
}

const ejercicios = [{
id: 15,
  nombre: "Peck Deck",
  posicionInicial: 'Sentado en la máquina de "peck deck" con la espalda presionada contra el respaldo, tus antebrazos bien apoyados contra las partes acolchadas proporcionadas para este propósito. Tus brazos superiores deben estar paralelos al suelo y en línea con tus hombros.',
  imagen: "../ejercicios/peckDeck.PNG",
  dificultad: "Fácil",
  ejecucion: "Aprieta tus brazos tanto como sea posible siguiendo el movimiento de la máquina. Aprieta tu pecho al final del movimiento y luego regresa lentamente a la posición inicial.",
  equipos: "peck Deck",
  gruposMusculares:["pecho", "hombros"],
},
{
id: 15,
nombre: "Lagartija",
posicionInicial: 'Sentado en la máquina de "peck deck" con la espalda presionada contra el respaldo, tus antebrazos bien apoyados contra las partes acolchadas proporcionadas para este propósito. Tus brazos superiores deben estar paralelos al suelo y en línea con tus hombros.',
imagen: "../ejercicios/peckDeck.PNG",
dificultad: "Fácil",
ejecucion: "Aprieta tus brazos tanto como sea posible siguiendo el movimiento de la máquina. Aprieta tu pecho al final del movimiento y luego regresa lentamente a la posición inicial.",
equipos: "peck Deck",
gruposMusculares:["pecho", "brazos"],
},
{
id: 15,
nombre: "Sentadilla",
posicionInicial: 'Sentado en la máquina de "peck deck" con la espalda presionada contra el respaldo, tus antebrazos bien apoyados contra las partes acolchadas proporcionadas para este propósito. Tus brazos superiores deben estar paralelos al suelo y en línea con tus hombros.',
imagen: "../ejercicios/peckDeck.PNG",
dificultad: "Fácil",
ejecucion: "Aprieta tus brazos tanto como sea posible siguiendo el movimiento de la máquina. Aprieta tu pecho al final del movimiento y luego regresa lentamente a la posición inicial.",
equipos: "peck Deck",
gruposMusculares:["gluteos", "cuadriceps"],
},{
id: 15,
nombre: "Plancha",
posicionInicial: 'Sentado en la máquina de "peck deck" con la espalda presionada contra el respaldo, tus antebrazos bien apoyados contra las partes acolchadas proporcionadas para este propósito. Tus brazos superiores deben estar paralelos al suelo y en línea con tus hombros.',
imagen: "../ejercicios/peckDeck.PNG",
dificultad: "Fácil",
ejecucion: "Aprieta tus brazos tanto como sea posible siguiendo el movimiento de la máquina. Aprieta tu pecho al final del movimiento y luego regresa lentamente a la posición inicial.",
equipos: "peck Deck",
gruposMusculares:["Abdomen", "hombros"],
}];