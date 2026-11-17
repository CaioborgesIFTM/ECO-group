// Contas fictícias usadas exclusivamente na apresentação do ECO.
const contas = [
    { email: "ouvinte@gmail.com", senha: "1234", pagina: "painel-ouvinte.html" },
    { email: "artista@gmail.com", senha: "1234", pagina: "estudio.html" },
    { email: "administrador@gmail.com", senha: "1234", pagina: "admin.html" }
];

const formularioLogin = document.getElementById("form-login");
const formularioCadastro = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const campos = formularioLogin.elements;
        const email = campos.email.value.trim().toLowerCase();
        const conta = contas.find(function (perfil) {
            return perfil.email === email && perfil.senha === campos.password.value;
        });

        if (conta) {
            window.location.href = conta.pagina;
        } else {
            mensagem.textContent = "E-mail ou senha não conferem.";
        }
    });
}

// O cadastro confere a confirmação sem enviar nem armazenar os campos.
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

