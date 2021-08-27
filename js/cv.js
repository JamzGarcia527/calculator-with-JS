function agregarData(evt){
   evt.preventDefault();   
   var nombreUsuario = document.getElementById("name").value;
   var lastName = document.getElementById("lastName").value;
   var selectTypeDocument = document.getElementById("selectTypeDocument").value;
   var documento = document.getElementById("documento").value;
   var pickdate = document.getElementById("pick_date").value;
   var placeBritday = document.getElementById("placeBritday").value;
   alert("Bienvenido a empleos.com "+ nombreUsuario + lastName);
   console.log(nombreUsuario);
   if (nombreUsuario === "") {
       alert("no hay datos del empleado");
         }else{
       var opcion = "<h4> Bienvenido<strong>" + nombreUsuario + lastName + "</strong> su tipo de documento es <strong>" + selectTypeDocument + "</strong> Identificado con el número:<strong> " + documento + "</strong> expedido en </strong>" + placeBritday + "</strong> el dia </strong>" + pickdate + "</strong></h4>";
       var result = document.getElementById("data");
       result.innerHTML += opcion;         
   }
}

function agregarMoreData(evt){
   evt.preventDefault();   
   var perfil = document.getElementById("perfil").value;
   var herramientas = document.getElementById("herramientas").value;
   var primaria = document.getElementById("primaria").value;
   var secundaria = document.getElementById("secundaria").value;
   console.log(perfil,herramientas,primaria,secundaria);
   
   
   if (perfil === "") {
       alert("no hay datos del perfil");
         }else{
            var DataCompany = "<li><ul>"+perfil+"</ul>"+"<ul>"+herramientas+"</ul>"+"<ul>"+primaria+"<ul>"+"<ul>"+"</ul>"+secundaria+"<ul></li>";
            var result2 = document.getElementById("listData");
            result2.innerHTML += DataCompany;  
      }
   }








$(document).ready(function () {     
   console.log("jquery ok");  
});

  