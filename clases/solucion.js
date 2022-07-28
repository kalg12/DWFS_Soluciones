/* Declaración de una clase */
class Persona {
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar (){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

class Alumno extends Persona {
    constructor(matricula, turno, ciclo_escolar){
        super();
        this.matricula = matricula;
        this.turno = turno;
        this.ciclo_escolar = ciclo_escolar;
    }
}

class Profesor extends Persona {
    constructor(materia, turno, ciclo_escolar){
        super();
        this.materia = materia;
        this.turno = turno;
        this.ciclo_escolar = ciclo_escolar;
    }
}

const alumnoUno = new Alumno
alumnoUno.nombre = "Kevin";
alumnoUno.edad = 27
alumnoUno.sexo = "Mascullino";
alumnoUno.matricula = "00303030";
alumnoUno.turno = "Matutino";
alumnoUno.ciclo_escolar = "202240";
alumnoUno.saludar();

const docenteUno = new Profesor
docenteUno.nombre = "Juan";
docenteUno.edad = 27
docenteUno.sexo = "Mascullino";
docenteUno.materia = "Matematicas";
docenteUno.turno = "Matutino";
docenteUno.ciclo_escolar = "202240";
docenteUno.saludar();