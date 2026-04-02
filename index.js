console.log("Olá, Netflox!");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('li.profile').forEach(li => {
        const a = li.querySelector('a');
        a.addEventListener('click', () => {
            const img = li.querySelector('img');
            const p = li.querySelector('p');
            localStorage.setItem('perfilAtivoNome', p.textContent);
            localStorage.setItem('perfilAtivoImagem', img.src);
        });
    });
});