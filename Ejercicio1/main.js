/*///// 1. Configuración del canvas ///*/
const CANVAS = document.getElementById("lienzo");
//traemos el elemento del html (que se llama lienzo) aquí 
const CTX = CANVAS.getContext("2d");
//lo configuramos para hacerlo 2d
CANVAS.width = window.innerWidth;
//el ancho
CANVAS.height = window.innerHeight;
//el alto


/*///// 2. Evento para asegurarnos que el tamaño del render sucediendo en el canvas coincida con el tamaño del DOM ///*/
function updateCanvasSize(){
  // Más info sobre la funcion getBoundingClientRect() disponible en los elementos HTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
  //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  //The returned value can be thought of as the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element.
 
  // Al actualizar el tamaño del canvas, automáticamente se "limpia" borrando lo que hayamos renderizado.
  // Por ello en este ejemplo estamos renderizando nuevamente el rectángulo para verlo en pantalla ya que no se está renderizando constantemente por medio de requestAnimationFrame, cuando configuremos eso ya no será necesario llamar la función de dibujo o render aquí.
}




/*///// 3. Renderizado usando API de dibujo ///*/
function renderRectangle() {
  /*///// 3.1 Definir el color de relleno de las figuras que vamos a dibujar ///*/
  CTX.fillStyle = "aqua";

  /*///// 3.2 Dibujar un rectangulo en el canvas ///*/
  CTX.fillRect(10, 10, 150, 100);
  // Sintaxis: CTX.fillRect(x, y, width, height);
}
// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D



/*///// 4. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
renderRectangle();




/* Happy Coding! 👾 */