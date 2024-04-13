"use strict";

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

// Tab
const $tabsBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let [lastActiveTabBtn] = $tabsBtn;

$tabsBtn.forEach((item) => {
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

// Set initial theme on page load
setInitialTheme();

// dynamic year copyright.
document.querySelector(".current-yr-cp").textContent = new Date().getFullYear();
