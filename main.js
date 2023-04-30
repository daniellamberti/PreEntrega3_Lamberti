
/*
class Estudiante {
    constructor(nombre,apellido,instrumento,teoria,armonia,ensamble,clasesExtras, faltas, promedioFinal){
        this.nombre = nombre;
        this.apellido = apellido;
        this.instrumento = [instrumento];
        this.teoria = [teoria];
        this.armonia = [armonia];
        this.ensamble = [ensamble];
        this.clasesExtras = clasesExtras;
        this.faltas = faltas;
        this.promedios = promedios;
        this.promedioFinal = promedioFinal;
    }
}
*/

    // Se resetean los valores acumulados en el Local Storage para permitir su posterior actualización

localStorage.setItem("Teoria",JSON.stringify([]));
localStorage.setItem("Armonia",JSON.stringify([]));
localStorage.setItem("Ensamble",JSON.stringify([]));
localStorage.setItem("Instrumento",JSON.stringify([]));

        // Se crean las variables necesarias para el formulario de ingreso nombre y apellido del usuario.

let nombreAlumno="";
let saludar="";
let saludoPlace=""
const botonInicio = document.getElementById("enviarSaludo");

botonInicio.addEventListener("click", ()=>{
    nombreAlumno = document.getElementById("input-nombre").value;
    saludar = document.createElement('p');
    saludar.innerHTML = "Hola " + nombreAlumno + ", bienvenido. Ingresa las notas de todos los examenes rendidos";
    saludoPlace = document.getElementById('saludar');
    saludoPlace.appendChild(saludar);
})

        // Se vinculan los formularios que se usarán para almacenar la información brindada por el usuario:

const formInst = document.getElementById("formInst");
const formTeor = document.getElementById("formTeor");
const formArm = document.getElementById("formArm");
const formEns = document.getElementById("formEns");


                /* =================  F  U  N  C  I  O  N  E  S    ================= */

        /* Se crea una FUNCIÓN para obtener el promedio de las notas en cada asignatura. 
                    Se usará la misma función en las 4 materias.  */

function promediosMaterias(materia,cantExam) {
    prom = 0;
    suma = 0;

    for(let i = 0; i < materia.length; i++) {
        suma = materia[i] + suma;
    }
    prom = suma / cantExam;
    return prom.toFixed(2);
}

            /* Se crea una FUNCIÓN para determinar si el alumno aprobó o no cada materia.
                    Es una misma función que se utilizará en las 4 Asignaturas. */

function aprobadoReprobado(asignatura,notafinal,lugar) {
    if(notafinal >=6) {
    let aprob = document.createElement('p');
    aprob.innerHTML = `El promedio de tus notas de ${asignatura} es igual o mayor que 6 por lo tanto
    tenes esta materia aprobada`;
    let aprobPlace = document.getElementById(lugar);
    aprobPlace.appendChild(aprob);
    }
    else {
        let aprob = document.createElement('p');
    aprob.innerHTML = `El promedio de tus notas de ${asignatura} es menor que 6 por lo tanto
    tenes que recursar la materia o materias reprobadas`;
    let aprobPlace = document.getElementById(lugar);
    aprobPlace.appendChild(aprob);
}
}

// Se crea una FUNCIÓN para darle al usuario la devolución del promedio de los exámenes de determinada materia.

function DevolPromedioMateria(var1,var2,promedioAsig,botAsig,asignatura) {
    var1 = document.createElement('p');
    var1.innerHTML = "El promedio de tus notas de " + asignatura + " es " + promedioAsig;
    var2 = document.getElementById(botAsig);
    var2.appendChild(var1);
}

            // Comenzamos a recopilar los datos del usuario via FORMULARIOS.

            // Se crean las variables para las notas de los exámenes de Instrumento.

let exInst1;
let exInst2;
let exInst3;

let notasInst = [];
let notaFinalInst ="";

             // Se evita el comportamiento "default" del formulario de Instrumento

formInst.addEventListener("submit", (e)=>{
    e.preventDefault();

                 // Se asignan los valores que ingresara el usuario

    exInst1 = (document.getElementById("instrumento1").value);
    exInst2 = (document.getElementById("instrumento2").value);
    exInst3 = (document.getElementById("instrumento3").value);

    console.log(exInst1);
    console.log(exInst2);
    console.log(exInst3);

    exInst1 = parseFloat(exInst1);
    exInst2 = parseFloat(exInst2);
    exInst3 = parseFloat(exInst3);

    notasInst[0] = exInst1;
    notasInst[1] = exInst2;
    notasInst[2] = exInst3;

    // Se guarda el array que contiene todas las notas de los exámenes de Instrumento en el Local Storage

    localStorage.setItem("Instrumento",JSON.stringify(notasInst));

    // Se revisa con un console.log que los datos ingresados por el usuario se almacenaron correctamente.

    console.log(`Notas de Instrumento son ${notasInst};`);


notaFinalInst = (exInst1 + exInst2 + exInst3) / 3;

pInst = "";
instPlace = "";

        // Se da al usuario la devolución del promedio de las notas ingresadas en la asignatura en cuestión.

DevolPromedioMateria(pInst,instPlace,notaFinalInst,"botonInstAqui","Instrumento");

        // Se le confirma al usuario si, segun el promedio obtenido en la materia, la aprobó o no.

aprobadoReprobado("Instrumento",notaFinalInst,"aprobAquiInst");

                            //Reseteamos el form al mandar los datos
    formInst.reset();

})

                // Se crean las variables para las notas de los examenes de Teoria.

let exTeor1;
let exTeor2;
let exTeor3;
let exTeor4;
let exTeor5;

let notasTeor = [];
let notaFinalTeor ="";

                // Se evita el comportamiento "default" del formulario de Teoría

formTeor.addEventListener("submit", (e)=>{
    e.preventDefault();

            // Se asignan los valores ingresados por el usuario a ciertas const

    exTeor1 = document.getElementById("teoria1").value;
    exTeor2 = document.getElementById("teoria2").value;
    exTeor3 = document.getElementById("teoria3").value;
    exTeor4 = document.getElementById("teoria4").value;
    exTeor5 = document.getElementById("teoria5").value;

    console.log(exTeor1);
    console.log(exTeor2);
    console.log(exTeor3);
    console.log(exTeor4);
    console.log(exTeor5);

    exTeor1 = parseFloat(exTeor1);
    exTeor2 = parseFloat(exTeor2);
    exTeor3 = parseFloat(exTeor3);
    exTeor4 = parseFloat(exTeor4);
    exTeor5 = parseFloat(exTeor5);


    notasTeor[0] = exTeor1;
    notasTeor[1] = exTeor2;
    notasTeor[2] = exTeor3;
    notasTeor[3] = exTeor4;
    notasTeor[4] = exTeor5;

    // Se guarda el array que contiene todas las notas de los exámenes de Teoría en el Local Storage.

    localStorage.setItem("Teoria",JSON.stringify(notasTeor));

     // Se revisa con un console.log que los datos ingresados por el usuario se almacenaron correctamente.

    console.log(`Notas de Teoria son ${notasTeor};`);

    notaFinalTeor = (exTeor1 + exTeor2 + exTeor3 + exTeor4 + exTeor5) / 5;

pTeor = "";
teorPlace = "";

    // Se da al usuario la devolución del promedio de las notas ingresadas en la asignatura en cuestión.

DevolPromedioMateria(pTeor,teorPlace,notaFinalTeor,"botonTeorAqui","Teoria");

        // Utilizando la FUNCION aprobadoReprobadoTeor se le confirma al usuario si aprobó en la materia Teoria.

    aprobadoReprobado("Teoria",notaFinalTeor,"aprobAquiTeor");

                                    //Reseteamos el form al mandar los datos
    formTeor.reset();

})

                    // Se crean las variables para las notas de los examenes de Armonia.

let exArm1;
let exArm2;
let exArm3;
let exArm4;

let notasArm = [];
let notaFinalArm ="";

                // Se evita el comportamiento "default" del formulario de Armonia


formArm.addEventListener("submit", (e)=>{
    e.preventDefault();

                // Se asignan los valores ingresados por el usuario a ciertas const

    exArm1 = document.getElementById("armonia1").value;
    exArm2 = document.getElementById("armonia2").value;
    exArm3 = document.getElementById("armonia3").value;
    exArm4 = document.getElementById("armonia4").value;

    console.log(exArm1);
    console.log(exArm2);
    console.log(exArm3);
    console.log(exArm4);

    exArm1 = parseFloat(exArm1);
    exArm2 = parseFloat(exArm2);
    exArm3 = parseFloat(exArm3);
    exArm4 = parseFloat(exArm4);

    notasArm[0] = exArm1;
    notasArm[1] = exArm2;
    notasArm[2] = exArm3;
    notasArm[3] = exArm4;

    // Se guarda el array que contiene todas las notas de los exámenes de Armonía en el Local Storage

localStorage.setItem("Armonia",JSON.stringify(notasArm));

     // Se revisa con un console.log que los datos ingresados por el usuario se almacenaron correctamente.

console.log(`Notas de Armonia son ${notasArm};`);

notaFinalArm = (exArm1 + exArm2 + exArm3 + exArm4) / 4;

pArm = "";
armPlace = "";

    // Se da al usuario la devolución del promedio de las notas ingresadas en la asignatura en cuestión.

DevolPromedioMateria(pArm,armPlace,notaFinalArm,"botonArmAqui","Armonia");

    // Utilizando la FUNCION aprobadoReprobadoArm se le confirma al usuario si aprobó en la materia Armonia.

    aprobadoReprobado("Armonia",notaFinalArm,"aprobAquiArm");

                            //  Reseteamos el form al mandar los datos
    formArm.reset();

})

                // Se crean las variables para las notas de los examenes de Ensamble.

let exEns1;
let exEns2;
let exEns3;

let notasEns = [];
let notaFinalEns ="";

                // Se evita el comportamiento "default" del formulario de Ensamble.

formEns.addEventListener("submit", (e)=>{
    e.preventDefault();

                // Se asignan los valores ingresados por el usuario a ciertas const

    exEns1 = document.getElementById("ensamble1").value;
    exEns2 = document.getElementById("ensamble2").value;
    exEns3 = document.getElementById("ensamble3").value;

    console.log(exEns1);
    console.log(exEns2);
    console.log(exEns3);

    exEns1 = parseFloat(exEns1);
    exEns2 = parseFloat(exEns2);
    exEns3 = parseFloat(exEns3);

    notasEns[0] = exEns1;
    notasEns[1] = exEns2;
    notasEns[2] = exEns3;

    // Se guarda el array que contiene todas las notas de los exámenes de Ensamble en el Local Storage

localStorage.setItem("Ensamble",JSON.stringify(notasEns));

    // Se revisa con un console.log que los datos ingresados por el usuario se almacenaron correctamente.

    console.log(`Notas de Ensamble son ${notasEns};`)

    notaFinalEns = (exEns1 + exEns2 + exEns3) / 3;

pEns = "";
ensPlace = "";

DevolPromedioMateria(pEns,ensPlace,notaFinalEns,"botonEnsAqui","Ensamble");

    // Utilizando la FUNCION aprobadoReprobadoEns se le confirma al usuario si aprobó en la materia Ensamble.

    aprobadoReprobado("Ensamble",notaFinalEns,"aprobAquiEns");


                        //  Reseteamos el form al mandar los datos
    formEns.reset();
})

            // Se informa al usuario sobre todos los promedios obtenidos en cada Materia.

const boton = document.getElementById("verPromedios");
    boton.addEventListener("click", ()=>{

    let ul = document.createElement('ul');
    ul.textContent = "";
    listadoPromedios.appendChild(ul);

    let li = document.createElement('li');
    li.textContent = "Instrumento: " + notaFinalInst;
    listadoPromedios.appendChild(li);

    li = document.createElement('li');
    li.textContent = "Teoria: " + notaFinalTeor;
    listadoPromedios.appendChild(li);

    li = document.createElement('li');
    li.textContent = "Armonia: " + notaFinalArm;
    listadoPromedios.appendChild(li);

    li = document.createElement('li');
    li.textContent = "Ensamble: " + notaFinalEns;
    listadoPromedios.appendChild(li);
})

    // Se informa al usuario sobre las notas de todos los exámenes ingresados de las 4 materias rendidas.

const botonNotas = document.getElementById("verNotas");
    botonNotas.addEventListener("click", ()=>{

    let ul = document.createElement('ul');
    ul.textContent = "";
    listadoNotas.appendChild(ul);

    let li = document.createElement('li');
    li.textContent = "Instrumento: " + notasInst;
    listadoNotas.appendChild(li);

    li = document.createElement('li');
    li.textContent = "Teoria: " + notasTeor;
    listadoNotas.appendChild(li);

    li = document.createElement('li');
    li.textContent = "Armonia: " + notasArm;
    listadoNotas.appendChild(li);

    li = document.createElement('li');
    li.textContent = "Ensamble: " + notasEns;
    listadoNotas.appendChild(li);
})

let notaPromFinal = 0;
notaPromFinal = (notaFinalInst + notaFinalTeor + notaFinalArm + notaFinalEns) / 4;
console.log(notaPromFinal);


                // Implementación del uso de Local Storage para futuro procesamiento



