let currentLang = localStorage.getItem('lang') || 'cz';


async function loadContent(lang) {
const res = await fetch('content.json');
const data = await res.json();
const texts = data[lang];


document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
el.textContent = texts[key] || '';
});


document.getElementById('year').textContent = new Date().getFullYear();
}


function switchLang(lang) {
currentLang = lang;
localStorage.setItem('lang', lang);
loadContent(lang);
}


document.addEventListener('DOMContentLoaded', () => loadContent(currentLang));