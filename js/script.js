// Light and Dark Mode

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
  if ($HTML.dataset.theme === "dark") {
    $HTML.dataset.theme = "light";
    sessionStorage.setItem("theme", "light");
  } else {
    $HTML.dataset.theme = "dark";
    sessionStorage.setItem("theme", "dark");
  }
};

$themeBtn.addEventListener("click", changeTheme);
