const modal = document.getElementById('modalCont')
const triggModal = document.getElementById('??')
const elementoTd = document.getElementById('funciona')
const fecha = document.getElementById('fecha1')
const mes = document.getElementById('mes1')
const locacion = document.getElementById('locacion1')


const pintarFechas = async () => {

    const info = await controllerTickets()
    console.log(info);

    fecha.innerText = `${info[0].dia}`
    mes.innerText = `${info[0].fecha}`
    locacion.innerText = `${info[0].locacion}`

};

pintarFechas ()

const datosStorage = JSON.parse(localStorage.getItem('datos'))


const pintarDatos = async () => {

    const info = await controllerTickets()
    console.log(info);


    if (localStorage.getItem('datos')) {
    modal.innerText = `Fecha: ${info[0].fecha}
    Precio: ${datosStorage.precio}
    Locación: ${info[0].locacion}
    Hora: ${info[0].hora}
    Cantidad: ${datosStorage.cantidad} boletos
    Nombre: ${datosStorage.nombre} ${datosStorage.apellido}
    Enviamos los boletos a: ${datosStorage.mail}
    `
    const span = document.createElement('span')
    span.classList.add("ms-3")
    span.innerHTML = `<button id="comprar1" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver boletos</button></a>
    </td>`
    elementoTd.appendChild(span)
}
};

console.log(elementoTd);
console.log(datosStorage);

pintarDatos()