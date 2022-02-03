let sacarturno = confirm ("¿Desea sacar un turno médico?")
function datos(){
    let nombre = prompt (`Ingresa tu nombre`);
    let apellido = prompt (`Ingresa tu apellido`);
    alert (`Hola ${nombre} ${apellido}`);
}
datos ()

function obrasocial (){
let coberturamedica = prompt (`¿Cuál es tu obra social`)
        switch (coberturamedica){
            case "Osde":
                alert (`Puedes continuar`);
                break;
            case "Osep":
                alert (`Puedes continuar`);
                break;
            default:
                alert (`No recibimos tu obra social`)
        }
    }
obrasocial ()

function turno (){
    let i = 0;
    while (i < 5 ) { 
      alert(`Este es el orden de los turnos ${i}`);
      i++;
    }
}
turno()

function elegirturno (){
    let turnoelegido = prompt ("Por favor seleccione su turno")
    switch (turnoelegido){
        case "1":
            alert (`Ese turno está disponible`);
            break;
        case "2", "3", "4": 
            alert (`Ese turno no está disponible, por favor seleccione otro`);
        case "5": 
        alert (`Ese turno está disponible`);
        break;
        default:
        alert (`No hay más turnos disponibles`);
    }
}
elegirturno ()

/*Acá dejo comentado esto porque funcionaba y está lindo. 
let especialidades = ["Clínica médica", "Ginecología", "Salud Mental", "Cardiología", "Obstetricia"]
especialidades.push (`Nutrición`)
especialidades.sort
alert (`Estas son las especialidades disponibles:`)
for (let especialidad of especialidades) {
    alert (`${especialidad}`)
}*/

let especialidades = [
    {name : "Salud Mental",
    doctores:[
        {
        name : "Juan Pablo Pérez",
        disponibilidad: "Lunes, martes y miércoles"
        },
        {name: "Miguel Fernández",
        disponibilidad: "Jueves y viernes"
            }
        ]
    },
    {name: "Clínica médica",
    doctores: [
        { name: "Florencia Díaz",
        disponibilidad: "Martes y jueves"
        },
        { name: "Laura Gonzalez",
        disponibilidad: "Lunes y miércoles"
        }
    ]
}
]
let saludMental = especialidades.filter ( especialidad => especialidad.name === "Salud Mental")
console.log(saludMental)
