
//Ejemplo con fragment para evitar el reflow
const lista = document.querySelector ('.lista')
let elementos = ["Descargar estudios", "Consulta virtual", "Historia clínica"]
const fragment = document.createDocumentFragment ()
elementos.forEach (item => {
    const li = document.createElement ('li')
    li.textContent = item
    fragment.appendChild (li)
})
lista.appendChild (fragment)

//Ejemplo de evento con clic
const btnturno = document.querySelector ('#Pedir')
btnturno.addEventListener ('click' , () => {
    console.log ("Estoy haciendo clic")
})



/*const lista = document.querySelector ('.lista');
const li = document.createElement ('li');
li.textContent = "Descargar estudios"; 
lista.appendChild (li)*/


//Ejemplo con bucle pero sin fragment 
/*elementos.forEach (item => {
    const li = document.createElement ('li')
    li.textContent = item
    lista.appendChild (li)
})*/