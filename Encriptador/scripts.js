function encriptar(){

    let texto = document.querySelector("textarea").value;
    let vocales = ["a", "e", "i", "o", "u"];
    let geringoso = "";
    
        for (let i = 0; i < texto.length; i++) {
            if (vocales.includes(texto[i])) {
                geringoso += texto[i] + "p" + texto[i];
            } else {
                geringoso += texto[i];
            }
        }

        let respuesta = document.querySelector(".textoRespuesta");
        respuesta.innerHTML = `<h2>Texto encriptado</h2> <br> <p>${geringoso}</p>`;
}

function desencriptar(){

    let texto = document.querySelector("textarea").value;
    
    let respuesta = document.querySelector(".textoRespuesta");
    respuesta.innerHTML = `<h2>Texto desencriptado</h2> <br> <p>${texto}</p>`;
}