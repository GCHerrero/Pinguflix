// Pega o elemento <body> do DOM (necessário para aplicar classe de tema)
const body = document.body;

// Pega o botão que troca o modo (controle de UI)
const themeToggle = document.getElementById('theme-toggle');

// Aplica as classes e estado localStorage para o tema selecionado
// theme = 'light' ou 'dark'
function applyTheme(theme) {
    const isLight = theme === 'light';

    // `body.light` altera o CSS de cores usando variáveis customizadas
    body.classList.toggle('light', isLight);

    // `#theme-toggle.active` move knob e muda aparência do botão
    themeToggle.classList.toggle('active', isLight);

    // Acessibilidade: indica estado do toggle para leitores de tela
    themeToggle.setAttribute('aria-checked', isLight ? 'true' : 'false');

    // Guarda escolha do usuário para manter ao recarregar a página
    localStorage.setItem('siteTheme', theme);
}

// Ao clicar, alterna entre dark e light
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
});

// Inicializa tema com valor salvo ou padrão dark se não existir
const savedTheme = localStorage.getItem('siteTheme') || 'dark';
applyTheme(savedTheme);
