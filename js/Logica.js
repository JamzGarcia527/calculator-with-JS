/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global y */




// cons no cambia su valor es una constante
cons = 3.1416;

// variables para la calculadora

var numpantalla="0";
var pantallaconnumero="si"; //Si o No
var usarpunto="no"; // Si o No
var numespera=0;
var operapendiente="";
var solucion="";

function ingresarnumero(x)
{
 if(x!==".")
 {
    if(numpantalla === "0" || pantallaconnumero === "si")
    {
        parseInt(document.getElementById("txtboxnros").value=x);
        numpantalla=x;
    }else if(x!==".")
    {
        parseInt(document.getElementById("txtboxnros").value+=x);
        numpantalla+=x;
    }
 }
    
if(x === "." && usarpunto === "no" && numpantalla === "0")
    {
        parseInt(document.getElementById("txtboxnros").value+="0.");
        numpantalla=x;
        usarpunto="si";
    }
else if(x === "." && usarpunto === "no")
    {
        // document.Calculadora.txtboxnros.value +=x; // metodo inicial no funciona
        parseInt(document.getElementById("txtboxnros").value+=x);
        console.log(x);
        numpantalla +=x;
        usarpunto="si";
    }
else if(x === "." && usarpunto === "si")
    {
        
    }
    pantallaconnumero="no";
 }
 
 function ingresaoperacion(y)
 {
     if(operapendiente === "")
     {
         numespera=parseInt(document.getElementById("txtboxnros").value+=y);
        // parseInt(document.getElementById("txtboxnros").value=+y);
         operapendiente = y;
         pantallaconnumero = "";
         numpantalla = "";
         usarpunto = "no";
     }
 }
 
 function resultado()
 {
     
     if(operapendiente !== "")
     {
        solucion=numespera+operapendiente+numpantalla;
        parseInt(document.getElementById("txtboxnros").value=eval(solucion));
        numpantalla=eval(solucion);
        
        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

    Toast.fire({
      icon: 'success',
      title: 'resutado de la operación es: '+numpantalla
    });
    
        pantallaconnumero="si";
        usarpunto="no";
     }
     
 }
 function raiz()
 {
     if(operapendiente === "")
     {
     
     result = parseInt(document.getElementById("txtboxnros").value=Math.sqrt(numpantalla));
     
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

    Toast.fire({
      icon: 'success',
      title: 'resutado de la raiz es: '+ result
    });
     
     // alert('resutado de la raiz es: '+ result)
     pantallaconnumero = "si";
     operapendiente = "";
     usarpunto = "no";
    }
 }
 
function limpiar()
{
    numpantalla=0;
    pantallaconnumero="si";
    usarpunto="no";
    numespera=0;
    operapendiente="";
    solucion="";
    parseInt(document.getElementById("txtboxnros").value=0);
}




// Metodos en javascript se le llaman funciones.
function saludo()
{
    Swal.fire({
        title: 'Hello Friends!',
        text: 'Today is a Execelent day for learning JavaScript',
        icon: 'success',
        confirmButtonText: 'Hello World :D'
    });
}

function about()
{
    Swal.fire({
        title: '<strong>My Name Is <u>Jimmy Cantor</u></strong>',
        icon: 'info',
        html:
          'I am full stack <b>developer</b> check my page ,  ' +
          '<a href="//jamzpcs.com" target="_blank">Jamz PCs</a> ' +
          'Good Day.',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Like!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
        });
}

function donwloadCode()
{
    Swal.fire({
        title: '<strong>how to download <u>this Code?</u></strong>',
        icon: 'alert',
        html:
          'Ok <b> Click </b> in this link -> ,  ' +
          '<a href="//github.com/jamzgarcia/calculator-with-JS" target="_blank">CODE HERE!</a> ' +
          'Good Day.',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
        });
}

// funcion suma
function suma(){
    
    var mostrarResultado = document.getElementById("resultado");
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    // let cambia de valor pero solo funciona en el bloque donde es ejecutada
    let resultado = number1 + number2;
    alert("la suma es = "+resultado);    
    mostrarResultado.innerHTML = "la suma es: "+resultado;
    
}
// funcion resta
function resta(){
    
    var mostrarResultado = document.getElementById("resultado");
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    resultado = number1 - number2;
    alert("la resta es: "+ resultado);   
    mostrarResultado.innerHTML = "la resta es: "+resultado; 
   
}

function aleatorio(min,max){
    // floor funciona para seleccionar 1 solo elemento
    return Math.floor(Math.random()* (max-min) + min);
}

function generarNumeros(){
   
    var elementos = document.getElementById("elementos");
    var opcionesGeneradas="";
    
    for(var i = 0; i < 10; i++ )
    {
        opcionesGeneradas+="<option>"+ aleatorio(1,100) + "</option>";
    }
    elementos.innerHTML = opcionesGeneradas; 
}

function agregarActividad(evt){
    evt.preventDefault();
    var actividad = document.getElementById("actividad").value;
    console.log(actividad);
    if (actividad === "") {
        alert("debe agregar una actividad");
    }else{
        var opcion = "<li>" + actividad + "</li>";
        var lista = document.getElementById("listaActividades");
        lista.innerHTML += opcion;        
        alert("Se agrego una actividad");
    }
}








