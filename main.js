"use strict";

function createProject(number, name) {
  return `
    <a href="./JavaScript30/${number} - ${name}/index-START.html" class="project">
      <div class="project__description">
        <h3>#${number}</h3>
        <span>${name}</span>
      </div>
    </a>
  `;
}

function displayProjects(folders) {
  const projects = document.querySelector(".projects");
  projects.innerHTML = folders
    .map((folder) => {
      const [number, name] = folder.name.split("-");
      return createProject(number.trim(), name.trim());
    })
    .join("");
}

function loadFolders() {
  return fetch("./data/folderName.json")
    .then((response) => response.json())
    .then((json) => json.folders);
}

loadFolders().then((folders) => {
  displayProjects(folders);
});

window.addEventListener("load", () => {
  window.scrollY = window.innerHeight;
});
