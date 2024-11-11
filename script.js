async function fetchProjects() {
  try {
    const response = await fetch("http://localhost:3000/api/projects");
    const projects = await response.json();
    const projectGrid = document.querySelector(".project-grid");

    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <img src="${project.image_url}" alt="">
                    <p>${project.description}</p>
                `;
      projectGrid.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

// Function to fetch skills
async function fetchSkills() {
  try {
    const response = await fetch("http://localhost:3000/api/skills");
    const skills = await response.json();
    const skillsList = document.querySelector(".skills-list");

    skills.forEach((skill) => {
      const skillItem = document.createElement("li");
      skillItem.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
      skillsList.appendChild(skillItem);
    });
  } catch (error) {
    console.error("Error fetching skills:", error);
  }
}

// Fetch data when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchProjects();
  fetchSkills();
});
