

let guatemala = document.getElementById("ejercicio1");
let india = document.getElementById("ejercicio2");
let paises = document.getElementById("ejercicio3");
let suecia = document.getElementById("ejercicio4");
let suiza = document.getElementById("ejercicio5");

function mostrarBandera(){
    let band = document.getElementById("banderas").value;
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";

    if (band == "GT") {
        guatemala.style.display = "block";
    } if (band == "IN") {
        india.style.display = "block";
    } if (band == "PB") {
        paises.style.display = "block";
    } if (band == "SUE") {
        suecia.style.display = "block";
    } if (band == "SUI") {
        suiza.style.display = "block";
    }
    
};
