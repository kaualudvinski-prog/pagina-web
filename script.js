document.addEventListener("DOMContentLoaded", function () {
    // Validação no console do navegador para conferir as regras de limites de caracteres
    const titulo = document.getElementById("titulo").innerText;
    const subtitulo = document.getElementById("subtitulo").innerText;
    const corpoTexto = document.getElementById("corpo-texto").innerText;

    console.log("--- Validação de Requisitos ---");
    console.log(`Caracteres do Título: ${titulo.length} (Regra: 70 a 90)`);
    console.log(`Caracteres do Subtítulo: ${subtitulo.length} (Regra: 80 a 120)`);
    console.log(`Caracteres do Corpo: ${corpoTexto.length} (Regra: 400 a 1200)`);
});