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

// Tab sections
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

// Tab filter projects
const $tabsBtnFilters = document.querySelectorAll("[data-tab-btn-filter]");
const $tabProjects = document.querySelectorAll("[data-tab-project]");
let lastActiveTabBtnFilter = document.querySelector("[data-tab-btn-filter].active");

// Ensure there's an initially active tab button
if (!lastActiveTabBtnFilter && $tabsBtnFilters.length > 0) {
  lastActiveTabBtnFilter = $tabsBtnFilters[0];
  lastActiveTabBtnFilter.classList.add("active");
}

// Event handler function for tab clicks
function handleTabClick(event) {
  const clickedTab = event.currentTarget;

  if (lastActiveTabBtnFilter) lastActiveTabBtnFilter.classList.remove("active");

  clickedTab.classList.add("active");
  lastActiveTabBtnFilter = clickedTab;

  const filter = clickedTab.dataset.tabBtnFilter;

  $tabProjects.forEach((project) => {
    filter === "all" || project.dataset.tabProject === filter
      ? project.classList.remove("hidden")
      : project.classList.add("hidden");
  });
}

// Add event listeners to all tab buttons
$tabsBtnFilters.forEach(tabBtn => tabBtn.addEventListener("click", handleTabClick));
