function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();

    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replaceAll(/o/igm,"ober");
    var txtcifrado = txtcifrado.replaceAll(/i/igm,"imes");
    var txtcifrado = txtcifrado.replaceAll(/a/igm,"ai");
    var txtcifrado = txtcifrado.replaceAll(/u/igm,"ufat");
    document.getElementById("imgder").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("inputtexto").innerHTML = " ";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replaceAll(/ober/igm,"o");
    var txtcifrado = txtcifrado.replaceAll(/imes/igm,"i");
    var txtcifrado = txtcifrado.replaceAll(/ai/igm,"a");
    var txtcifrado = txtcifrado.replaceAll(/ufat/igm,"u");

    document.getElementById("imgder").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";    
    document.getElementById("inputtexto").innerHTML = "";
  }
  
  function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió!");
  }