

let contactos= document.getElementById("contactosenviar").addEventListener("click", guardarMensaje)

const mensajes= []
mensajes.push(["arielarom18@hotmail.com", "1", "¿como esta el tiempo?"]) 



   
  
    
function guardarMensaje(){


    let email=document.getElementById("e-mail").value;
    let tipo= document.getElementById("tipmensaje").value;
    let mensaje=document.getElementById("message").value;
    
    
  if(!validarFormulario(email, mensaje)){

   mostrarMensaje("error", "incorrecto");
    return;
}

mensajes.push([email, tipo, mensaje])

mostrarMensaje(tipo, " ");


filtrarMensajes()


}


function validarFormulario(email, mensaje){

  PATRONCORREO= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
  PATRONMENSAJE= /^[a-zA-Z\s]{1,150}$/
  
  if(!PATRONCORREO.test(email) || !PATRONMENSAJE.test(mensaje)  ){
  
      return false;
  
    }
        return true;
  
  }


function mostrarMensaje(tipo, mensaje){

    let mensajedeldiv=document.getElementById("alertmen");
    mensajedeldiv.hidden=false;

    /* mensaje ingresar al contenido del divAlert, va a entrar como parametro, ese mensaje se va a reemplazar */
    
    mensajedeldiv.innerHTML= mensaje;
   
    switch (tipo) {
        case "1":
            mensajedeldiv.innerHTML="pregunta enviada";
            mensajedeldiv.className= "alert alert-warning";
          break;
        case "2":
            mensajedeldiv.innerHTML="idea enviada";
            mensajedeldiv.className= "alert alert-success";
          break;
          case "3":
            mensajedeldiv.innerHTML="comentario enviado";
            mensajedeldiv.className= "alert alert-primary";
          break; 
        case "4":
            mensajedeldiv.innerHTML="reclamo enviado";
            mensajedeldiv.className= "alert alert-danger";
          break; 
          
         case "error":
            mensajedeldiv.className= "alert alert-danger";
            break;
        case "valido":
            mensajedeldiv.className= "alert alert-success";
            break; 

      }  

}




 function filtrarMensajes(){

 tipo1=[]
 tipo2=[]
 tipo3=[]
 tipo4=[]

 for (let index=0;  index<mensajes.length; index++){
   
    if(mensajes[index][1]=="1"){
 tipo1.push([mensajes[index][2]])
} else if(mensajes[index][1]=="2"){
tipo2.push([mensajes[index][2]])
}else if (mensajes[index][1]=="3"){
 tipo3.push([mensajes[index][2]])
}else if (mensajes[index][1]=="4"){
    tipo4.push([mensajes[index][2]])
   }
 }

 console.log(tipo1)
 console.log(tipo2)
 console.log(tipo3)
 console.log(tipo4)

 }


 



