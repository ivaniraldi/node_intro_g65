const saludar = (nombre) => {
  console.log(`Hola ${nombre}, ¿cómo estás? 😀`);
};

const darLasGracias = (nombre) => {
  console.log(`Muchas gracias, ${nombre}`);
};

let edad = 36


module.exports = { saludar, darLasGracias, edad };