const modal = document.getElementById('modalCont')
const triggModal = document.getElementById('??')
const elementoTd = document.getElementById('funciona')



const datosStorage = JSON.parse(localStorage.getItem('datos'))


const pintarDatos = () => {
    if (localStorage.getItem('datos')) {
    modal.innerText = `Fecha: ${tickets[0].fecha}
    Precio: ${datosStorage.precio}
    Locación: ${tickets[0].locacion}
    Hora: ${tickets[0].hora}
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