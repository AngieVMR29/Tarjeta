const numeroTarjeta = document.querySelector("#inputTarjeta");
const fechaTarjeta = document.querySelector("#inputFecha");
const cvvTarjeta = document.querySelector("#inputCVV");


const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

let numeroT = [];
let fechaT = [];
let cvvT = [];


numeroTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
   ingresarDatos(mascaraNumero, e.key, numeroT);
   numeroTarjeta.value = numeroT.join("");
});

fechaTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();
   ingresarDatos(mascaraFecha, e.key, fechaT);
   fechaTarjeta.value = fechaT.join("");
});

cvvTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();
   ingresarDatos(mascaraCVV, e.key, cvvT);
   cvvTarjeta.value = cvvT.join("");
});

function ingresarDatos(mascara, key, arreglo) {
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];

    if (key === "Backspace" && arreglo.length > 0) {
        arreglo.pop();
        return;
    }
    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length) {
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
            arreglo.push(mascara[arreglo.length], key);
            
            
        } else {
            arreglo.push(key);
        }
    }
}