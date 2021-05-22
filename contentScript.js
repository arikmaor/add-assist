function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function performResizing() {
  chrome.storage.sync.get(['minPercentage', 'maxPercentage'], ({minPercentage, maxPercentage}) => {
    Splitting({
      target: 'p',
      by: 'lines'
    }).forEach(({lines}) => {
      lines.forEach((words) => {
        const percentage = `${getRandomInt(minPercentage, maxPercentage)}%`;
        words.forEach((word) => {
          word.style.fontSize = percentage;
        });
      });
    });
  });
}

performResizing()
