
// SECCIÓN PARA ABRIR BARRAS LATERALES//

// Guardar botones en constante
const botonImg = document.getElementById('botonConfiguracionImagen');
const botonTexto = document.getElementById('botonConfiguracionTexto');
const contenedorAsideImg = document.getElementById('contenedorAsideImg');
const contenedorAsideTexto = document.getElementById('contenedorAsideTexto');

// Función para abrir y cerrar conteendores de configuración
function alternarAside(mostrar, ocultar) {
  mostrar.style.display = 'block';
  ocultar.style.display = 'none';
}

// Eventos //
// Mostrar configuración de imagen y ocultar la de texto
botonImg.addEventListener('click', () => {
  alternarAside(contenedorAsideImg, contenedorAsideTexto);
});

// Mostrar configuración de texto y ocultar la de imagen
botonTexto.addEventListener('click', () => {
  alternarAside(contenedorAsideTexto, contenedorAsideImg);
});

// Función para configuración inicial mostrar configuración imagen 
alternarAside(contenedorAsideImg, contenedorAsideTexto); 
