"use strict";

window.addEventListener("DOMContentLoaded", function () {
  /**
   * @description This script handles the functionality for light and dark mode, as well as tab navigation.
   */

  // Light and Dark Mode

  const $themeBtn = document.querySelector("[data-theme-btn]");
  const $HTML = document.documentElement;

  const setInitialTheme = () => {
    $HTML.dataset.theme = localStorage.getItem("theme") || "light";
  };

  const toggleTheme = () => {
    $HTML.dataset.theme = $HTML.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", $HTML.dataset.theme);
  };

  $themeBtn.addEventListener("click", toggleTheme);

  // Set initial theme on page load
  setInitialTheme();
});
