// CONTADOR (cambia la fecha aquí)
let inicio = new Date("2025-11-21");

function actualizarTiempo(){
    let ahora = new Date();
    let diff = ahora - inicio;

    let dias = Math.floor(diff / (1000*60*60*24));
    document.getElementById("tiempo").innerText = dias + " días ❤️";
}

setInterval(actualizarTiempo, 1000);

// MÚSICA
let musica = document.getElementById("musica");

function toggleMusica(){
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
}

// LIGHTBOX
function abrir(img){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("imgGrande").src = img.src;

    let mensajes = ["Te amo ❤️","Eres todo 💖","Siempre tú ✨"];
    document.getElementById("mensaje").innerText = mensajes[Math.floor(Math.random()*mensajes.length)];
}

function cerrar(){
    document.getElementById("lightbox").style.display = "none";
}

// CORAZONES
setInterval(()=>{
    let c = document.createElement("span");
    c.innerHTML="💖";
    c.style.left=Math.random()*100+"vw";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
},300);

// SECRETO
function abrirSecreto(){
    document.getElementById("pantallaSecreta").style.display="block";
}

function verificar(){
    let clave = document.getElementById("clave").value;

    if(clave === "amor123"){ // puedes cambiar la clave
        document.getElementById("mensajeSecreto").style.display="block";
    }else{
        alert("Clave incorrecta 💔");
    }
}