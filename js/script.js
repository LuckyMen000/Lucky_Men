/*const switchInput = document.getElementById('flexSwitchCheckDefault');
const bodyElement = document.body;

const savedSettings = localStorage.getItem('pageSettings');
if (savedSettings) {
  const parsedSettings = JSON.parse(savedSettings);
  if (parsedSettings.isDarkMode) {
    switchInput.checked = true;
    applyDarkMode();
  }
}

switchInput.addEventListener('change', function () {
  if (this.checked) {
    applyDarkMode();
  } else {
    applyLightMode();
  }
});

function applyDarkMode() {
  bodyElement.classList.add('dark');
  bodyElement.classList.add('bg-dark');
  const settings = { isDarkMode: true };
  localStorage.setItem('pageSettings', JSON.stringify(settings));
}

function applyLightMode() {
  bodyElement.classList.remove('dark');
  bodyElement.classList.remove('bg-dark');
  const settings = { isDarkMode: false };
  localStorage.setItem('pageSettings', JSON.stringify(settings));
}*/
