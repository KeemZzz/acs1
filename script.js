const toggleSwitch = document.getElementById('themeToggle');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});