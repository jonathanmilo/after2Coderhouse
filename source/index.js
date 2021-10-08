console.log(" archivo index")


/* clases de variables  */

let usuario="jonathan";

console.log(usuario)
usuario="Victorio";

numeroCelular=20202020;

const TIENDA="falavera";

/* tipos de valores variables
tipo string let string ="ejemplo";
tipo number let number=2;
tipo booleano let bulean=true /false;
tipo objeto let items={}
tipo array let array []

*/
let numeroString="12"
let string ="ejemplo";
let number=2.3;
let agregarAlCarrito=true;

let sumados= (parseInt(numeroString)+number );
console.log(sumados)

let producto= ["celular","computadora"];

//console.log( string, number, agregarAlCarrito,producto)

/*condicional
if( condicion){accion1}else if(condicion2){accion2} else{otraAccion}
*/
let agendado=121212121;
var numeroCelular=prompt("ingrese num de celular");
let numeroDeUsuario;

/* if(numeroCelular==1562626262){alert("el num es correcto según la condicion")}
else if(numeroCelular==5252525252){ alert( " se está cumpliendo la condición2")}
 else{ alert("la condicion no se cumple")} */

/*  if ( confirm( " tu num de celular es 1551515151 ?")){alert("el num ya está registrado")}
 else{alert("el num no estaba registrado")} */


if( numeroCelular==0 || numeroCelular ==""){alert("ingrese un num de celular valido")}
 else{ numeroDeUsuario=numeroCelular; alert("numero registrado")}

 if(( (numeroCelular==0|| numeroCelular==""))&&(numeroCelular != agendado))
 { alert("el numero no está en la base")} else{alert("el numero ya está en la base o no es válido")}

 console.log("información por consola")
 console.info("el sitio está funcionando")
 console.warn("el usario está mal registrado")
 console.table(producto)
 