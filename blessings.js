function countTheBlessings() {
    let blessingsReceived;
    let blessingsGiven;
    let moreBlessings;
    blessingsReceived = prompt("How many blessings were you able to count so far?!");
    blessingsGiven = prompt("Now, think of how many times you've blessed someone else. What percentages of your blessings would you say that is? (Use decimals; Ex. 40% would be 0.40)");
    
    // NOTE: The prompt returns values of the type String. We need to change the Strings into Numbers before we use them for math.
    let blessingsReceivedNumber = Number(blessingsReceived);
    let blessingsGivenNumber = Number(blessingsGiven);
    moreBlessings = blessingsReceivedNumber * blessingsGivenNumber;
    
    blessedPara.innerHTML = `The amount of blessings you received alone is ${blessingsReceivedNumber}!`;
    bonusBlessings.innerHTML = `However, the amount of add'tl blessings you're due to receive from the return of blessings others is ${moreBlessings} at ${blessingsGivenNumber*200}%.`;
  }
  
  addEmUp.onclick = countTheBlessings;