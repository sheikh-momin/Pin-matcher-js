function pin(){
  const pin = getPin();
  const displayPin = document.getElementById('display-pin')
  displayPin.value = pin;
}
function getPin(){
  const pin = generatePin()
  const pinString = pin + ''
  if (pinString.length === 4){
    return pin;
  }
  else{
    return generatePin()
  }
}

function generatePin(){
  const randomPin = Math.round(Math.random()*10000)
  return randomPin;
}

document.getElementById('generate-pin').addEventListener('click', ()=>{
  pin()
})

document.getElementById('calculator').addEventListener('click',(event)=>{
  const number = event.target.innerText
  const typedNumberFiledString = document.getElementById('typed-number')
  const typedNumberFiled = typedNumberFiledString.value;

  if(isNaN(number)){
    if(number === 'C'){
      typedNumberFiledString.value = ''
    }
    else if(number === '<'){
      const digits = typedNumberFiled.split('');
      digits.pop();
      const remainingDigits = digits.join('');
      typedNumberFiledString.value = remainingDigits;
    }
  }
  else {
    
    typedNumberFiledString.value = typedNumberFiled + number
  }
})

document.getElementById('submit-btn').addEventListener('click', ()=>{
  const displayPinFiled = document.getElementById('display-pin')
  const currentPin = displayPinFiled.value; 

  const typedNumberFiled = document.getElementById('typed-number')
  const typedNumber =typedNumberFiled.value;

  const pinCorrectMassage = document.getElementById('correct-pin')
  const pinIncorrectMassage = document.getElementById('incorrect-pin')

  if(typedNumber === currentPin){
    
    pinCorrectMassage.style.display = 'block';
    pinIncorrectMassage.style.display = 'none';
  }
  else{
    
    pinIncorrectMassage.style.display = 'block';
    pinCorrectMassage.style.display = 'none';
  }
})