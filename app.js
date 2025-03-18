// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigos = [];

function agregarAmigo() {

    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);

    actualizarLista();

    inputAmigo.value = "";
}

function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; 
    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}


