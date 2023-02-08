// Get the four sections
const workExperienceSection = document.querySelector('#work-experience');
const skillsSection = document.querySelector('#skills');
const studySection = document.querySelector('#study');
const personalSection = document.querySelector('#personal');

// Get the four sections in the grid
const workExperienceGridItem = document.querySelector('#grid-item-work-experience');
const skillsGridItem = document.querySelector('#grid-item-skills');
const studyGridItem = document.querySelector('#grid-item-study');
const personalGridItem = document.querySelector('#grid-item-personal');

// Add click event listeners to the four sections in the grid
workExperienceGridItem.addEventListener('click', () => {
  workExperienceSection.scrollIntoView({ behavior: 'smooth' });
});
skillsGridItem.addEventListener('click', () => {
  skillsSection.scrollIntoView({ behavior: 'smooth' });
});
studyGridItem.addEventListener('click', () => {
  studySection.scrollIntoView({ behavior: 'smooth' });
});
personalGridItem.addEventListener('click', () => {
  personalSection.scrollIntoView({ behavior: 'smooth' });
});
