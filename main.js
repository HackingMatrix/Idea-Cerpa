const obtenerTickets = document.getElementById('contenedorDatos')
const form = document.getElementById('forma')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mail = document.getElementById('exampleInputEmail1')
const precio = document.getElementById('pintarPrecio')
const hoy = new Date ('December 29, 2022')
const nov = new Date ("November 30, 2023")
const milisegundos = 86400000
 obtenerTickets.addEventListener('click', (e) => {
    
    const cantidadTicket = document.getElementById('cantidadBoleto')
    if (e.target.classList.contains('adios')) {
        cantidadTicket.innerHTML ++  
    }
    else if ((e.target.classList.contains('hola')) && (cantidadTicket.innerHTML > 0)){
        cantidadTicket.innerHTML --
    }
 })

const cantidadTicket = document.getElementById('cantidadBoleto')
console.log(cantidadTicket.innerHTML);

const precioboleto = () => {
 const eleccion = document.getElementById('inputGroupSelect01')
 
    eleccion.addEventListener('change', (e) => {
        if (e.target.value == 1) {
            const precio = document.getElementById('pintarPrecio')
            precio.value = tickets[3].precio * cantidadTicket.innerHTML
        }
        if (e.target.value == 2) {
            const precio = document.getElementById('pintarPrecio')
            precio.value = tickets[0].precio * cantidadTicket.innerHTML
        }
        let num = document.getElementById('pintarPrecio')
console.log(num.value);
    })
};

precioboleto ()

const modal = document.getElementById('botonComp')

 modal.addEventListener('click', (e) => {
    const parrafo = document.getElementById('modalCont')
    const div = document.createElement('div')
    div.innerHTML = `
    <span>Fecha: ${tickets[0].fecha}</span>
    <p>Precio: ${precio.value}</p>
    <span>Locación: ${tickets[0].locacion}</span></br>
    <span>Hora: ${tickets[0].hora}</span>
    <p>Cantidad: ${cantidadTicket.innerHTML}</p>
    <span>Nombre: ${nombre.value} ${apellido.value}</span></br>
    <span>Enviamos los boletos a: ${mail.value}</span>
    `
    const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    mail: mail.value,
    precio: precio.value,
    cantidad: cantidadTicket.innerHTML
}
obtenerDatos(datos)
console.log(datos);
guardarDatos(datos)
   parrafo.appendChild(div)
})

const obtenerDatos = (datos) => {
    nombre.value = `${datos.nombre}`
    apellido.value = `${datos.apellido}`
    mail.value = `${datos.mail}`
    precio.value = `${datos.precio}`
    cantidadTicket.innerHTML = `${datos.cantidad}`
    console.log(datos);
};

const guardarDatos = (datos) => {
    localStorage.setItem('datos', JSON.stringify(datos))
};

const obtenerStorage = () => {
    const datosStorage = JSON.parse(localStorage.getItem('datos'))
    return datosStorage
};

const pintarDatos = () => {
    if (localStorage.getItem('datos')) {
    const datosStorage = obtenerStorage()
    obtenerDatos(datosStorage)
}
};

// const recordarDatos = document.getElementById('exampleCheck1')
// recordarDatos.addEventListener('click', (e) => {
//     console.log(e.target.id);
// })
pintarDatos ()