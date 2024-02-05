

const lista = document.querySelector('.menu1')
const menu = document.querySelector('#menu')

menu.addEventListener('click',()=>{

  if (lista.classList.contains('cerrar')) {
    // Si ya está cerrado, abrir el menú
    lista.classList.remove('cerrar');
    lista.innerHTML = `
    <li><a href="Electrodomesticos.html">Electrodomesticos</a></li>
    <li><a href="vehiculos.html">Vehiculos</a></li>
    <li><a href="Hogar y Muebles.html">Hogar</a></li>
    <li><a href="Accesorios para Vehiculos.html">Accesorios para Vehiculos</a></li>
    <li><a href="Tecnologia.html">Tecnologia</a></li>
    <li><a href="Herramientas.html">Herramientas</a></li>
    <li><a href="Inmuebles.html">Inmuebles</a></li>
    <li><a href="Construccion.html">Construccion</a></li>
    <li><a href="BellezayCuidadoPersonal.html">Belleza y Cuidado Personal</a></li>
    <li><a href="Juegosyjuguetes.html">Juegos y Juguetes</a></li>
    `;
  } else {
    // Si está abierto, cerrar el menú
    lista.classList.add('cerrar');
    lista.innerHTML = '';
  }
  

})




