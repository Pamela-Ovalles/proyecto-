let extramultas = {};


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

async function onCheckBox(){
var checkBox42 = document.getElementById("multa42").checked;
var checkBox44 = document.getElementById("multa44").checked;
var checkBox62 = document.getElementById("multa62").checked;
var checkBox63 = document.getElementById("multa63").checked;
//var checkBox64_1 = document.getElementById("multa64-1").checked;
console.log(checkBox);

if (checkBox42 == true){
  extramultas = await http('GET','/getArticulo/1',null);
  console.log(extramultas.usua_arti.desc_infraccion);
  }
  else {
$("#multa42").val("no se encontró");
}
if (checkBox44 == true){
  extramultas = await http('GET','/getArticulo/2',null);
  console.log(extramultas.usua_arti.desc_infraccion);
  }
  else {
$("#multa44").val("no se encontró");
}

if (checkBox62 == true){
  extramultas = await http('GET','/getArticulo/3',null);
  console.log(extramultas.usua_arti.desc_infraccion);
  }
  else {
$("#multa62").val("no se encontró");
}

if (checkBox63 == true){
  extramultas = await http('GET','/getArticulo/4',null);
  console.log(extramultas.usua_arti.desc_infraccion);
  }
  else {
$("#multa63").val("no se encontró");
}

}

onCheckBox();
