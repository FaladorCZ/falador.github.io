// Default language
let currentLang = 'en';

// Fill the page with text for the selected language
function updateLanguage(lang) {
  currentLang = lang;
  const t = texts[lang];

  // Header
  document.getElementById('name').textContent = t.name;
  document.getElementById('title').textContent = t.title;

  // Hero section
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('intro').textContent = t.intro;

  // Buttons
  document.getElementById('hireBtn').textContent = t.hire;
  document.getElementById('cvBtn').textContent = t.viewCV;
  document.getElementById('linkedinBtn').textContent = t.linkedin;

  // Availability
  document.getElementById('availability').textContent = t.availability;

  // Skills
  const skillsContainer = document.getElementById('skills');
  skillsContainer.innerHTML = '';
  t.skills.forEach(skill => {
    const span = document.createElement('span');
    span.textContent = skill;
    span.className = 'skill';
    skillsContainer.appendChild(span);
  });

  // Contact
  document.getElementById('contactTitle').textContent = t.contactTitle;
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  t.contact.forEach(c => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${c.label}:</strong> ${c.value}`;
    contactList.appendChild(div);
  });

  // LinkedIn button
  const linkedinBtn = document.getElementById('linkedinBtn');
  linkedinBtn.onclick = () => window.open(t.linkedinUrl, '_blank');

  // Button states
  document.getElementById('lang-cz').classList.toggle('active', lang === 'cz');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

// Event listeners
document.getElementById('lang-cz').addEventListener('click', () => updateLanguage('cz'));
document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(currentLang);
});
