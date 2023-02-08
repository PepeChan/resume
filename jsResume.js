// Get the four sections
//const workExperienceSection = document.querySelector('#work-experience');
// const skillsSection = document.querySelector('#skills');
// const studySection = document.querySelector('#study');
// const personalSection = document.querySelector('#personal');

// Get the four sections in the grid
// const workExperienceGridItem = document.querySelector('#grid-item-work-experience');
// const skillsGridItem = document.querySelector('#grid-item-skills');
// const studyGridItem = document.querySelector('#grid-item-study');
// const personalGridItem = document.querySelector('#grid-item-personal');

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