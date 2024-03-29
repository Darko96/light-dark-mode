// Selektujemo input polje koje ima type checkbox
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgba(0 0 0 / 50%)"
    : "rgba(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgba(255 255 255 / 50%)"
    : "rgba(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  // replace menja prvu stavku, drugom stavkom
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark
    ? localStorage.setItem("theme", DARK_THEME)
    : localStorage.setItem("theme", LIGHT_THEME);
  isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

/*
// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgba(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgba(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode"; //
  // replace menja prvu stavku, drugom stavkom
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("theme", "dark");
  imageMode("dark");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgba(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgba(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("theme", "light");
  imageMode("light");
}
*/
// Switch Theme Dynamically
function switchTheme(event) {
  // checked je true kada se klikne na switch dugme
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    // darkMode();
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    // lightMode();
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
// Uzimamo kljuc 'theme' iz local storage-a i stavljamo ga u promenljivu currentTheme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
