// Contas fictícias usadas exclusivamente na apresentação do ECO.
const contas = [
    { email: "ouvinte@gmail.com", senha: "1234", pagina: "painel-ouvinte.html" },
    { email: "artista@gmail.com", senha: "1234", pagina: "estudio.html" },
    { email: "administrador@gmail.com", senha: "1234", pagina: "admin.html" }
];
const formularioLogin = document.getElementById("form-login");
const formularioCadastro = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");
//Testa as senhas permite entrar como admin nas duas paginas, mas como ouvinte apenas em ouvinte, como artista apeanas em artista
if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const email = formularioLogin.elements.email.value;
        const senha = formularioLogin.elements.password.value;
        const pagina = window.location.pathname;

        if (senha !== "1234") {
            mensagem.textContent = "E-mail ou senha não conferem.";
        } else if (email === "administrador@gmail.com") {
            window.location.href = "admin.html";
        } else if (
            email === "ouvinte@gmail.com" &&
            pagina.endsWith("/login.html")
        ) {
            window.location.href = "painel-ouvinte.html";
        } else if (
            email === "artista@gmail.com" &&
            pagina.endsWith("/login-artista.html")
        ) {
            window.location.href = "estudio.html";
        } else {
            mensagem.textContent = "E-mail incorreto ou conta não permitida nesta página.";
        }
    });
}
// O cadastro confere a confirmação.
if (formularioCadastro) {
    formularioCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const campos = formularioCadastro.elements;
        if (campos.password.value !== campos.confirm.value) {
            mensagem.textContent = "As senhas não conferem.";
        } else {
            mensagem.textContent = "Os campos conferem. Para criar novas contas, o ECO precisa de um servidor.";
        }
    });
}

