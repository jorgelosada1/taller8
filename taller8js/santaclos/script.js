function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante/ 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante/ (3600 * 24))).slice(-2);
return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

let noel = "off";
let noelStop = document.getElementById("noelQuieto")
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let sonidoFondo = new Audio("./sound/Dancing.mp3")


function cuentaRegresiva(tiempoFaltante) {
    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        diasElemento.innerHTML = `${t.diasFaltantes}`;
        horasElemento.innerHTML = `${t.horasFaltantes}`;
        minutosElemento.innerHTML = `${t.minutosFaltantes}`;
        segundosElemento.innerHTML = `${t.segundosFaltantes}`;
        const e = document.getElementById("mensaje")


        mensaje = "Tiempo Restante Para Navidad:"
        e.innerHTML = mensaje;

        if (t.tiempoFaltante < 1) {
            clearInterval(tiempoActual);
            mensaje = "¡Feliz Navidad!"
            e.innerHTML = mensaje;

            noelStop.classList.add("on");
            play.classList.add("boton");
            stop.classList.add("boton");

            if (noel == "off") {
                noel = "on"
                play.addEventListener('click', ()=>{
                    noelStop.classList.add("on");
                    sonidoFondo.play();

                })
                stop.addEventListener('click', ()=>{
                    sonidoFondo.pause();
                }) 
                console.log("on")
            }

        }
    }, 1000)
};


   /* 
    function bailar(){
        if (noel == "off") {
            noel = "on"
            play.addEventListener('click', ()=>{
                noelStop.classList.add("on");
                sonidoFondo.play();
            })
            stop.addEventListener('click', ()=>{
                sonidoFondo.pause();
            }) 
            console.log("on")
        }
    }*/
    
cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500', 'cuentaRegresiva','Feliz Navidad!');