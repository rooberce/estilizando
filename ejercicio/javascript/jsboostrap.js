function creaCampos()
{
 const input = document.createElement("input");
 input.type="text";
 input.placeholder="pon tu nombre. minimo 4 caracteres";
 document.getElementById("contenedor_campo").appendChild(input);
    document.getElementsByTagName("input")[0].value;
    input.onblur=salida;

}
function salida()
{
var campo =document.getElementsByTagName("input")[0].value;
var obj_aviso =document.getElementById("contenedor_aviso");
if(campo.length<4)//length
{
    obj_aviso.className="alert alert-danger";
    obj_aviso.innerHTML="el campo debe ser menor de 4 caracteres";
}
else {
    obj_aviso.className="alert alert-success";
    obj_aviso.innerHTML="el campo cumple las condiciones";

}
}
