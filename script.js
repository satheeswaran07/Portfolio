const portfolioData = {
  name: "S. Satheeswaran",
  role: "Web Developer",
  about: "I am a beginner in front-end development with a keen interest in building web applications. Currently, I'm learning backend development to become a full-stack developer. My goal is to create engaging, user-friendly websites while expanding my skills in both front-end and back-end technologies",
  projects: [
    {
      title: "Local Events in our Community",
      description: "This website showcases local events, providing details about upcoming activities and gatherings in the community",
      link: "https://github.com/satheeswaran07/Local-Events-in-our-Community.git"
    },
    {
      title: "Dynamic Portfolio",
      description: "A portfolio site using JavaScript and inline JSON.",
      link: "https://example.com/project2"
    }
  ],
  skills: ["HTML", "CSS", "JavaScript"],
  contact: {
    email: "satheeswaran0707@gmail.com",
    phone: "9884458381",
    address: "No: 36, Sekkizhar 1st Street, MGR Nagar, Chennai, 600078"
  }
};

// Function to populate the header
function populateHeader() {
  const nameElement = document.getElementById('name');
  const roleElement = document.getElementById('role');
  
  if (nameElement && roleElement) {
    nameElement.textContent = portfolioData.name;
    roleElement.textContent = portfolioData.role;
  }
}

// Function to populate the about section
function populateAbout() {
  const aboutElement = document.getElementById('about-text');
  if (aboutElement) {
    aboutElement.textContent = portfolioData.about;
  }
}

// Function to populate projects
function populateProjects() {
  const projectsList = document.getElementById('projects-list');
  if (projectsList) {
    portfolioData.projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsList.appendChild(projectDiv);
    });
  }
}

// Function to populate skills
function populateSkills() {
  const skillsList = document.getElementById('skills-list');
  if (skillsList) {
    portfolioData.skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });
  }
}

// Function to populate contact information
function populateContact() {
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const addressElement = document.getElementById('address');
  
  if (emailElement) emailElement.textContent = `Email: ${portfolioData.contact.email}`;
  if (phoneElement) phoneElement.textContent = `Phone: ${portfolioData.contact.phone}`;
  if (addressElement) addressElement.textContent = `Address: ${portfolioData.contact.address}`;
}

// Call functions to populate the portfolio
populateHeader();
populateAbout();
populateProjects();
populateSkills();
populateContact();