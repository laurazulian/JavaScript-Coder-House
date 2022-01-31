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
      alert(`Los turnos disponobles son ${i}`);
      i++;
    }
}
turno()

let especialidades = ["Clínica médica", "Ginecología", "Salud Mental", "Cardiología", "Obstetricia"]
especialidades.push (`Nutrición`)
alert (`Estas son las especialidades disponibles:`)
for (let especialidad of especialidades) {
    alert (`${especialidad}`)
}
