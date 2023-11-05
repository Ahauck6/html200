let acctBalance = 700

function withdraw() {
    let withdrawInput = prompt ('How much would you like to withdraw?');
    acctBalance = acctBalance - Number(withdrawInput);
    alert(acctBalance)
  }

  function deposit() {
    let depositInput = prompt ('How much would you like to deposit?');
    acctBalance = acctBalance + Number(depositInput);
    alert(acctBalance)
  }

 function currBalance() {
    prompt(`${acctBalance} is your current balance.`);
  }

function newBalance() {
  let input = prompt ('Bank action request? q to quit, w to withdraw, d to deposit, or b to view balance.').toLowerCase();
  switch(input) {
    case 'w': {
      withdraw();
      break;
    }
     case 'd': {
      deposit();
      break;
     }
    case 'b': {
      currBalance();
      break;
    }
    case 'q': {
      throw new Error('Exiting');
    }
    default: {
        prompt ('Invalid input');
    }
  }
} 

let input = 1

do {
    newBalance();
} while (input != 'q')

