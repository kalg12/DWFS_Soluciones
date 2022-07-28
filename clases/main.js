class Persona {
    constructor(miNombre, miEdad){
        this.nombreCompleto = miNombre;
        this.edad = miEdad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombreCompleto}, tengo ${this.edad}`)
    }
}

class Ucamper extends Persona{
    constructor(matricula){
        super()
        this.matricula = matricula;
    }
}

class Administrativos extends Persona{
    constructor(noEmpleado){
        super()
        this.noEmpleado = noEmpleado
    }
}

const ucamperUno = new Ucamper();
ucamperUno.nombreCompleto = "Kevin"
ucamperUno.edad = 27
ucamperUno.matricula = 12345
ucamperUno.saludar()

const adminUno = new Administrativos();
adminUno.nombreCompleto="María"
adminUno.edad= 27
adminUno.noEmpleado= 12345
adminUno.saludar()

/* const ucamper = new Persona();
ucamper.nombreCompleto = "Kevin Luciano"
ucamper.edad = 27
ucamper.saludar() */
