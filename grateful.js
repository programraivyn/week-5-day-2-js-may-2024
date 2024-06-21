function gracefulGratitude() {
    let thankful4;
    thankful4 = prompt("What's your daily gratitude towards?");
    gratiGraph.innerHTML = `<em>While I'm grateful for a whole lot, I really can't say thank you enough for ${thankful4}! I wouldn't be who I am today without ${thankful4}!</em>`;
  }
  
  gratiButton.onclick = gracefulGratitude;