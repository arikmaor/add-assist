const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const submitButton = document.getElementById('submit');
const messageSpan = document.getElementById('message');

function handleSubmit(event) {
  chrome.storage.sync.set({
    minPercentage: minInput.value,
    maxPercentage: maxInput.value,
  });
  messageSpan.textContent = 'Saved!';
}

function handleInputChange(event) {
  messageSpan.textContent = '';
}

function init() {
  chrome.storage.sync.get(['minPercentage', 'maxPercentage'], ({minPercentage, maxPercentage}) => {
    minInput.value = minPercentage;
    maxInput.value = maxPercentage;

    minInput.addEventListener('change', handleInputChange);
    maxInput.addEventListener('change', handleInputChange);
    submitButton.addEventListener('click', handleSubmit);
  });
}

init();
