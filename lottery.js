document.getElementById('compareBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const userNumber = parseInt(document.getElementById('userNumber').value, 10);
  
    if (!name || !amount || isNaN(userNumber)) {
      document.getElementById('result').innerText = '🎭 Please fill in all fields with valid inputs!';
      return;
    }
  
    if (userNumber < 10 || userNumber > 99) {
      document.getElementById('result').innerText = '❌ Enter a valid two-digit number!';
      return;
    }
  
    
    const randomNumber = Math.floor(Math.random() * 90) + 10;
  
    
    const userDigits = String(userNumber).split('').map(Number); 
    const randomDigits = String(randomNumber).split('').map(Number); 
  
   
    const exactMatch = userNumber === randomNumber; 
    const oneDigitMatch = userDigits.some((digit) => randomDigits.includes(digit)); 
  
    
    let message = `🎉 Hello, ${name}! You picked ${userNumber}. The lucky number is ${randomNumber}. `;
  
    if (exactMatch) {
      message += `🎊 Congratulations! Both digits match exactly, and you've won ₹1000! 🎉`;
    } else if (oneDigitMatch) {
      message += `🎉 Good job! One digit matches, and you've won ₹150! 🎊`;
    } else {
      message += `😢 Better luck next time!`;
    }
  
    document.getElementById('result').innerHTML = message;
  });
  
