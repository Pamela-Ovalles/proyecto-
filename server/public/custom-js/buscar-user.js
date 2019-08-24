
/*var archivoTxt = new XMLHttpRequest();
var fileRuta='../custom-js/leyendoarchivo.txt';
archivoTxt.open("GET",fileRuta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;
*/
let extraccion = {};
function compare(element){
  return element !== null && element !== '' && typeof element !== "undefined";
}

function http(type, route, params){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(type, route);
    xhr.onload = function() {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
        }
        else{
          resolve(null);
        }
    };
    xhr.send();
  });
}

async function cargarDatos(){
  extraccion = await http('GET','/getPersonaByCedula',{id:"40226079818"});
  //console.log(extraccion.usuarios);
  fillSelect('cedula',extraccion.usuarios,'nombre_1');
}

function fillSelect(idSelect, list, probe){

$(`#${idSelect}`).html("");
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">Seleccione</option>`);
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">${[probe]}</option>`);
}
/*
function fillSele(idSelect, list, descriptionName, idName){

$(`#${idSelect}`).html("");
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">Seleccione</option>`);
for(let i of list){
      $(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="${i[idName]}">${i[descriptionName]}</option>`);
  }
}
*/

cargarDatos();
