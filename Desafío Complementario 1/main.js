alert ("Hola, ingresá estos datos para tu turno");
for (let index = 1; index <= 10; index++) {
    let ingreseNombre = prompt ("Ingresá tu nombre");
    let ingreseApellido = prompt ("Ingresá tu apellido");
    if (index === 3) {
        alert(`El turno en la posicion ${index} no esta disponible`);
    } else if(index === 5){
        break
    }else{
        alert ( `Su turno es ${index} ${ingreseNombre} ${ingreseApellido}`);
    }
}
