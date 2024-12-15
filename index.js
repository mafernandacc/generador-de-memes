// SECCIÓN PARA ABRIR BARRAS LATERALES //

// Guardar botones en constantes
const $botonImg = document.getElementById('botonConfiguracionImagen');
const $botonTexto = document.getElementById('botonConfiguracionTexto');
const $contenedorAsideImg = document.getElementById('contenedorAsideImg');
const $contenedorAsideTexto = document.getElementById('contenedorAsideTexto');

// Función para abrir y cerrar contenedores de configuración
function alternarAside($mostrar, $ocultar) {
  $mostrar.style.display = 'block';
  $ocultar.style.display = 'none';
}

// Eventos //
// Mostrar configuración de imagen y ocultar la de texto
$botonImg.addEventListener('click', () => {
  alternarAside($contenedorAsideImg, $contenedorAsideTexto);
});

// Mostrar configuración de texto y ocultar la de imagen
$botonTexto.addEventListener('click', () => {
  alternarAside($contenedorAsideTexto, $contenedorAsideImg);
});

// Función para configuración inicial: mostrar configuración de imagen 
document.addEventListener("DOMContentLoaded", () => {
  alternarAside($contenedorAsideImg, $contenedorAsideTexto);
});

// SECCIÓN BARRA LATERAL IMG //

// Guardar elementos en constantes
const $campoUrl = document.querySelector("#urlImg"); 
const $botonCargar = document.querySelector("#cargarImg"); 
const $imagenMeme = document.querySelector("#imagenMeme");

// Evento click para agregar imagen 
$botonCargar.addEventListener("click", () => {
  const url = $campoUrl.value.trim();
  if (url) {
    $imagenMeme.src = `${url}`; 
    $imagenMeme.alt = `Meme cargado desde ${url}`;
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});

// FONDO //

// Guardar elementos en constantes
const $colorFondoInput = document.querySelector("#colorFondoImg");
const $contenedorMeme = document.querySelector("#meme");
const $blendModeSelect = document.querySelector("#blendMode");

// Evento seleccionar color
$colorFondoInput.addEventListener("input", () => {
  const colorSeleccionado = $colorFondoInput.value;
  $contenedorMeme.style.backgroundColor = `${colorSeleccionado}`;
});

// Evento combinar color e imagen 
$blendModeSelect.addEventListener("change", function() {
  const valorSeleccionado = $blendModeSelect.value;
  $imagenMeme.style.mixBlendMode = valorSeleccionado;
});


//FILTROS

// Filtros iniciales
const filtroInicial = {
  brillo: 1,
  opacidad: 1,
  contraste: 100,
  desenfoque: 0,
  escalaGrises: 0,
  sepia: 0,
  hue: 0,
  saturado: 100,
  negativo: 0
};

// Guardar inputs en constantes 
const $brilloImg = document.querySelector("#brilloImg");
const $opacidadImg = document.querySelector("#opacidadImg");
const $contrasteImg = document.querySelector("#contrasteImg");
const $desenfoqueImg = document.querySelector("#desenfoqueImg");
const $escalaImg = document.querySelector("#escalaImg");
const $sepiaImg = document.querySelector("#sepiaImg");
const $hueImg = document.querySelector("#hueImg");
const $saturadoImg = document.querySelector("#saturadoImg");
const $negativoImg = document.querySelector("#negativoImg");


// Valores iniciales de los inputs
$brilloImg.value = filtroInicial.brillo;
$opacidadImg.value = filtroInicial.opacidad;
$contrasteImg.value = filtroInicial.contraste;
$desenfoqueImg.value = filtroInicial.desenfoque;
$escalaImg.value = filtroInicial.escalaGrises;
$sepiaImg.value = filtroInicial.sepia;
$hueImg.value = filtroInicial.hue;
$saturadoImg.value = filtroInicial.saturado;
$negativoImg.value = filtroInicial.negativo;

// Minimos, maximos e intervalos
$brilloImg.min = 0;
$brilloImg.max = 1;
$brilloImg.step = 0.1;
$brilloImg.value = 1;  // Valor inicial: 1

$opacidadImg.min = 0;
$opacidadImg.max = 1;
$opacidadImg.step = 0.1;
$opacidadImg.value = 1;  // Valor inicial: 1

$contrasteImg.min = 100;
$contrasteImg.max = 1000;
$contrasteImg.step = 1;
$contrasteImg.value = 100;  // Valor inicial: 100%

$desenfoqueImg.min = 0;
$desenfoqueImg.max = 10;
$desenfoqueImg.step = 0.1;
$desenfoqueImg.value = 0;  // Valor inicial: 0px

$escalaImg.min = 0;
$escalaImg.max = 100;
$escalaImg.step = 1;
$escalaImg.value = 0;  // Valor inicial: 0%

$sepiaImg.min = 0;
$sepiaImg.max = 100;
$sepiaImg.step = 1;
$sepiaImg.value = 0;  // Valor inicial: 0%

$hueImg.min = 0;
$hueImg.max = 359;
$hueImg.step = 1;
$hueImg.value = 0;  // Valor inicial: 0deg

$saturadoImg.min = 100;
$saturadoImg.max = 1000;
$saturadoImg.step = 10;
$saturadoImg.value = 100;  // Valor inicial: 100%

$negativoImg.min = 0;
$negativoImg.max = 1;
$negativoImg.step = 0.1;
$negativoImg.value = 0;  // Valor inicial: 0

// Función para actualizar los filtros de la imagen
function actualizarFiltro() {
  $imagenMeme.style.filter = `
    brightness(${ $brilloImg.value })
    opacity(${ $opacidadImg.value })
    contrast(${ $contrasteImg.value }%)
    blur(${ $desenfoqueImg.value }px)
    grayscale(${ $escalaImg.value }%)
    sepia(${ $sepiaImg.value }%)
    hue-rotate(${ $hueImg.value }deg)
    saturate(${ $saturadoImg.value }%)
    invert(${ $negativoImg.value })
  `;
}

//Evento para actulizar la imagen 
$brilloImg.addEventListener("input", actualizarFiltro);
$opacidadImg.addEventListener("input", actualizarFiltro);
$contrasteImg.addEventListener("input", actualizarFiltro);
$desenfoqueImg.addEventListener("input", actualizarFiltro);
$escalaImg.addEventListener("input", actualizarFiltro);
$sepiaImg.addEventListener("input", actualizarFiltro);
$hueImg.addEventListener("input", actualizarFiltro);
$saturadoImg.addEventListener("input", actualizarFiltro);
$negativoImg.addEventListener("input", actualizarFiltro);

// Restablecer filtros 
const $restablecerFiltros = document.querySelector("#restablecerFiltros");

$restablecerFiltros.addEventListener("click", () => {

  $brilloImg.value = filtroInicial.brillo;
  $opacidadImg.value = filtroInicial.opacidad;
  $contrasteImg.value = filtroInicial.contraste;
  $desenfoqueImg.value = filtroInicial.desenfoque;
  $escalaImg.value = filtroInicial.escalaGrises;
  $sepiaImg.value = filtroInicial.sepia;
  $hueImg.value = filtroInicial.hue;
  $saturadoImg.value = filtroInicial.saturado;
  $negativoImg.value = filtroInicial.negativo;

  actualizarFiltro();
});