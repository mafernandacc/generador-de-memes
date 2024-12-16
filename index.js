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



//SECCIÓN BARRA LATERAL TXT//

//ESCRIBIR TEXTO
//Guardar en variables let 
let $inputTextoSuperior = document.getElementById('botonTextoSuperior');
let $textoMemeSuperior = document.getElementById('textoMemeSuperior');

let $inputTextoInferior = document.getElementById('botonTextoInferior');
let $textoMemeInferior = document.getElementById('textoMemeInferior');

//Funciones
$inputTextoSuperior.addEventListener('input', function() {
  $textoMemeSuperior.textContent = $inputTextoSuperior.value;
});

$inputTextoInferior.addEventListener('input', function() {
  $textoMemeInferior.textContent = $inputTextoInferior.value;
});

//SIN TEXTO 
document.addEventListener('DOMContentLoaded', function() {
  // Guardar elmentos
  let $inputTextoSuperior = document.getElementById('botonTextoSuperior');
  let $textoMemeSuperior = document.getElementById('textoMemeSuperior');
  let $checkboxSinTextoSuperior = document.getElementById('botonSinTextoSuperior');

  let $inputTextoInferior = document.getElementById('botonTextoInferior');
  let $textoMemeInferior = document.getElementById('textoMemeInferior');
  let $checkboxSinTextoInferior = document.getElementById('botonSinTextoInferior');

  // Evento agregar texto superior
  $inputTextoSuperior.addEventListener('input', function() {
    if ($textoMemeSuperior) {
      $textoMemeSuperior.textContent = $inputTextoSuperior.value;
    }
  });

  //Evento agregar textro inferior
  $inputTextoInferior.addEventListener('input', function() {
    if ($textoMemeInferior) {
      $textoMemeInferior.textContent = $inputTextoInferior.value;
    }
  });

  // Evento seleccionar el checkbox para eliminar el texto superior
  $checkboxSinTextoSuperior.addEventListener('change', function() {
    if ($checkboxSinTextoSuperior.checked) {
      if ($textoMemeSuperior) {
        $textoMemeSuperior.remove();
        $textoMemeSuperior = null;
      }
    } else {
      if (!$textoMemeSuperior) {
        $textoMemeSuperior = document.createElement('p');
        $textoMemeSuperior.id = 'textoMemeSuperior';
        $textoMemeSuperior.className = 'textoMeme';
        $textoMemeSuperior.textContent = $inputTextoSuperior.value;
        document.getElementById('meme').prepend($textoMemeSuperior);
      }
    }
  });

  // Evento seleccionar el checkbox para eliminar el texto inferior
  $checkboxSinTextoInferior.addEventListener('change', function() {
    if ($checkboxSinTextoInferior.checked) {
      if ($textoMemeInferior) {
        $textoMemeInferior.remove();
        $textoMemeInferior = null;
      }
    } else {
      if (!$textoMemeInferior) {
        $textoMemeInferior = document.createElement('p');
        $textoMemeInferior.id = 'textoMemeInferior';
        $textoMemeInferior.className = 'textoMeme';
        $textoMemeInferior.textContent = $inputTextoInferior.value;
        document.getElementById('meme').appendChild($textoMemeInferior);
      }
    }
  });
});

//FUENTES
// Guardar select en una constante
const $seleccFuente = document.getElementById('seleccFuente');

// Función para cambiar la fuente
$seleccFuente.addEventListener('change', function() {
  const fuenteSeleccionada = $seleccFuente.value;

  const $textoSuperior = document.getElementById('textoMemeSuperior');
  const $textoInferior = document.getElementById('textoMemeInferior');

  $textoSuperior.style.fontFamily = fuenteSeleccionada;
  $textoInferior.style.fontFamily = fuenteSeleccionada;
});


//TAMAÑO FUENTE 
// Guardar constante 
const $seleccionarTamañoFuente = document.getElementById('seleccionarTamañoFuente');

// Función para cambiar el tamaño de fuente
$seleccionarTamañoFuente.addEventListener('input', function() {

  const tamañoFuenteSeleccionado = $seleccionarTamañoFuente.value;

  
  const $textoSuperior = document.getElementById('textoMemeSuperior');
  const $textoInferior = document.getElementById('textoMemeInferior');

  $textoSuperior.style.fontSize = `${tamañoFuenteSeleccionado}px`;
  $textoInferior.style.fontSize = `${tamañoFuenteSeleccionado}px`;
});

//POSICIÓN DEL TEXTO
// Guardar constantes
const $botonAlinearIzq = document.getElementById('botónAlinearIzq');
const $botonAlinearCent = document.getElementById('botónAlinearCent');
const $botonAlinearDer = document.getElementById('botónAlinearDer');
const $textoSuperior = document.getElementById('textoMemeSuperior');
const $textoInferior = document.getElementById('textoMemeInferior');

// Función para alinear a la izquierda
$botonAlinearIzq.addEventListener('click', function() {
    $textoSuperior.style.textAlign = 'left';
    $textoInferior.style.textAlign = 'left';
});

// Función para alinear al centro
$botonAlinearCent.addEventListener('click', function() {
    $textoSuperior.style.textAlign = 'center';
    $textoInferior.style.textAlign = 'center';
});

// Función para alinear a la derecha
$botonAlinearDer.addEventListener('click', function() {
    $textoSuperior.style.textAlign = 'right';
    $textoInferior.style.textAlign = 'right';
});

//COLOR TEXTO 
//Guardar botón para cambio de color en una constante
const $botonColorTxt = document.getElementById('botonColorTxt');

//Función para cambair texto de color
$botonColorTxt.addEventListener('input', function() {
  const colorSeleccionado = $botonColorTxt.value; 
  $textoSuperior.style.color = colorSeleccionado;  
  $textoInferior.style.color = colorSeleccionado;  
});


//COLOR FONDO TEXTO
//Guardar botón para cambio de fondo en una constante 
const $botonColorFondo = document.getElementById('botonColorFondo');
const $botonFondoTransparente = document.getElementById('botonFondoTransparente');

//Función que cambia el color de fondo
$botonColorFondo.addEventListener('input', function() {
  const colorFondoSeleccionado = $botonColorFondo.value; 
  $textoSuperior.style.backgroundColor = colorFondoSeleccionado;  
  $textoInferior.style.backgroundColor = colorFondoSeleccionado;  
});

//Función que hace transparente el fondo 
$botonFondoTransparente.addEventListener('change', function() {
  if ($botonFondoTransparente.checked) {

      $textoSuperior.style.backgroundColor = 'transparent';
      $textoInferior.style.backgroundColor = 'transparent';
  } else {
      const colorFondoSeleccionado = $botonColorFondo.value;
      $textoSuperior.style.backgroundColor = colorFondoSeleccionado;
      $textoInferior.style.backgroundColor = colorFondoSeleccionado;
  }
});

//CONTORNO 
// Guardar botones en constantes
const $botonClaroContorno = document.getElementById('botonClaroContorno');
const $botonOscuroContorno = document.getElementById('botonOscuroContorno');
const $ningunContorno = document.getElementById('ningunContorno');


// Evento para agregar contorno blanco
$botonClaroContorno.addEventListener('click', function() {
    $textoSuperior.style.textShadow = '2px 2px 4px white';  
    $textoInferior.style.textShadow = '2px 2px 4px white';  
});

// Evento para agregar contorno negro
$botonOscuroContorno.addEventListener('click', function() {
    $textoSuperior.style.textShadow = '2px 2px 4px black';  
    $textoInferior.style.textShadow = '2px 2px 4px black';  
});

// Evento para eliminar contorno
$ningunContorno.addEventListener('click', function() {
    $textoSuperior.style.textShadow = 'none';  
    $textoInferior.style.textShadow = 'none';  
});

//ESPACIADO 
// Guardar botón en constante
const $botonEspaciado = document.getElementById('botonEspaciado');

// Evento para cambiar el espaciado entre letras
$botonEspaciado.addEventListener('input', function() {
    const espaciadoSeleccionado = $botonEspaciado.value; 
    $textoSuperior.style.letterSpacing = `${espaciadoSeleccionado}px`; 
    $textoInferior.style.letterSpacing = `${espaciadoSeleccionado}px`; 
});


//INTERLINEADO 
// Guardar botón
const $botonInterlineado = document.getElementById('botonInterlineado');

// Evento para cambiar el interlineado
$botonInterlineado.addEventListener('change', function() {
    const interlineadoSeleccionado = $botonInterlineado.value; 
    $textoSuperior.style.lineHeight = interlineadoSeleccionado;  
    $textoInferior.style.lineHeight = interlineadoSeleccionado;  
});


//DESCARGAR MEME
//Pendiente revisar si esta es la forma correcta//
// Obtener los elementos necesarios
const botonDescargarMeme = document.getElementById('botonDescargarMeme');
const meme = document.getElementById('meme');
const imagenMeme = document.getElementById('imagenMeme');

// Función para descargar el meme como imagen
botonDescargarMeme.addEventListener('click', function() {
    // Asegúrate de que la imagen esté cargada
    if (imagenMeme.src === "") {
        alert("Por favor, carga una imagen primero.");
        return;
    }

    // Usamos html2canvas para tomar una captura del contenedor del meme
    html2canvas(meme, {
        logging: true,  // Para ver lo que está haciendo html2canvas en la consola
        useCORS: true,  // Permite usar imágenes de otros dominios
        allowTaint: true,  // Permite el uso de imágenes de otros dominios
        backgroundColor: null,  // Mantener el fondo transparente si se desea
    }).then(function(canvas) {
        // Convertimos el canvas a una imagen en formato PNG
        const image = canvas.toDataURL("image/png");
        
        // Creamos un enlace para descargar la imagen
        const enlace = document.createElement('a');
        enlace.href = image;
        enlace.download = 'meme.png'; // Nombre del archivo que se descargará
        enlace.click(); // Simula el clic en el enlace para iniciar la descarga
    }).catch(function(error) {
        console.error("Error al generar la imagen:", error);
    });
});

// MODO OSCURO//
const botonModoOscuro = document.getElementById('botonModoOscuro');
const body = document.body;
const contenedorAsideImg = document.getElementById('contenedorAsideImg');
const contenedorAsideTexto = document.getElementById('contenedorAsideTexto');
const contenedorBotonesHeader = document.getElementById('contenedorBotonesHeader');

botonModoOscuro.addEventListener('click', function() {
    body.classList.toggle('modo-oscuro');
    contenedorAsideImg.classList.toggle('modo-oscuro');
    contenedorAsideTexto.classList.toggle('modo-oscuro');
    contenedorBotonesHeader.classList.toggle('modo-oscuro');
    
    if (body.classList.contains('modo-oscuro')) {
        botonModoOscuro.innerHTML = '<i class="fa-regular fa-lightbulb" style="color: rgb(250, 250, 250);"></i> Modo claro';
    } else {
        botonModoOscuro.innerHTML = '<i class="fa-regular fa-lightbulb" style="color: rgb(0, 0, 0);"></i> Modo oscuro';
    }
});

