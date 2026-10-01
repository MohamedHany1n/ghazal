// السنة في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Dark mode: حفظ الاختيار =====
const themeToggle = document.getElementById('theme-toggle');

try {
  if (localStorage.getItem('theme') === 'dark') themeToggle.checked = true;
} catch (e) {}

themeToggle.addEventListener('change', () => {
  try {
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
  } catch (e) {}
});

// ===== قايمة الموبايل =====
const menuToggle = document.getElementById('menu-toggle');

// اقفل القايمة لما تدوس على أي لينك
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => { menuToggle.checked = false; });
});

// واقفلها لو دست برا الهيدر
document.addEventListener('click', e => {
  if (!e.target.closest('.header')) menuToggle.checked = false;
});