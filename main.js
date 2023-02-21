class Curso {
    constructor(nombre,modalidad, nivel, precio){

    this.nombre = nombre;
    this.modalidad = modalidad;
    this.nivel = nivel;
    this.precio = precio;
}
}
class Alumno {
    constructor(nombre, apellido, dni){

    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    
}
}

const alumnoGonza = new Alumno ("Gonzalo", "Bustos Isasa", 43081353)
const alumnoMaria = new Alumno ("Maria", "Madrededios", 33366699)
const alumnoLucia = new Alumno ("Lucia", "Merlo", 43505648)

const arrayAlumnos = [alumnoGonza, alumnoLucia, alumnoMaria];

const cursoIntro = new Curso ("Introduccion a la medicina estetica", "Teorica", "base", 150000);
const cursoFormacion = new Curso ("Formacion practica general", "Practica", "intermedio", 300000 )
const cursoRostro = new Curso ("Rejuvenecimiento facial", "Practica & teorica" , "avanzado", 750000);
const cursoCuerpo = new Curso ("Rejuvenecimiento corporal", "Practica & teorica", "avanzado", 750000);
const master = new Curso ("Master prescencial en rejuvenecimiento integral con la Dra. Isasa", "Practica", "profesional", 1000000);

const arrayCursos = [cursoIntro, cursoFormacion, cursoRostro, cursoCuerpo, master];

console.log(arrayCursos);

function menu(){
    alert("Bienvenido a la academia de medicina estetica de la Dra. Isasa");
    let opcion = parseInt (prompt("Seleccione una opcion: 0) Darse de alta como alumno. 1) Contratar curso Base. 2) Contratar curso Intermedio. 3) Contratar curso Avanzado. 4) Contratar curso Profesional. 5) Darse de baja como alumno. 6) Salir. "))
    return opcion;
}

function altaAlumno () {
    let nombre = prompt("Porfavor ingrese su nombre: ");
    let apellido = prompt("Porfavor ingrese su apellido: ");
    let dni = parseInt(prompt("Porfavor ingrese su DNI: "));
    let alumno = new Alumno (nombre, apellido, dni);
    arrayAlumnos.push (alumno)
    console.log(arrayAlumnos);
}

function bajaAlumno (){
    let dni = parseInt(prompt("Porfavor ingrese su dni: "));
    let alumno = arrayAlumnos.find(alumno => alumno.dni === dni);
    let indice = arrayAlumnos.indexOf(alumno);
    arrayAlumnos.splice(indice, 1);
    console.log(arrayAlumnos);
}

function cursoBase (){
    alert("Los cursos disponibles para este nivel son: " +  arrayCursos.find(curso => curso.nivel === "base"));

}
function cursoIntermedio (){
    alert("los cursos disponibles para este nivel son: " + arrayCursos.find(curso => curso.nivel === "intermedio"));
    
}
function cursoAvanzado (){
    alert("los cursos disponibles para este nivel son: " + arrayCursos.find(curso => curso.nivel === "avanzado"));
    
}
function cursoProfesional (){
    alert("los cursos disponibles para este nivel son: " + arrayCursos.find(curso => curso.nivel === "profesional"));
    
}
function salir (){
    alert("Gracias, vuelva pronto.")
}

let opcion = menu();

switch (opcion){
    case 0:
        altaAlumno();
        break;
    case 1:
        cursoBase();
        break;
    case 2:
        cursoIntermedio();
        break;
    case 3:
        cursoAvanzado();
        break;
    case 4:
        cursoProfesional();
        break;
    case 5:
        bajaAlumno();
        break;
    case 6:
        salir();
        break;
    default:
        alert("Opción incorrecta");
        break;

}
