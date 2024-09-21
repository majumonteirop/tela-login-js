document.getElementById('botaoLogin').addEventListener('click', function() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (usuario === "majumonteiro" && senha === "12345") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login bem-sucedido!";
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
});
