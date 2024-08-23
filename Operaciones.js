const fs = require('fs');

const createFile = (nombreArchivo, contenido) => {
    fs.writeFileSync(nombreArchivo, contenido);
    console.log(nombreArchivo + ' fue creado.');
}

const readFile = (nombreArchivo) => {
    const archivoLeido = fs.readFileSync(nombreArchivo, "utf-8")
    console.log(archivoLeido)
}

module.exports = { createFile, readFile, createFileJSON }