  //player Name
  let player1 = "Player1";
  let player2 = "Player2";

//  F U N C T I O N  T O   E D I T  P L A Y E R   N A M E S  
  function editNames() {
      player1 = prompt("Enter Name of Player 1 😍")
      player2 = prompt("Enter Name of PLayer 2 😋")
      alert(`Let the games begin, ${player1} & ${player2} !!! 👾🦾🔥`)

      if (player1.length < 1 || player2.length < 1) {
          alert('please enter valid name');
          return;
      }
      document.querySelector("p.Player1")
          .innerHTML = player1;

      document.querySelector("p.Player2")
          .innerHTML = player2;
  }

// F U N C T I O N   T O   R O L L  T H E   D I C E   
  function rollTheDice() {
      let diceNum1 = document.querySelector(".img1");
      let diceNum2 = document.querySelector(".img2");

      diceNum1.setAttribute("src", "diceroll.gif")
      diceNum2.setAttribute("src", "diceroll.gif")

      let result = document.querySelector('h1')
      result.innerHTML = ""
      setTimeout(() => {
          let randomNumber1 = Math.floor(Math.random() * 6) + 1;
          let randomNumber2 = Math.floor(Math.random() * 6) + 1;

          diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
          diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

          //determine the winner
          if (randomNumber1 === randomNumber2) {
              result.innerHTML = "Draw!"
          }
          else if (randomNumber1 < randomNumber2) {
              result.innerHTML = (player2 + " WINS!");
          }
          else {
              result.innerHTML = (player1 + " WINS!");
          }

      }, 2500);
  }
