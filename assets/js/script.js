"use strict";

import projectsData from "./data/projectsData.js";
import createCard from "./components/cardProject.js";

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

// Show Projects
const $projectContainer = document.querySelector("[data-project-list]");

projectsData.forEach((project) => {
  $projectContainer.appendChild(createCard(project));
});

// Tab filter projects
const $tabsBtnFilters = document.querySelectorAll("[data-tab-btn-filter]");
const $tabProjects = document.querySelectorAll("[data-tab-project]");
let lastActiveTabBtnFilter = document.querySelector(
  "[data-tab-btn-filter].active"
);

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
$tabsBtnFilters.forEach((tabBtn) =>
  tabBtn.addEventListener("click", handleTabClick)
);

// dynamic year copyright.
document.querySelector(".current-yr-cp").textContent = new Date().getFullYear();
