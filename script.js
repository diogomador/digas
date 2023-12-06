function login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    window.location.href = "#.html";

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
}

function register() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var option = document.getElementById("choice").value

    window.location.href = "index.html";

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
}