const createCard = (project) => {
  const { projectType, img, alt, subtitle, title, href, technologies } =
    project;

  const techsItems = technologies
    .map((tech) => `<span class="tech-item">${tech}</span>`)
    .join("");

  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-tab-project", projectType);

  card.innerHTML = `
    <figure class="card-banner img-holder" style="--width: 334; --height: 180">
      <img
        src="${img}"
        alt="${alt}"
        class="img-cover"
        width="334"
        height="180"
        loading="lazy"
      />
    </figure>
    <div class="card-content">
      <span class="label-large card-subtitle">${subtitle}</span>
      <h3 class="title-large card-title">${title}</h3>
      <div class="techs-list label-medium">${techsItems}</div>
    </div>
    <a
      href="${href}"
      target="_blank"
      class="state-layer"
      aria-label="Visit the website"
    ></a>
  `;

  return card;
};

export default createCard;
