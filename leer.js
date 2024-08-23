const fs = require('fs')

const tareas = fs.readFileSync('tareas.json', 'utf8')
const autos = fs.readFileSync('autos.json', 'utf8')

const tareasEnJavaScript = JSON.parse(tareas)

tareasEnJavaScript.forEach((tarea) => {
    console.log(tarea)
})

JSON.parse(autos).forEach((auto) =>{
    console.log(auto.modelo.toUpperCase())
})