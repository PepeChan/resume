const workExperience = document.getElementById("work-experience");
const skills = document.getElementById("skills");
const portfolio = document.getElementById('portfolio');
const personal = document.getElementById('personal');

const workExperienceButton = document.querySelector('.work-experience');
const skillsButton = document.querySelector('.work-skills');
const showButton = document.querySelector('.portfolio');
const personalButton = document.querySelector('.personal');

// Add click event listeners to the four sections in the grid
workExperienceGridItem.addEventListener('click', () => {
  workExperience.scrollIntoView({ behavior: 'smooth' });
});
skillsGridItem.addEventListener('click', () => {
  skills.scrollIntoView({ behavior: 'smooth' });
});
studyGridItem.addEventListener('click', () => {
  portfolio.scrollIntoView({ behavior: 'smooth' });
});
personalGridItem.addEventListener('click', () => {
  personal.scrollIntoView({ behavior: 'smooth' });
});

// Get al the buttons
const buttons = document.querySelectorAll('.big-button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the corresponding section
    const sectionId = this.getAttribute('data-section-id');
    const section = document.getElementById(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth'});
  });
});

document.getElementById("workExperienceButton").addEventListener("click", function() {
  document.getElementById("workExperience").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("skillsButton").addEventListener("click", function() {
  document.getElementById("skills").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("showButton").addEventListener("click", function() {
  document.getElementById("education").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("personalButton").addEventListener("click", function() {
  document.getElementById("personalInfo").scrollIntoView({
    behavior: "smooth"
  });
});
