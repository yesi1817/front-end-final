//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let medicos=[
    {
        id: 10,
        nombre:"Silvestre Dangond",
        matriculaProfesional:"Indefinido",
        especialidad:"Dentista",
        salario:2000000,
        ips:"SURA",
        correo:"Silve@gmail.com",
        telefono:"+57 229430349",
        direccionConsultorio:"Calle 2b #4a",
        finDeSemanaDisponible:true
    },
    {
        id:11,
        nombre:"Peter Manjarres",
        matriculaProfesional: "indefinido",
        especialidad: "Pediatra",
        salario: 1800000,
        ips: "Colpatria",
        correo: "Petercito@gmail.com",
        telefono: "+57 321654987",
        direccionConsultorio: "Calle 12 #5-45",
        finDeSemanaDisponible: true
    },
    {
        id: 12,
        nombre: "Diomedes Diaz",
        matriculaProfesional: "indefinido",
        especialidad: "general",
        salario: 2200000,
        ips: "SaludTotal",
        correo: "cacique1234@gmail.com",
        telefono: "+57 312358792",
        direccionConsultorio: "Carrera 15 #8-23",
        finDeSemanaDisponible: false
    },
    {
        id: 13,
        nombre: "Mono Zabaleta",
        matriculaProfesional: "indefinido",
        especialidad: "Dermatólogo",
        salario: 2500000,
        ips: "Sanitas",
        correo: "Monismo@gmail.com",
        telefono: "+57 300456789",
        direccionConsultorio: "Avenida 9 #17-11",
        finDeSemanaDisponible: true
    },
    {
        id: 14,
        nombre: "Felipe Pelaez",
        matriculaProfesional: "indefinido",
        especialidad: "Psicólogo",
        salario: 1700000,
        ips: "Coomeva",
        correo: "Pipe@gmail.com",
        telefono: "+57 320112233",
        direccionConsultorio:"Calle 45 #7-88",
        finDeSemanaDisponible:true
    },
    {
        id: 15,
        nombre: "Jorge Oñate",
        matriculaProfesional: "indefinido",
        especialidad: "Oftalmólogo",
        salario: 2300000,
        ips: "EPSSur",
        correo: "GeorgeOña@gmail.com",
        telefono: "+57 315478900",
        direccionConsultorio: "Carrera 28 #4-65",
        finDeSemanaDisponible: false
    }
];

//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
medicos.forEach(function(medico){
    console.log(medico);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=medico.nombre

    let matriculaProfesional=document.createElement("p");
    matriculaProfesional.textContent=medico.matriculaProfesional

    let especialidad=document.createElement("p");
    especialidad.textContent=medico.especialidad

    let salario=document.createElement("p");
    salario.textContent=medico.salario

    let ips=document.createElement("p");
    ips.textContent=medico.ips

    let correo=document.createElement("p");
    correo.textContent=medico.correo

    let telefono=document.createElement("p");
    telefono.textContent=medico.telefono

    let direccionConsultorio=document.createElement("p");
    direccionConsultorio.textContent=medico.direccionConsultorio
    
    let finDeSemanaDisponible=document.createElement("p");
    finDeSemanaDisponible.textContent=medico.finDeSemanaDisponible

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(matriculaProfesional);
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(salario);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(correo);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(direccionConsultorio);
    tarjeta.appendChild(finDeSemanaDisponible);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});