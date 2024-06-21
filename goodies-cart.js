function goodieCheck() {
    let name;
    let item;
    name = prompt("What's your preferred name?");
    goodie = prompt("What goodies are you buying today?");
    headerCart.innerHTML = `Hey there ${name}, you left something!`;
    ParaCart.innerHTML = `Your ${goodie} is still in your cart, and is ready for purchase!`;
  }
  
  button4Cart.onclick = goodieCheck;