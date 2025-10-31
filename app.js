let currentLang = 'en';

function updateLanguage(lang) {
  currentLang = lang;
  const t = texts[lang];

  // Header
  document.getElementById('name').textContent = t.name;
  document.getElementById('title').textContent = t.title;

  // Hero
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('intro').textContent = t.intro;

  // Buttons
  document.getElementById('hireBtn').textContent = t.hire;
//  document.getElementById('cvBtn').textContent = t.viewCV;
  document.getElementById('linkedinBtn').textContent = t.linkedin;

  // Skills
  const skillsContainer = document.getElementById('skills');
  skillsContainer.innerHTML = '';
  t.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill';
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });

  // Availability
  document.getElementById('availability').textContent = t.availability;

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
  document.getElementById('linkedinBtn').onclick = () =>
    window.open(t.linkedinUrl, '_blank');

  // HireMe button
  document.getElementById('hireBtn').onclick = () => {
    //const email = "someone@example.com";
    const email = t.myemail;
    const subject = "Hello from your website";
    //const body = "Hi Jan, I’d like to get in touch with you.";  
    // Encode subject & body to make them URL-safe
    //const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; 
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`; 
    // Open the user's default mail app
    window.location.href = mailtoLink;
  };

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();


  // Button states
  document.getElementById('lang-cz').classList.toggle('active', lang === 'cz');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

// Switchers
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lang-cz').addEventListener('click', () => updateLanguage('cz'));
  document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  updateLanguage(currentLang);
});
