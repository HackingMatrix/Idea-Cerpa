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
    
   parrafo.appendChild(div)
})