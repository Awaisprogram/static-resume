// TypeScript Code
const toggleButton = document.getElementById('toggle-button')!;
const skillsList = document.getElementById('skills-list')!;

let isSkillsVisible = false;

toggleButton.addEventListener('click', () => {
    if (isSkillsVisible) {
        skillsList.classList.add('hidden');
        toggleButton.textContent = 'Show Skills';
    } else {
        skillsList.classList.remove('hidden');
        toggleButton.textContent = 'Hide Skills';
    }
    isSkillsVisible = !isSkillsVisible;
});
