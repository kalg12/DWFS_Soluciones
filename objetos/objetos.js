const bootcamp = {
    nombre: 'Ucamp',
    tipo: 'fullstack',
    modulos: [
        { nombre: 'css', cursado: true },
        { nombre: 'javascript', cursado: true },
        { nombre: 'react', cursado: false }
 ],
    saludar: (nombre) => {
        console.log(`Hola soy ${nombre}`)
    }
 }

 /* Ejercicio 1 Muestra las propiedades nombre y tipo en un console.log.*/
 console.log(bootcamp.nombre)
 console.log(bootcamp.tipo)

/*  Como último, muestra en un console.log la propiedad nombre del arreglo de modulos. Para esto deberas usar forEach. */

    bootcamp.modulos.forEach(modulo => {
        console.log(modulo.nombre)
    });

/* Ejecuta la función saludar. Esta función se le debe pasar un nombre. */

bootcamp.saludar("Kevin")

/* Meter una propiedad en HTML */
document.getElementById("title").innerHTML= `${bootcamp.nombre}`