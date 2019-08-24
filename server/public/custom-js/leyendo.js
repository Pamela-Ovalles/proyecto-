
let probe = {};
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

async function cargarProvinciasYDemas(){
  probe = await http('POST', '/prueba', null);
  //fillSelect('persona',extraccion.usuarios, 'cedula', 'id');

  var archivoTxt = new XMLHttpRequest();
  var fileRuta ='../links/prueba.txt';
  archivoTxt.open("GET",fileRuta,false);
  archivoTxt.send();
  var txt = archivoTxt.responseText;

}

/*function fillSelect(idSelect, list, descriptionName, idName){
  $(`#${idSelect}`).html("");
  $(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">Seleccione</option>`);
  for(let i of list){

    $(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="${i[idName]}">${i[descriptionName]}</option>`);
    $(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">${[txt]}</option>`);

  }
}*/
cargarProvinciasYDemas();
