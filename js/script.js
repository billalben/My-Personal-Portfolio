/**
 * FILEPATH: /Users/billal/programming/myGithub/My-Personal-Portfolio/js/script.js
 *
 * @description This script handles the functionality for light and dark mode, as well as tab navigation.
 */

// Light and Dark Mode

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

/**
 * @description Changes the theme between light and dark mode.
 */
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

// Tab
$tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach((item) => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const $tabContent = document.querySelector(
      `[data-tab-content='${item.dataset.tabBtn}']`
    );

    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

// dynamic year copyright.
document.querySelector(".current-yr-cp").textContent = new Date().getFullYear();
