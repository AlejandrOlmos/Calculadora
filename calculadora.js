//para asignar cada valor

function retornar(num){

    var anterior=document.fo.valores.value;

    document.getElementById("valores").value=anterior+num;

}

//para eliminar ultimo caracter

function eliminar(){

    var anterior=document.fo.valores.value;

    var nuevovalor=anterior.substring(0,anterior.length-1);

    document.getElementById("valores").value=nuevovalor;
}


//Función para limpiar la pantalla

function eliminar_todo(){
    document.fo.valores.value="";
}
//para  validar los signos

function comprobar(num){ 

var anterior = document.fo.valores.value;
if(anterior==""){
document.fo.valores.value="";
}else{    
    var anterior = document.fo.valores.value;
    document.getElementById("valores").value=anterior+num;
    esto=document.fo.valores.value;

    record=0; 
    igual=1; 
    var letraRecord 
    var b=0 
    var letra="" 

    for (a=1;a<esto.length;a++){      
    if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="."){ 
    igual=igual+1; 
    letra=esto.charAt(a);
    }else{ 
         if(igual>record){record=igual;letraRecord=letra} 
            igual=1 
         } 
         b=a 
    }
    
    if(igual>record){
      record=igual;
      letraRecord=letra;
    } 

    if (record>2){
        var anterior = esto;
        var nuevovalor = anterior.substring(0, anterior.length-1);
        document.getElementById("valores").value=nuevovalor;
        record=0;b=0;igual=1;letra="";letraRecord="";
    }     
} 

}

//realizar las operacionesmatematicas


function calcular(){
    var resultado=eval(document.fo.valores.value);

    if(resultado=="Infinity"){
        document.fo.valores.value="No se puede dividir entre cero";

    }else{
        document.fo.valores.value=resultado;
    }
    
}