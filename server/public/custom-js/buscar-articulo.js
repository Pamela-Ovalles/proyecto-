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
//console.log(checkBox);

if (checkBox42 == true){
  extramultas = await http('GET','/getArticulo/1',null);
  //$("#multa42").name();
 //console.log(veri);
 checkBox42 = document.getElementById("multa42").name="name[]";
  console.log(extramultas.usua_arti.desc_infraccion);
  }
  else {
checkBox42 = document.getElementById("multa42").name="";
}
//
if (checkBox44 == true){
extramultas = await http('GET','/getArticulo/2',null);
checkBox44 = document.getElementById("multa44").name="name[]";
  console.log(extramultas.usua_arti.desc_infraccion);
  }
  else {
checkBox44 = document.getElementById("multa44").name="";
}

if (checkBox62 == true){
extramultas = await http('GET','/getArticulo/3',null);
checkBox62 = document.getElementById("multa62").name="name[]";
  console.log();
  }
  else {
checkBox62 = document.getElementById("multa62").name="";
}

}

onCheckBox();
