const obtenerTickets = document.getElementById('contenedorDatos')
const form = document.getElementById('forma')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mail = document.getElementById('exampleInputEmail1')
const precio = document.getElementById('pintarPrecio')
const eleccion = document.getElementById('inputGroupSelect01')
const cantidadTicket = document.getElementById('cantidadBoleto')
const botAdd = document.querySelector('.adios')
const botLess = document.querySelector('.hola')
const vip = document.getElementById('')
const checker = document.querySelector('.form-check-input')
const btnComp = document.querySelector('#botonComp')
const homero = document.getElementById('homero')

let contador = 1
console.log(homero);
botAdd.addEventListener('click', () => {
    contador++
    // console.log(precio.value);
    // console.log(cantidadTicket.innerText);
    actualizarContador()
    precio.value = (precio.value/(cantidadTicket.innerText-1))*cantidadTicket.innerText
})
    
botLess.addEventListener('click', () => {
    if (contador > 1) {
    contador--
    actualizarContador()
    precio.value = (precio.value/(contador+1))*contador
       
    } 
    console.log(cantidadTicket.innerText);
})
    
const actualizarContador = () => {
    cantidadTicket.innerText = contador
}

eleccion.addEventListener('change', (e) => {
        if (e.target.value == 1) {
            precio.value = tickets[3].precio * cantidadTicket.innerText
        }
        if (e.target.value == 2) {
            precio.value = tickets[0].precio * cantidadTicket.innerText
        }
console.log(precio.value);

    })

const validarFormulario = (e) =>  {
    e.preventDefault()
    const name = nombre.value
    const email = mail.value
    const lastName = apellido.value
    const costo = precio.value
    const monto = cantidadTicket.innerHTML
 
}

form.addEventListener('submit', validarFormulario)

btnComp.addEventListener('click', (e) => {
    if ((precio.value > 0) && (nombre.value !="") && (mail.value !="")) {
    setTimeout(function () {
        window.location.href = '../index.html'
    },2000)
    
    Swal.fire({
        icon: 'success',
        title:'Gracias por comprar',
        text: 'Redireccionando...',
        timer:2000,
        timerProgressBar: true,
        showConfirmButton: false
    })    
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
    } 
    else if(precio.value <= 0){
        Swal.fire({
        
            icon: 'error',
            title:'Algo salió mal',
            text: 'Revisa los datos introducidos',
            timer:2000,
            timerProgressBar: true,
            showConfirmButton: false
        })    
    }
})


//  modal.addEventListener('click', () => {
//     const parrafo = document.getElementById('modalCont')
//     const div = document.createElement('div')
//     div.innerHTML = `
//     <span>Fecha: ${tickets[0].fecha}</span>
//     <p>Precio: ${precio.value}</p>
//     <span>Locación: ${tickets[0].locacion}</span></br>
//     <span>Hora: ${tickets[0].hora}</span>
//     <p>Cantidad: ${cantidadTicket.innerHTML}</p>
//     <span>Nombre: ${nombre.value} ${apellido.value}</span></br>
//     <span>Enviamos los boletos a: ${mail.value}</span>
//     `
//    parrafo.appendChild(div)
// })

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
    const div = document.createElement('div')
    div.innerHTML=`<button id="comprar1" type="button" class="btn btn-warning">Comprar</button></a>
    </td>`
    const datosStorage = obtenerStorage()
    obtenerDatos(datosStorage)
}
};



// // const recordarDatos = document.getElementById('exampleCheck1')
// // recordarDatos.addEventListener('click', (e) => {
// //     console.log(e.target.id);
// // })
// pintarDatos ()