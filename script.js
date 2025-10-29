let currentLang = localStorage.getItem('lang') || 'cz';

async function loadContent(lang) {
  try {
    const res = await fetch('./content.json'); // přidej ./ kvůli GitHub Pages
    const data = await res.json();
    const texts = data[lang];

    if (!texts) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (texts[key]) el.textContent = texts[key];
    });

    document.getElementById('year').textContent = new Date().getFullYear();
  } catch (err) {
    console.error('Chyba při načítání textů:', err);
  }
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  loadContent(lang);
}

// zajistí, že se spustí až po načtení DOM
document.addEventListener('DOMContentLoaded', () => {
  loadContent(currentLang);
});
