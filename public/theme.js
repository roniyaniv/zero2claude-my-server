// Runs in <head>, before the page is drawn, so it never flashes the wrong theme.
// Use the theme the visitor picked last time, or else their system setting.
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');

// Once the page has loaded, hook up the toggle button in the nav bar.
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('theme-toggle');

  // The icon shows the mode you'll switch TO: a moon in light mode, a sun in dark mode.
  function updateButton() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    button.textContent = isDark ? '☀️' : '🌙';
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  button.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateButton();
  });

  updateButton();
});
