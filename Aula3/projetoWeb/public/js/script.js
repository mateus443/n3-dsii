document.addEventListener("DOMContentLoaded", function () {
    console.log("Projeto Web - Grupo X está rodando");

    // Função para alternar entre modo claro e escuro
    function toggleTheme() {
        const body = document.body;
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const links = document.querySelectorAll('a');

        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');

        links.forEach(link => {
            link.classList.toggle('dark-mode');
        });
    }

    // Função para interagir com a página e alterar o texto
    function interactWithPage() {
        const welcomeText = document.getElementById('welcome-text');
        welcomeText.textContent = "Você clicou no botão! Agora o conteúdo está interativo.";
    }

    // Adicionando event listeners para os botões
    const themeToggleButton = document.getElementById('theme-toggle');
    const interactiveButton = document.getElementById('interactive-btn');

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme); // Alterna o tema ao clicar
    }

    if (interactiveButton) {
        interactiveButton.addEventListener('click', interactWithPage); // Interage com a página ao clicar
    }
});
