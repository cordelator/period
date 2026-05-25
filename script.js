function verificar(respuesta) {

    var resultado = document.getElementById("resultado");

    if (respuesta === "roblox") {

        resultado.innerHTML =
        "✅ roblox es el favorito del año.";

        resultado.style.color = "lightgreen";

    } else {

        resultado.innerHTML =
        "❌ Incorrecto. Intenta otra vez.";

        resultado.style.color = "red";
    }
}