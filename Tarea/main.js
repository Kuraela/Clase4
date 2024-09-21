/*///// 1. Configuración del canvas ///*/
/*const CANVAS = document.getElementById("lienzo");
let start;
//Declaramos una variable start sin darle un valor inicial. 
//Esta variable se utilizará para almacenar el tiempo inicial cuando comience la animación

let mouseX = 0;
let mouseY = 0;

//Declara una función llamada updateMouseCoords que acepta un parámetro eventData, el cual es un objeto 
//que contiene la información del evento de movimiento del mouse (como las coordenadas del puntero)
function updateMouseCoords(eventData){
mouseX = eventData.clientX;
//Actualiza el valor de mouseX con la coordenada X del puntero del mouse en la ventana del navegador (clientX)
mouseY = eventData.clientY;
////Actualiza el valor de mouseY con la coordenada Y del puntero del mouse en la ventana del navegador (clientY)
}

document.addEventListener("mousemove", updateMouseCoords);
//Agrega un event listener para el evento mousemove. Cada vez que el mouse se mueva, la función updateMouseCoords 
//será ejecutada, actualizando las variables mouseX y mouseY con las nuevas coordenadas del puntero

//traemos el elemento del html (que se llama lienzo) aquí 
const CTX = CANVAS.getContext("2d");
//lo configuramos para hacerlo 2d
CANVAS.width = window.innerWidth;
//el ancho
CANVAS.height = window.innerHeight;
//el alto



function updateCanvasSize(){
  // Más info sobre la funcion getBoundingClientRect() disponible en los elementos HTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
  //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  //The returned value can be thought of as the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element.
 
  // Al actualizar el tamaño del canvas, automáticamente se "limpia" borrando lo que hayamos renderizado.
  // Por ello en este ejemplo estamos renderizando nuevamente el rectángulo para verlo en pantalla ya que no se está renderizando constantemente por medio de requestAnimationFrame, cuando configuremos eso ya no será necesario llamar la función de dibujo o render aquí.
}



//COMO METER EN UNA FUNCION UN OBJETO (EN ESTE CASO UNA LINEA) PARA SOLO COPIAR Y PEGAR Y PODER DUPLICAR UN OBJETO

function renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY){
  CTX.strokeStyle = colorTrazo;
  CTX.lineWidth = grosorLinea;
  CTX.beginPath();
  CTX.moveTo(origenX, origenY);  //el punto de origen
  CTX.lineTo(finalX, finalY); //aqui va lo del mouse
  CTX.stroke();
}

//renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY
renderOneLine("aqua",10, 100, 100, mouseX, mouseY);



 1. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
//function renderLines() {
//CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

/*///// 2. Secuencia de comandos para dibujar una linea ///*/
  /* 
    1. Definir el estilo de la línea (como color y grosor).
    2. Definir el inicio de la línea usando la función beginPath()
    3. Definir el punto de origen de la línea usando la función moveTo(x, y)
    4. Definir otro punto en el canvas al cual se va a conectar la línea usando lineTo(x, y)
    5. Definir tantos puntos como se desee
    *. (Opcional) Usar la función closePath() para trazar una línea desde el último punto hasta el origen de la línea.
    6. Usar la función stroke() para renderizar la línea en el canvas
    
    7. En caso de desear realizar más líneas, se repiten los pasos del 1 al 6.
  */
/*CTX.strokeStyle = "aqua";
CTX.lineWidth = 5;
CTX.beginPath();
CTX.moveTo(30, 30);  //nos genera un punto nada mas, la coordenada donde va a iniar a dibujarse la línea
CTX.lineTo(160, 160);  //nos genera ya una línea
CTX.lineTo(360, 160);
CTX.closePath();
CTX.stroke();

CTX.strokeStyle = "#ab3eff";
CTX.lineWidth = 11;
CTX.beginPath();
CTX.moveTo(100, 30);
CTX.lineTo(60, 260);
CTX.stroke();

requestAnimationFrame(renderLines);
}/*



/*///// 6. Ejecutar nuestro código ///*/
//window.addEventListener("resize", updateCanvasSize);
//requestAnimationFrame(renderOneLine);

//Llamamos el elemento "lienzo" del html acá
const CANVAS = document.getElementById("lienzo");
//Decimos que es 2d
const CTX = CANVAS.getContext("2d");

//Creamos las variables mouseX y mouseY que van a almacenar el valor de las coordenadas del mouse
let mouseX = 0;
let mouseY = 0;

//Configuramos el tamaño del canvas, que esté ligado al tamaño de la ventana 
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

//Para atualizar el tamaño del canvas en caso de que el usuario modifique el tamaño de la ventana
function updateCanvasSize() {
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
}

//llamamos esa función para que se ejecute
window.addEventListener("resize", updateCanvasSize);

//Función para obtener la posición del mouse
function updateMouseCoords(eventData) {
  mouseX = eventData.clientX;
  mouseY = eventData.clientY;
}

//Creamos un evento para escuchar la posición del mouse
document.addEventListener("mousemove", updateMouseCoords);

//Creamos una función para dibujar una línea y así poder repetir esa función cuantas veces qieramos 
//para hacer más líneas
function renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY) {
  CTX.strokeStyle = colorTrazo;
  CTX.lineWidth = grosorLinea;
  CTX.beginPath(); //Definir el inicio de la línea usando la función beginPath()
  CTX.moveTo(origenX, origenY);  //Punto donde comienza (origen)
  CTX.lineTo(finalX, finalY);    //Punto donde termina (donde está el mouse)
  CTX.stroke();  // Usar la función stroke() para renderizar la línea en el canvas
}

//Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() 
//function renderLines() {
//CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

//Creamos función de dibujo que estaremos repitiendo usando requestAnimationFrame() 
function animar() {
  // Limpiar el canvas en cada frame
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  //Dibujar una línea desde un punto fijo hasta la posición actual del mouse
  renderOneLine("#C393DB", 10, 100, 100, mouseX, mouseY);
  renderOneLine("aqua", 10, 500, 500, mouseX, mouseY);

  //Llamar de nuevo a la función animate en el siguiente frame
  requestAnimationFrame(animar);
}

//Iniciar la animación
requestAnimationFrame(animar);
