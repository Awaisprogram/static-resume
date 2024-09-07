// TypeScript Code
var toggleButton = document.getElementById('toggle-button');
var skillsList = document.getElementById('skills-list');
var isSkillsVisible = false;
toggleButton.addEventListener('click', function () {
    if (isSkillsVisible) {
        skillsList.classList.add('hidden');
        toggleButton.textContent = 'Show Skills';
    }
    else {
        skillsList.classList.remove('hidden');
        toggleButton.textContent = 'Hide Skills';
    }
    isSkillsVisible = !isSkillsVisible;
});
