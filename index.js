

function num_gen_and_image_change(x) 
{
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image = document.querySelectorAll("img")[x];
  image.setAttribute("src", randomImageSource);
  return randomNumber;
}



var num1 = num_gen_and_image_change(0);
var num2 = num_gen_and_image_change(1);



function declare_winner()
{
  if (num1 > num2) 
  {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (num2 > num1) 
  {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else 
  {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

declare_winner();



