// --Pin Generate Button Event Handler--//
// document.getElementById("pin-generate").addEventListener("click",function(){
//     const pinGenerate = (Math.random()*10000 + "").split('.')[0];
//     const pinGenerateNumber = parseInt(pinGenerate);

//     // console.log(pinGenerate);
//     document.getElementById("pin-input").value = pinGenerateNumber;
// })

// --Get Pin--//
function getPin() {
  const pin = (Math.random() * 10000 + "").split(".")[0];

  if (pin.length == 4) {
    return pin;
  } else {
    console.log(pin);
    return getPin();
  }
}

// --Display Generate Pin--//

function generatePin() {
  document.getElementById("pin-input").value = getPin();
}

//  Handle Event  Calulator Digits--//
document
  .getElementById("digits-container")
  .addEventListener("click", function (event) {
    const digits = event.target.innerText;
    if (isNaN(digits)) {
      // handle Digits
      // Clear Number
    } else {
      const typedInput = document.getElementById("pin2-input");
      typedInput.value = typedInput.value + digits;
    }
  });

// --Checking Pin--//
function checkPin() {
  let pin1Input = document.getElementById("pin-input").value;
  let pin2Input = document.getElementById("pin2-input").value;

  if (pin1Input === pin2Input) {
    const correct = document.getElementById("pin-match");
    correct.style.display = "block";
    const inCorrect = document.getElementById("pin-not-match");
    inCorrect.style.display = "none";
    // handleDuplicateCheckPin("block","none");
  } 
  else {
    const correct = document.getElementById("pin-match");
    correct.style.display = "none";
    const inCorrect = document.getElementById("pin-not-match");
    inCorrect.style.display = "block";
    // handleDuplicateCheckPin("none","block");
  }
}

// function handleDuplicateCheckPin(correct,inCorret){
//     const correct = document.getElementById("pin-match");
//     correct.style.display = correct;
//     const inCorrect = document.getElementById("pin-not-match");
//     inCorrect.style.display = inCorrect;
// }
